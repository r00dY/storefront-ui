import React, { useState }from "react";
import {ItemListAccordion} from "storefront-ui";

import { css } from "@emotion/core";

const Item = (props) => <div css={css`padding: 8px;`}>{props.children}</div>;

const trigger = (open, setOpen) => <button onClick={() => setOpen(!open)}>{ open ? 'hide' : 'show more' }</button>;

export default () => {
    return <div>
        <p>Basic use case</p>

        <ItemListAccordion triggerComponent={trigger}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
            <Item>Item 6</Item>
            <Item>Item 7</Item>
            <Item>Item 8</Item>
            <Item>Item 9</Item>
            <Item>Item 10</Item>
        </ItemListAccordion>

        <p><code>amountOfAlwaysVisible={3}</code></p>

        <ItemListAccordion
            triggerComponent={trigger}
            amountOfAlwaysVisible={3}
        >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
            <Item>Item 6</Item>
            <Item>Item 7</Item>
            <Item>Item 8</Item>
            <Item>Item 9</Item>
            <Item>Item 10</Item>
        </ItemListAccordion>

        <p><code>minAmountToShowAccordion={20}</code></p>

        <ItemListAccordion
            triggerComponent={trigger}
            minAmountToShowAccordion={20}
        >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
            <Item>Item 6</Item>
            <Item>Item 7</Item>
            <Item>Item 8</Item>
            <Item>Item 9</Item>
            <Item>Item 10</Item>
        </ItemListAccordion>

        <p>Empty list</p>

        <ItemListAccordion
            triggerComponent={trigger}
        >
        </ItemListAccordion>

        <p>Single item list</p>

        <ItemListAccordion
            triggerComponent={trigger}
        >
            <Item>Item 1</Item>
        </ItemListAccordion>


    </div>
};
