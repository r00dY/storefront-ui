import React from "react";
import { storiesOf } from "@storybook/react";
import EditorialIntro from "./EditorialIntro";
import Unwrapper from "../../Unwrapper/Unwrapper";
import fonts from "../../../fonts.config";

const _title = "The landscape";
const _paragraph = `The open-air Kivik Art Centre in Sweden blurs the boundary between the man-made and the natural. It's the ideal context for this season's COS collection for men, revealed in a collaboration with the photographer and artist Viviane Sassen.`;

const _title2 = "MAGICALLY ENERGETIC FOAM";
const _paragraph2 = `Our lightweight Nike ZoomX foam cushioning uses cutting-edge engineering to give you the greatest possible energy return, turning the impact of your step into energy for your next stride.`;

const EditorialIntro1 = (
    <EditorialIntro
        title={_title}
        text={_paragraph}
        titleFont={fonts.COS.label1}
        textFont={fonts.COS.editorial2}
        textAlign={"justify"}
    />
);
const EditorialIntro2 = (
    <EditorialIntro
        title={_title2}
        text={_paragraph2}
        titleFont={fonts.NIKE.heading1}
        textFont={fonts.NIKE.text1}
        textAlign={"center"}
    />
);

storiesOf("EditorialIntro", module).add("cos", () => (
    <div>
        <Unwrapper componentName={"EditorialIntro"} storyName={"cos"} />
        {EditorialIntro1}
    </div>
));
storiesOf("EditorialIntro", module).add("nike", () => (
    <div>
        <Unwrapper componentName={"EditorialIntro"} storyName={"nike"} />
        {EditorialIntro2}
    </div>
));
export { EditorialIntro1, EditorialIntro2 };
