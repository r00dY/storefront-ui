import React from "react";
import "./NotificationBar.scss";
import Font from "../../core-main/Font";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.div`
    ${props => props.font.css}
    text-align: center;
`;

function NotificationBar(props) {
    return (
        <div className={"NotificationBar"}>
            <Text className="NotificationBar__inner" font={props.font}>
                {props.text}
            </Text>
        </div>
    );
}

NotificationBar.propTypes = {
    font: PropTypes.instanceOf(Font),
    text: PropTypes.string.isRequired
};

export default NotificationBar;
