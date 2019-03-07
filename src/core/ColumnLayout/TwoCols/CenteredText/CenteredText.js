import React from "react";
import "./CenteredText.scss";
// import InlineSVG from "svg-inline-react";

import PropTypes from "prop-types";
// import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function CenteredText(props) {
    return (
        <div className={"CenteredText"}>
            <div className="CenteredText__title">{props.title}</div>
            <div className="CenteredText__text">{props.text}</div>
        </div>
    );
}

CenteredText.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string
};

export default CenteredText;
