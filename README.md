# ⚡ linky-teleinfo-prometheus-exporter

⚡ Listens to a serial signal over UART, parses the ENEDIS Teleinfo datas and exports them as Prometheus metrics. ⚡

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

```bash
teleinfo_iinst_amperes 002
teleinfo_imax_amperes 090
teleinfo_papp_voltsamperes 00520
teleinfo_isousc_amperes 30
teleinfo_base_wattshour 005347808
```

| Metric name                  | ENEDIS metric label        | Unit |
|------------------------------|----------------------------|------|
| `teleinfo_iinst_amperes`     | Intensité souscrite        | A    |
| `teleinfo_imax_amperes`      | Index option Base          | Wh   |
| `teleinfo_papp_voltsamperes` | Intensité Instantanée      | A    |
| `teleinfo_isousc_amperes`    | Intensité maximale appelée | A    |
| `teleinfo_base_wattshour`    | Puissance apparente        | VA   |

<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this project !<br/>
  <a href="https://github.com/Ilshidur/linky-teleinfo-prometheus-exporter/issues/new">Your feedback is appreciated</a>
</p>
