import Font from "core-main/Font";

const fontMono = `Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace`;

const fontSans = `"GillSansMTPro", Arial, "Helvetica Neue", Helvetica, sans-serif;`;

const fontSans2 = `"FaktProMedium", Arial, "Helvetica Neue", Helvetica, sans-serif`;

const fontSans3 = `"Nike TG", Arial, "Helvetica Neue", Helvetica, sans-serif;`;
const fontSans4 = `"Helvetica", Arial, "Helvetica Neue", Helvetica, sans-serif;`;
const fontSans5 = `"Nike Futura", Arial, "Helvetica Neue", Helvetica, sans-serif;`;

const fonts = {
    heading1: new Font({
        fontFamily: fontSans,
        lineHeight: 1.2,
        fontWeight: 500,
        textTransform: "uppercase",
        fontSize: "16px"
    })
};

// step function
const test = {
    xs: 6,
    lg: 12,
    xxl: 24
};

// linear function
const test = {
    xs: 6,
    md: "5%",
    lg: {
        from: 12,
        to: 24
    },
    xxl: {
        from: 24,
        slope: 0.01
    }
};

/**
 * <Component font=font1 spacing=spacing1>
 *
 *     props.font1.css spacing1. new ResponsiveSize(spacing1).css
 */

export { fonts };

// @mixin font-heading-1() {
//     font-family: $FONT_SANS;
//     @include vs(font-size, 16px, 16px);
//     line-height: 1.2;
//     font-weight: 500;
//     text-transform: uppercase;
// }
