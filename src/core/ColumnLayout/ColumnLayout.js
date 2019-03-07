import React from "react";
import "./ColumnLayout.scss";
import PropTypes from "prop-types";

// import InlineSVG from "svg-inline-react";
// import LazyAssetWrapper from "../LazyAssetWrapper/LazyAssetWrapper";

function ColumnLayout(props) {
    let _classes = ["ColumnLayout"];

    if (props.isNike) {
        _classes.push("ColumnLayout--isNike");
    }

    return (
        <div className={_classes.join(" ")}>
            <div className="container">
                <div className="row">
                    {props.left && (
                        <div className="ColumnLayout__left">{props.left}</div>
                    )}

                    <div className="ColumnLayout__main">{props.main}</div>

                    <div className="ColumnLayout__right">{props.right}</div>
                </div>
            </div>
        </div>
    );
}

ColumnLayout.propTypes = {
    left: PropTypes.element,
    right: PropTypes.element.isRequired,
    main: PropTypes.element.isRequired,
    isNike: PropTypes.bool
};

export default ColumnLayout;
