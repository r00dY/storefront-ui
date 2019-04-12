import React, {useState} from "react";
import {FiltersColumn, ButtonNaked} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import filterData from "../../../../docs-utils/filtersData";

const FilterHeader = props => <ButtonNaked css={css`
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
    onClick={props.onClick}
>
    <div>{props.title}</div>
    <div>{props.open ? '-' : '+' }</div>
</ButtonNaked>;

const MoreOptions = (props) =>
    <ButtonNaked css={css`
        padding: 5px 0;
        text-decoration: underline;
        font-weight: 800;
    `} onClick={props.onClick}>
        { props.open ? 'less' : 'more'}
    </ButtonNaked>;


export default () => {
    return <div>
        <FiltersColumn
            css={css`
                width: 400px;
            `}
            data={filterData}
            gutter={20}
            separator={<div css={css`width: 100%; height: 1px; background-color: lightgrey; `} />}

            header={({filter, open, setOpen}) => <FilterHeader title={filter.name} open={open} onClick={() => setOpen(!open)} />}
            body={({ component }) => <div css={css`padding: 10px; background-color: aqua;`}>{ component }</div>}

            components={{
                select: {
                    showMore: ({open, setOpen}) => <MoreOptions open={open} onClick={() => setOpen(!open)} />,
                    item: ({ option, onChange }) => <ButtonNaked key={option.id} css={css`
                        padding: 5px 0;
                        text-align: left;
                        ${option.selected ? 'font-weight: 800; color: red;' : ''}
                        &:hover {
                            color: green;
                        }
                    `} onClick={onChange}>
                        {option.name}
                    </ButtonNaked>
                }
            }}
        />

    </div>
};
