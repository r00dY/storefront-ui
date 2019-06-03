class Ease {
  constructor(css) {
    this._css = css;
  }

  get css() {
    return this._css;
  }
}

Ease.prototype.toString = function() {
  return this._css;
};

Ease.quadIn = new Ease("cubic-bezier(0.55, 0.085, 0.68, 0.53)");
Ease.quadOut = new Ease("cubic-bezier(0.25, 0.46, 0.45, 0.94)");
Ease.quadInOut = new Ease("cubic-bezier(0.25, 0.46, 0.45, 0.94)");

Ease.cubicIn = new Ease("cubic-bezier(0.55, 0.055, 0.675, 0.19)");
Ease.cubicOut = new Ease("cubic-bezier(0.215, 0.61, 0.355, 1)");
Ease.cubicInOut = new Ease("cubic-bezier(0.215, 0.61, 0.355, 1)");

Ease.quartIn = new Ease("cubic-bezier(0.895, 0.03, 0.685, 0.22)");
Ease.quartOut = new Ease("cubic-bezier(0.165, 0.84, 0.44, 1)");
Ease.quartInOut = new Ease("cubic-bezier(0.165, 0.84, 0.44, 1)");

Ease.quintIn = new Ease("cubic-bezier(0.755, 0.05, 0.855, 0.06)");
Ease.quintOut = new Ease("cubic-bezier(0.23, 1, 0.32, 1)");
Ease.quintInOut = new Ease("cubic-bezier(0.23, 1, 0.32, 1)");

Ease.expoIn = new Ease("cubic-bezier(0.95, 0.05, 0.795, 0.035)");
Ease.expoOut = new Ease("cubic-bezier(0.19, 1, 0.22, 1)");
Ease.expoInOut = new Ease("cubic-bezier(0.19, 1, 0.22, 1)");

export default Ease;
