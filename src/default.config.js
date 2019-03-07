import { rs } from "responsive-helpers";

const config = {
    ranges: {
        xs: 0, // all phones in vertical mode are below this. Minimal 320px for iPhone SE, maximal 414px for iPhone 6+. All Galaxy Note etc, have lower ones.
        xs_plus: 420, // horizontal phones + untypical small tablets (like Galaxy Nexus), least important resolution.
        sm: 720, // all vertical tablets start with 720px (Surface). iPads and Galaxy Tab, etc, all are above. Nexus 7 is an exception, should behave as SM.
        md: 960, // standard horizontal tablets are > 960px (even with Nexus 7), like iPad or Galaxy
        lg: 1200, // smaller laptops (1280) and big tablets in horizontal mode (iPad Pro, Galaxy 10)
        lg_plus: 1366, // most laptops 13 inch and 15 inch (1366, 1440px)
        xl: 1600, // bigger resolution laptops (1600)
        xl_plus: 2000, // desktops bigger than full HD
    },
    fonts: {},
    colors: {},
    spacings: {
        s1: 10,
        s2: 20,
        s3: 30,
        s4: 40,
        s5: 50,
        s6: 70,
        s7: 100,
        s8: 150,
        s9: 220
    },
    layout: {
        container: rs({
            xs: "90vw",
            sm: "85vw",
            xl_plus: 1700
        }),
        gutter: rs({
            xs: 20,
            md: 35
        }),
        colNumber: 24
    }
};

export default config;
