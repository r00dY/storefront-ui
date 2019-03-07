import React from "react";
import PropTypes from "prop-types";
import "./ProductWrapper.scss";

function ProductWrapper(props) {
    console.log(props.children);
    return <div className="ProductWrapper">{props.children}</div>;
}

ProductWrapper.propTypes = {
    children: PropTypes.elements
};

export default ProductWrapper;
