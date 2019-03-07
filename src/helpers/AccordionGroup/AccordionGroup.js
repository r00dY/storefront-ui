import React from "react";
import PropTypes from "prop-types";
import "./AccordionGroup.scss";
import Collapsible from "react-collapsible";

import InlineSVG from "svg-inline-react";
import ExpandMore from "../../svg/outline-expand_more-24px.svg";
import ExpandLess from "../../svg/outline-expand_less-24px.svg";

import styled from "styled-components";
import Font from "../../core-main/Font";

const Title = styled.div`
    display: flex;
    alignitems: center;
    justify-content: space-between;
    flex-grow: 1;
    span {
        flex-grow: 1;
    }
    > div {
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    svg {
        fill: grey;
    }
    ${props => props.font.css}
`;
const Text = styled.div`
    ${props => props.font.css}
    p:not(:first-child) {
        margin-top: 1em;
    }
`;
class AccordionGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="AccordionGroup">
                {this.props.accordions.map((accordion, index) => {
                    let _trigger = (
                        <div className={"Collapsible__triggerInner"}>
                            <Title
                                font={this.props.titleFont}
                                className="Collapsible__title"
                            >
                                {accordion.title}
                            </Title>
                            <div className="Collapsible__icon Collapsible__icon--opened">
                                <InlineSVG src={ExpandLess} raw />
                            </div>
                            <div className="Collapsible__icon Collapsible__icon--closed">
                                <InlineSVG src={ExpandMore} raw />
                            </div>
                        </div>
                    );
                    return (
                        <Collapsible
                            key={index}
                            transitionTime={250}
                            easing={"ease"}
                            trigger={_trigger}
                        >
                            <Text font={this.props.textFont}>
                                {accordion.content}
                            </Text>
                        </Collapsible>
                    );
                })}
            </div>
        );
    }
}

AccordionGroup.propTypes = {
    accordions: PropTypes.array.isRequired,
    textFont: PropTypes.instanceOf(Font),
    titleFont: PropTypes.instanceOf(Font)
};

export default AccordionGroup;
