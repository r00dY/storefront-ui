import { rs } from "responsive-helpers";

class Layout {
    constructor(config) {
        this.container = config.container;
        this.colNumber = config.colNumber;
        this.gutter = config.gutter;
        this.margin = rs("100vw")
            .subtract(config.container)
            .divide(2);

        this.col = this.container
            .subtract(this.gutter.multiply(config.colNumber - 1))
            .divide(config.colNumber);
    }



    cols(n) {
        return this.col.multiply(n).add(this.gutter.multiply(n - 1));
    }
}

Layout.normalizeGridItemParams = function(params) {
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
