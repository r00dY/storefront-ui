import React from "react";
import PropTypes from "prop-types";
import "./EditorialHeadline.scss";
import Font from "../../../core-main/Font";
import styled from "styled-components";
import { spacings } from "../../../spacings.config";
import { rslin } from "responsive-helpers";

const Root = styled.div`
    color: ${props => props.color};
    text-align: ${props => props.textAlign};
`;
const Title = styled.div`
    ${props => props.font.css}
`;
const Paragraph = styled.div`
    ${rslin(spacings[1], spacings[2]).css("margin-top")}
    ${props => props.font.css}
`;

function EditorialHeadline(props) {
    return (
        <Root color={props.textColor} textAlign={props.textAlign}>
            <Title font={props.titleFont}>{props.title}</Title>
            <Paragraph font={props.paragraphFont}>{props.paragraph}</Paragraph>
        </Root>
    );
}
EditorialHeadline.testOptions = {
    textAlign: ["left", "center", "right"]
};
EditorialHeadline.defaultProps = {
    textAlign: "left",
    textColor: "black"
};
EditorialHeadline.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    titleFont: PropTypes.instanceOf(Font),
    paragraphFont: PropTypes.instanceOf(Font),
    textAlign: PropTypes.oneOf(EditorialHeadline.testOptions.textAlign),
    textColor: PropTypes.string
};
export default EditorialHeadline;
