//COS
import Font from "./core-main/Font";
import { rslin } from "responsive-helpers";

const FONT_GILL = `"GillSansMTPro", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_FAKT = `"FaktProMedium", Arial, "Helvetica Neue", Helvetica, sans-serif`;

//NIKE
const FONT_NIKE = `"Nike TG", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_HELVETICA = `"Helvetica", Arial, "Helvetica Neue", Helvetica, sans-serif`;
const FONT_FUTURA = `"Nike Futura", Arial, "Helvetica Neue", Helvetica, sans-serif`;

const COS = {
    heading1: new Font(`
        ${rslin(16, 13).css("font-size")}
        font-family: ${FONT_GILL};
        line-height: 1.2;
        font-weight: 500;
        text-transform: uppercase;
    `),
    text1: new Font(`
        font-size: 15px;
        font-family: ${FONT_GILL};
        line-height: 1.1;
        font-weight: 500;
    `),
    text2: new Font(`
        ${rslin(13, 13).css("font-size")}
        font-family: ${FONT_GILL};
        line-height: 1.5;
        font-weight: 500;
    `),
    text3: new Font(`
        ${rslin(12, 13).css("font-size")}
        font-family: ${FONT_GILL};
        line-height: 1.8;
        font-weight: 500;
    `),
    label1: new Font(`
        ${rslin(15, 15).css("font-size")}
        font-family: ${FONT_FAKT};
        line-height: 1.1;
        font-weight: 500;
        text-transform: uppercase;
    `),
    label2: new Font(`
        ${rslin(10, 10).css("font-size")}
        font-family: ${FONT_GILL};
        line-height: 1.1;
        font-weight: 500;
        text-transform: uppercase;
    `),
    editorial1: new Font(`
        ${rslin(40, 80).css("font-size")}
        font-family: ${FONT_FAKT};
        line-height: 1.1;
        font-weight: 500;
        text-transform: uppercase;
    `),
    editorial2: new Font(`
        ${rslin(20, 24).css("font-size")}
        font-family: ${FONT_FAKT};
        line-height: 1.5;
        font-weight: 500;
        text-transform: uppercase;
    `),
    editorial3: new Font(`
        ${rslin(40, 80).css("font-size")}
        font-family: ${FONT_FAKT};
        line-height: 1.5;
        font-weight: 500;
        text-transform: uppercase;
    `)
};

const NIKE = {
    heading1: new Font(`
        ${rslin(70, 80).css("font-size")}
        font-family: ${FONT_FUTURA};
        line-height: 0.85;
        font-weight: 400;
        text-transform: uppercase;
    `),
    heading2: new Font(`
        ${rslin(24, 26).css("font-size")}
        font-family: ${FONT_NIKE};
        line-height: 1.1;
        font-weight: 400;
        text-transform: uppercase;
    `),
    heading3: new Font(`
        ${rslin(24, 30).css("font-size")}
        font-family: ${FONT_HELVETICA};
        line-height: 1.4;
        font-weight: 400;
        text-transform: uppercase;
    `),
    heading4: new Font(`
        ${rslin(18, 18).css("font-size")}
        font-family: ${FONT_NIKE};
        line-height: 1.1;
        font-weight: 400;
        text-transform: uppercase;
    `),
    text1: new Font(`
        ${rslin(18, 18).css("font-size")}
        font-family: ${FONT_HELVETICA};
        line-height: 1.5;
        font-weight: 400;
    `),
    text2: new Font(`
        ${rslin(16, 16).css("font-size")}
        font-family: ${FONT_HELVETICA};
        line-height: 1.5;
        font-weight: 400;
    `),
    text3: new Font(`
        ${rslin(14, 14).css("font-size")}
        font-family: ${FONT_HELVETICA};
        line-height: 1.5;
        font-weight: 400;
    `)
};

const fonts = {
    COS: COS,
    NIKE: NIKE
};

export default fonts;
