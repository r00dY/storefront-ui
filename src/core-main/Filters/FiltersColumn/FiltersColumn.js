import PropTypes from "prop-types";
import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";

import Accordion from "../../Accordion/Accordion";
import ItemListAccordion from "../../ItemListAccordion/ItemListAccordion";

import FilterHeader from "../FilterHeader/FilterHeader";
import FilterItem from "../FilterItem/FilterItem";

import ButtonNaked from "../../ButtonNaked/ButtonNaked";

const ShowMoreButton = (props) => {

    return <ButtonNaked css={css`
        padding: 4px 0;
    `} onClick={props.onClick}>
        {props.open ? 'show less' : 'show more'}
    </ButtonNaked>;
};

// default components
const header = ({ data, filter, open, setOpen }) => <FilterHeader title={filter.name} onClick={() => setOpen(!open)} open={open} />;
const body = ({ data, filter, component }) => <>{component}</>;

const components = {
    select: {
        component: ({ data, filter }, { item, showMore }) => <ItemListAccordion
            trigger={(open, setOpen) => showMore({ data, filter, open, setOpen})}
        >
            {filter.options.map((option) => item({data, filter, option, onChange: () => { console.log('sth clicked'); }}))}
        </ItemListAccordion>,


        defaultOptions: {
            item: ({ data, filter, option, onChange}) => <FilterItem key={option.id} label={option.name} selected={option.selected} id={option.id} onClick={onChange}/>,
            showMore: ({ data, filter, open, setOpen }) => <ShowMoreButton open={open} onClick={() => setOpen(!open)} />
        }
    },
    range: {
        component: ({ data, filter }) => <div>RANGE COMPONENT</div>,
        defaultOptions: {}
    }
};


const FiltersColumn = props => {
    return <div className={props.className} style={props.style}>
        <div css={css`
            position: relative
        `}>

        { props.data.map((filter, index) => {

            let arg = props.components[filter.type]; // value for components.select or components.range, etc

            let component;
            if (typeof arg === 'function') { // if function just call it
                component = arg({data: props.data, filter});
            }
            else { // otherwise, arg is object of config

                let options = Object.assign(components[filter.type].defaultOptions, arg);

                component = components[filter.type].component({data: props.data, filter}, options);
            }

            return <React.Fragment key={filter.id}>
                <div css={css`
                    ${ index < props.data.length - 1 ? rs(props.gutter).css('margin-bottom') : ''}
                    ${ index > 0 ? rs(props.gutter).css('margin-top') : ''}
                    `}>
                        <Accordion header={(open, setOpen) => props.header({ data: props.data, filter, open, setOpen})}>

                            { props.body({ data: props.data, filter, component }) }

                        </Accordion>
                </div>
                { index < props.data.length - 1 && props.separator }
            </React.Fragment>

        })}

        </div>
    </div>
};


FiltersColumn.defaultProps = {
    gutter: 16,
    separator: null,

    header: header,
    body: body,

    components: {
        select: components.select.defaultOptions,
        range: components.select.defaultOptions
    }
};

FiltersColumn.propTypes = {
    data: PropTypes.any,

    gutter: PropTypes.any,
    separator: PropTypes.element,

    header: PropTypes.func,
    body: PropTypes.func,
};

export default FiltersColumn;

// -- ENTIRE LAYOUT
// layout ({data, boxes, separator}) -> WITHOUT SO FAR
//
// separator ({data})
//
// -- FILTER BOX (header + content)
// box: ({ data, filter, component }) -> overwrites above 1 (Accordion) -> WITHOUT THIS SO FAR
// header ({ data, filter, open, setOpen })
// body ({ data, filter, component, open, setOpen })
//
// -- FILTER BODY (select)
//      item ({ data, option, selected, onChange})
//      moreOptions ({ data, filter, open, setOpen })
//      component: ({ data, filter, items, moreOptions}) -> overwrites above 2 (ItemListAccordion)
//




// layout is completely independent of boxes

// box -> accordion or not.
// header / body ->


// default -> linear layout, accordion box (simple header, empty body), fields: (select:

/**

 Layout -> actually has nothing to do with filters?

<Filters data={filtersData} />





 **/






