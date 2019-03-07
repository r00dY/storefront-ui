import React from "react";
import { storiesOf } from "@storybook/react";
import AccordionGroup from "./AccordionGroup";

import InlineSVG from "svg-inline-react";
import StarIcon from "../../svg/outline-star_rate-18px.svg";
import fonts from "../../fonts.config";

const ACCORDIONS_COS = [
    {
        title: <div>Details</div>,
        content: (
            <div>
                <p>98% Cotton / 2% Elastane / Dry clean</p>
                <p>
                    Make sure that your favourite items remain long-loved pieces
                    for years to come; read our product care guide and explore
                    our selection of carefully chosen garment care products.
                </p>
                <p>Product No: 0708645002</p>
            </div>
        )
    },
    {
        title: <div>Delivery</div>,
        content: (
            <div>
                <p>Shipping to: Poland</p>
                <p>
                    Standard Home Delivery €9 / Free over €125 / Delivery in 3-5
                    working days
                    <br />
                    Standard Pickup Location €9 / Free over €125 / Delivery in
                    3-5 working days
                </p>
                <p>
                    Express Home Delivery €15 / Orders placed before 3pm Monday
                    to Friday and before 10:30am on Saturday will be delivered
                    the next working day
                </p>
                <p>Free returns on all orders</p>
                <p>We accept MasterCard, VISA and PayPal</p>
                <p>Minimum order value is €5</p>
            </div>
        )
    },
    {
        title: (
            <div>
                <div>Reviews (6)</div>
                <div>
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />️
                </div>
            </div>
        ),
        content: (
            <div>
                <p>Reviews content goes here</p>
            </div>
        )
    }
];

const ACCORDIONS_NIKE = [
    {
        title: <div>Details</div>,
        content: (
            <div>
                <p>98% Cotton / 2% Elastane / Dry clean</p>
                <p>
                    Make sure that your favourite items remain long-loved pieces
                    for years to come; read our product care guide and explore
                    our selection of carefully chosen garment care products.
                </p>
                <p>Product No: 0708645002</p>
            </div>
        )
    },
    {
        title: <div>Delivery</div>,
        content: (
            <div>
                <p>Shipping to: Poland</p>
                <p>
                    Standard Home Delivery €9 / Free over €125 / Delivery in 3-5
                    working days
                    <br />
                    Standard Pickup Location €9 / Free over €125 / Delivery in
                    3-5 working days
                </p>
                <p>
                    Express Home Delivery €15 / Orders placed before 3pm Monday
                    to Friday and before 10:30am on Saturday will be delivered
                    the next working day
                </p>
                <p>Free returns on all orders</p>
                <p>We accept MasterCard, VISA and PayPal</p>
                <p>Minimum order value is €5</p>
            </div>
        )
    },
    {
        title: (
            <div>
                <div>Reviews (6)</div>
                <div>
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />
                    <InlineSVG src={StarIcon} raw />️
                </div>
            </div>
        ),
        content: (
            <div>
                <p>Reviews content goes here</p>
            </div>
        )
    }
];
const AccordionGroup1 = (
    <AccordionGroup
        accordions={ACCORDIONS_COS}
        titleFont={fonts.COS.label2}
        textFont={fonts.COS.text2}
    />
);
const AccordionGroup2 = (
    <AccordionGroup
        accordions={ACCORDIONS_NIKE}
        titleFont={fonts.NIKE.heading4}
        textFont={fonts.NIKE.text3}
    />
);
storiesOf("AccordionGroup", module).add("cos", () => (
    <div>{AccordionGroup1}</div>
));

storiesOf("AccordionGroup", module).add("nike", () => (
    <div>{AccordionGroup2}</div>
));
export { AccordionGroup1, AccordionGroup2 };
