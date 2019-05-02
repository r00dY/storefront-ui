class Color {
  constructor(color) {
    this._color = color;
  }

  get css() {
    return this._color;
  }

  toString() {
    return this._color;
  }
}

export default Color;
