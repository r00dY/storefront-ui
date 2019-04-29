import React from "react";

const StorefrontUIContext = React.createContext({
});

const getAppearance = (appearance, name, ...maps) => {

    let map = Object.assign({}, ...maps);

    if (!appearance) {
        if (map.default) {
            appearance = map.default;
        }
        else {
            throw new Error(`No 'default' appearance defined for ${name}`);
        }
    }
    else if (typeof appearance === 'string') {
        if (map[appearance]) {
            appearance = map[appearance];
        }
        else {
            throw new Error (`Unknown component appearance for ${name}: ${appearance}`);
        }
    }

    return appearance;
};

export default StorefrontUIContext;
export {
    getAppearance
}
