import React, {useState} from "react";
import {FiltersColumn} from "storefront-ui/Filters";
import ButtonNaked from "storefront-ui/ButtonNaked";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";

const separator = <div css={css`width: 100%; height: 1px; background-color: lightgrey; `} />;

const header = ({filter, open, toggle}) => <ButtonNaked css={css`
        padding: 6px;
        width: 100%;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 800;
        background-color: yellow;
        &:hover {
            background-color: coral;
        }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `}
    onClick={toggle}
>
    <div>{filter.name}</div>
    <div>{open ? '-' : '+' }</div>
</ButtonNaked>;

const body = ({ component }) => <div css={css`padding: 10px; background-color: aqua;`}>{ component }</div>;

const moreOptionsButton = ({open, toggle}) =>
    <ButtonNaked css={css`
        padding: 5px 0;
        text-decoration: underline;
        font-weight: 800;
    `} onClick={toggle}>
        { open ? 'less' : 'more'}
    </ButtonNaked>;

const item = ({ option, onChange }) => <ButtonNaked key={option.id} css={css`
        padding: 5px 0;
        ${option.selected ? 'font-weight: 800; color: red;' : ''}
        &:hover {
            color: green;
        }
    `} onClick={onChange}>
    {option.name}
</ButtonNaked>;

const colorFilterComponent = ({ data, filter, onChange}) => <div css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `}>
    { filter.options.map((option) =>
        <div css={css`margin-right: 10px; margin-bottom: 10px;`} key={option.id}>
            <ButtonNaked css={css`
                position: relative;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                background-color: ${option.data.hex};
                border: ${option.selected ? "3px solid black" : "1px solid lightgrey"};
                transition: transform .1s;
                &:hover {
                    transform: scale(0.8);
                }
                `} onClick={onChange}>
            </ButtonNaked>
        </div>
    )}
</div>;

export default () => {
    return <div>
        <FiltersColumn
            css={css`
                width: 400px;
            `}
            data={filterData}
            gutter={20}
            separator={separator}

            header={header}
            body={body}

            components={{
                select: {
                    showMore: moreOptionsButton,
                    item: item
                },

                __custom: [
                    {
                        match: (filter) => filter.id === "color",
                        component: colorFilterComponent
                    }
                ]
            }}
        />
    </div>
};
