const METRICS_PREFIX = 'teleinfo_';
const monitoredMetricTypes = {
  ISOUSC: 'amperes', // "Intensité souscrite" : A
  BASE: 'wattshour', // "Index option Base" : Wh
  IINST: 'amperes', // "Intensité Instantanée" : A
  IMAX: 'amperes', // "Intensité maximale appelée" : A
  PAPP: 'voltsamperes', // "Puissance apparente" : VA
};

module.exports = class Metric {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }

  get monitored() {
    return Object.keys(monitoredMetricTypes).includes(this.name);
  }

  static fromEURIDISLine(line) {
    const match = /^(?<name>\S*) (?<value>\S*).*$/.exec(line);
    if (!match) {
      return undefined;
    }
    const { name, value } = match.groups;
    return new Metric(name, value);
  }

  toPrometheusMetric() {
    const unit = monitoredMetricTypes[this.name];
    return `${METRICS_PREFIX}${this.name.toLowerCase()}_${unit} ${this.value}`;
  }
};
