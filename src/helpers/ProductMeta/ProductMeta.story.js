import React from "react";
import { storiesOf } from "@storybook/react";
import ProductMeta from "./ProductMeta";
import fonts from "../../fonts.config";
import {
    ProductVariants1
    // ProductVariants2
} from "./ProductVariants/ProductVariants.story";
import {
    AccordionGroup1,
    AccordionGroup2
} from "../AccordionGroup/AccordionGroup.story";
import {
    SizePicker1,
    SizePicker5
} from "../../helpers/SizePicker/SizePicker.story";

const ProductMeta1 = props => (
    <ProductMeta
        title={"Straight-leg velvet trousers"}
        priceRegular={"129€"}
        priceDiscounted={"99€"}
        description={
            <div>
                <p>
                    Cut for a straight leg, these trousers are tailored from
                    soft velvet with a hint of stretch and a light-catching
                    quality. Fastened with a menswear-inspired hook-and-bar
                    closure, they have shaping press folds, slanted side pockets
                    and neat edges at the hem.
                </p>
                <p>
                    Inside leg length of size 36 is 79cm / Model is 178cm tall
                    and wearing a size 38
                </p>
            </div>
        }
        titleFont={fonts.COS.heading1}
        textFont={fonts.COS.text1}
        buttonFont={fonts.COS.heading1}
        variants={ProductVariants1}
        sizes={SizePicker1}
        accordion={AccordionGroup1}
        {...props}
    />
);
//
// const ProductMeta2 = props => (
//     <ProductMeta
//         title={"Nike Zoom Pegasus Turbo"}
//         priceRegular={"180$"}
//         priceDiscounted={"120$"}
//         description={
//             <div>
//                 {" "}
//                 <p>
//                     The Nike Zoom Pegasus Turbo is the Pegasus you know and love
//                     with major upgrades for speed. The feather-light upper looks
//                     as fast as it feels, while the revolutionary Nike ZoomX foam
//                     that was designed for elite Nike runners during the Breaking
//                     2 attempt brings record-breaking speed and responsiveness to
//                     your daily training runs.
//                 </p>
//                 <ul>
//                     <li>
//                         Shown: Blackened Blue/Flash Crimson/Black/Orange Peel
//                     </li>
//                     <li>Style: AJ4114-486</li>
//                 </ul>
//             </div>
//         }
//         titleFont={fonts.NIKE.heading3}
//         textFont={fonts.NIKE.text2}
//         buttonFont={fonts.NIKE.heading4}
//         variants={ProductVariants2}
//         sizes={SizePicker5}
//         accordion={AccordionGroup2}
//         {...props}
//     />
// );

storiesOf("ProductMeta", module).add("default", () => <ProductMeta1 />);
storiesOf("ProductMeta", module).add("only title", () => (
    <ProductMeta1 showDesc={false} />
));
storiesOf("ProductMeta", module).add("only desc", () => (
    <ProductMeta1 showTitle={false} />
));

export { ProductMeta1 /*, ProductMeta2 */ };
