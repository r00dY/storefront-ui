import React from "react";
import "./VideoBox.scss";

import PropTypes from "prop-types";

function VideoBox(props) {
    return (
        <div className={"VideoBox"}>
            <video autoPlay loop muted playsinline>
                <source src={props.videoSrc} type="video/mp4" />
            </video>
        </div>
    );
}

VideoBox.propTypes = {
    videoSrc: PropTypes.string.isRequired
};

export default VideoBox;
