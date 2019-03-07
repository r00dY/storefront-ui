import React from "react";
import PropTypes from "prop-types";
import "./ImageContentBox.scss";

class ImageContentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="ImageContentBox">{this.props.children}</div>;
    }
}
ImageContentBox.propTypes = {
    children: PropTypes.array
};

export default ImageContentBox;
