class Font {
    constructor(css) {
        this._css = css;
    }

    get css() {
        return this._css;
    }

    toString() {
        return this._css;
    }
}

export default Font;
