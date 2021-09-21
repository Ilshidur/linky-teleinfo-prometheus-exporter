# linky-telenifo-prometheus-exporter

Listens to a serial signal over UART, parses the ENEDIS Teleinfo datas and exports them as Prometheus metrics. Best suited for Raspberry Pis.

## Usage

*No packages other than the native node packages are needed.*

```bash
linky-telenifo-prometheus-exporter [serial file] [metrics port]
```

* `[serial file]` : the path of the virtual serial port, defaults to `/dev/ttyAMA0`.
* `[metrics port]` : the port on which the Prometheus metrics will be exposed, defaults to `9850`.

## Installation

### As a global module

```bash
npm i -g linky-telenifo-prometheus-exporter
linky-telenifo-prometheus-exporter
```

### By cloning the git project

```bash
git clone https://github.com/Ilshidur/linky-telenifo-prometheus-exporter.git
node index.js
```
