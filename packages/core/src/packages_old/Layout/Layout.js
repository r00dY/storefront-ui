import { rs } from "responsive-helpers";

class Layout {
  constructor(config) {
    this.container = rs(config.container);
    this.colNumber = config.colNumber;
    this.gutter = rs(config.gutter);
    this.margin = rs("100vw")
      .subtract(this.container)
      .divide(2);

    this.col = this.container
      .subtract(this.gutter.multiply(this.colNumber - 1))
      .divide(this.colNumber);
  }

  cols(n) {
    return this.col.multiply(n).add(this.gutter.multiply(n - 1));
  }
}

Layout.normalizeGridItemParams = function(params, colNumber) {
  if (typeof params === "undefined") {
    params = colNumber;
  } else if (typeof params === "string") {
    const parts = params.trim().match(/^([0-9]+)[ \t]*\/[ \t]*([0-9]+)$/);

    if (parts === null) {
      throw new Error(
        "[GridItem params] wrong input format (should be x/y, where x and y are positive integer numbers): " +
          params
      );
    }

    let n = parseInt(parts[1]);
    let d = parseInt(parts[2]);

    if (colNumber % d !== 0) {
      throw new Error(
        `[GridItem params] denominator must be dividable by column number of Grid. Denominator given: ${d}, col number: ${colNumber}`
      );
    }

    params = n * (colNumber / d);
  }

  if (typeof params === "number") {
    return {
      cols: params,
      offset: 0,
      order: 0
    };
  } else if (Array.isArray(params)) {
    return {
      cols: params[0] || 0,
      offset: params[1] || 0,
      order: params[2] || 0
    };
  }

  params.cols = params.cols || 0;
  params.offset = params.offset || 0;
  params.order = params.order || 0;

  return params;
};

export default Layout;
