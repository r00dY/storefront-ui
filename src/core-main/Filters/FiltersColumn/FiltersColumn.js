import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";

import Accordion from "../../Accordion/Accordion";
import ItemListAccordion from "../../ItemListAccordion/ItemListAccordion";

import FilterHeader from "../FilterHeader/FilterHeader";
import FilterItem from "../FilterItem/FilterItem";

const ShowMoreButton = (open, setOpen) =>
    <button css={css`
        display: block;
        width: 100%;
        border: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        cursor: pointer;
        padding: 4px 0;
        text-align: left;
    `} onClick={() => setOpen(!open)}>
        { open ? 'show less' : 'show more'}
    </button>;


const FiltersColumn = props => {
    return <div className={props.className} style={props.style}>
        <div css={css`
            position: relative
        `}>

        { props.data.map((filter) => <div css={css`
            ${rs(props.gutter).css('margin-bottom')}
            `}>
            {
                filter.type === 'select' &&
                <Accordion headerComponent={(open, setOpen) => props.headerComponent(filter, open, setOpen)}>
                    <ItemListAccordion
                        triggerComponent={props.moreOptionsComponent}
                    >
                        {filter.options.map((option) => <FilterItem label={option.name} selected={option.selected} id={option.id} />)}
                    </ItemListAccordion>
                </Accordion>
            }
        </div>
        )}

        </div>
    </div>
};

FiltersColumn.defaultProps = {
    gutter: 16,
    separator: null,
    headerComponent: (filter, open, setOpen) => <FilterHeader title={filter.name} onClick={() => setOpen(!open)} open={open} />,
    moreOptionsComponent: ShowMoreButton
};

FiltersColumn.propTypes = {
    data: PropTypes.any,
    gutter: PropTypes.any,
    separator: PropTypes.element,
    headerComponent: PropTypes.function,
    moreOptionsComponent: PropTypes.function
};

export default FiltersColumn;
