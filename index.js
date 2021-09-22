#!/usr/bin/env node

const fs = require('fs');
const http = require('http');
const readline = require('readline');

const Metric = require('./metric');

const DEFAULT_INPUT_FILE_PATH = '/dev/ttyAMA0';
const metrics = {};

const [,, inputFilePath = DEFAULT_INPUT_FILE_PATH, port = 9850] = process.argv;

readline.createInterface(fs.createReadStream(inputFilePath))
  .on('line', (input) => {
    const metric = Metric.fromEURIDISLine(input);
    if (metric && metric.monitored) {
      metrics[metric.name] = metric;
    }
  });
console.log(`Reading from ${inputFilePath}...`);

const server = http.createServer((req, res) => {
  if (req.url !== '/metrics' || req.method !== 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(Object.values(metrics).map(metric => metric.toPrometheusMetric()).join('\n'));
});

server.listen(port);
console.log(`Listening on port ${port}...`);
