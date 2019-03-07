import React from "react";
import PropTypes from "prop-types";
import "./EditorialIntro.scss";
import Font from "../../../core-main/Font";
import styled from "styled-components";
import { rslin } from "responsive-helpers";
import { spacings } from "../../../spacings.config";
// import {rs, stylesToCSS} from "../../../core/Layout/ResponsiveStyles";

const Title = styled.div`
    ${props => props.font.css}
    text-align: center;
`;
const Text = styled.div`
    ${rslin(spacings[1], spacings[2]).css("margin-top")}
    ${props => props.font.css}
    text-align: ${props => props.textAlign}
`;

function EditorialIntro(props) {
    let _classes = ["EditorialIntro"];

    return (
        <div className={_classes.join(" ")}>
            <div className="container">
                <div className="EditorialIntro__inner">
                    <Title font={props.titleFont}>{props.title}</Title>
                    <Text font={props.textFont} textAlign={props.textAlign}>
                        {props.text}
                    </Text>
                </div>
            </div>
        </div>
    );
}
EditorialIntro.testOptions = {
    textAlign: ["left", "center", "right", "justify"]
};
EditorialIntro.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    textAlign: PropTypes.oneOf(EditorialIntro.testOptions.textAlign),
    textFont: PropTypes.instanceOf(Font),
    titleFont: PropTypes.instanceOf(Font)
};
export default EditorialIntro;
