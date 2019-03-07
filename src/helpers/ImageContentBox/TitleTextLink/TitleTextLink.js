import React from "react";
import PropTypes from "prop-types";
import "./TitleTextLink.scss";
import Font from "../../../core-main/Font";
import styled from "styled-components";
// import {rs, stylesToCSS} from "../../../core/Layout/ResponsiveStyles";

const Root = styled.div`
    ${props => props.font.css}
`;
const Title = styled.div`
    ${props => props.font.css}
`;
const Text = styled.div`
    ${props => props.font.css}
`;

function TitleTextLink(props) {
    let _classes = ["TitleTextLink"];
    if (props.fixedTextHeight) {
        _classes.push("TitleTextLink--fixedTextHeight");
    }

    return (
        <Root className={_classes.join(" ")} font={props.textFont}>
            <Title className="TitleTextLink__title" font={props.titleFont}>
                {props.title}
            </Title>
            <Text className="TitleTextLink__text" font={props.textFont}>
                {props.text}
            </Text>
            <a href={props.linkHref} className="TitleTextLink__link">
                {props.linkLabel}
            </a>
        </Root>
    );
}
TitleTextLink.defaultProps = {
    fixedTextHeight: false
};
TitleTextLink.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textFont: PropTypes.instanceOf(Font),
    titleFont: PropTypes.instanceOf(Font),
    linkLabel: PropTypes.string.isRequired,
    linkHref: PropTypes.string.isRequired,
    fixedTextHeight: PropTypes.bool
};

export default TitleTextLink;
