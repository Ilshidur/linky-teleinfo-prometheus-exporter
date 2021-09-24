# ⚡ linky-teleinfo-prometheus-exporter

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![npm version][version-badge]][version-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![Code Climate][maintainability-badge]][maintainability-url]
[![downloads][downloads-badge]][downloads-url]

[![NPM][npm-stats-badge]][npm-stats-url]

Listens to a serial signal over UART, parses the ENEDIS Teleinfo datas and exports them as Prometheus metrics.

Best suited for Raspberry Pis.

## ⚡ Usage

*No packages other than the native node packages are needed.*

```bash
linky-teleinfo-prometheus-exporter [serial file] [metrics port]
```

* `[serial file]` : the path of the virtual serial port, defaults to `/dev/ttyAMA0`.
* `[metrics port]` : the port on which the Prometheus metrics will be exposed, defaults to `9850`.

## ⚡ Installation

### As a global module

```bash
npm i -g linky-teleinfo-prometheus-exporter
linky-teleinfo-prometheus-exporter
```

### By cloning the git project

```bash
git clone https://github.com/Ilshidur/linky-teleinfo-prometheus-exporter.git
node index.js
```

## ⚡ Exposed metrics

| Metric name                  | ENEDIS metric label        | Unit |
|------------------------------|----------------------------|------|
| `teleinfo_iinst_amperes`     | Intensité souscrite        | A    |
| `teleinfo_imax_amperes`      | Index option Base          | Wh   |
| `teleinfo_papp_voltsamperes` | Intensité Instantanée      | A    |
| `teleinfo_isousc_amperes`    | Intensité maximale appelée | A    |
| `teleinfo_base_wattshour`    | Puissance apparente        | VA   |

*A `GET` HTTP request on the `/metrics` route gives something like this :*

```bash
teleinfo_iinst_amperes 002
teleinfo_imax_amperes 090
teleinfo_papp_voltsamperes 00520
teleinfo_isousc_amperes 30
teleinfo_base_wattshour 005347808
```

<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this project !<br/>
  <a href="https://github.com/Ilshidur/linky-teleinfo-prometheus-exporter/issues/new">Your feedback is appreciated</a>
</p>

[version-badge]: https://img.shields.io/npm/v/linky-teleinfo-prometheus-exporter.svg
[version-url]: https://www.npmjs.com/package/linky-teleinfo-prometheus-exporter
[vulnerabilities-badge]: https://snyk.io/test/npm/linky-teleinfo-prometheus-exporter/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/linky-teleinfo-prometheus-exporter
[dependency-badge]: https://david-dm.org/ilshidur/linky-teleinfo-prometheus-exporter.svg
[dependency-url]: https://david-dm.org/ilshidur/linky-teleinfo-prometheus-exporter
[devdependency-badge]: https://david-dm.org/ilshidur/linky-teleinfo-prometheus-exporter/dev-status.svg
[devdependency-url]: https://david-dm.org/ilshidur/linky-teleinfo-prometheus-exporter#info=devDependencies
[build-badge]: https://travis-ci.org/Ilshidur/linky-teleinfo-prometheus-exporter.svg
[build-url]: https://travis-ci.org/Ilshidur/linky-teleinfo-prometheus-exporter
[maintainability-badge]: https://api.codeclimate.com/v1/badges/1460cc66adbf6478806d/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/linky-teleinfo-prometheus-exporter/maintainability
[downloads-badge]: https://img.shields.io/npm/dt/linky-teleinfo-prometheus-exporter.svg
[downloads-url]: https://www.npmjs.com/package/linky-teleinfo-prometheus-exporter
[npm-stats-badge]: https://nodei.co/npm/linky-teleinfo-prometheus-exporter.png?downloads=true&downloadRank=true
[npm-stats-url]: https://nodei.co/npm/linky-teleinfo-prometheus-exporter
