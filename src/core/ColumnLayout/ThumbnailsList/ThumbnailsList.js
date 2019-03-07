import React from "react";
import "./ThumbnailsList.scss";
// import InlineSVG from "svg-inline-react";

import PropTypes from "prop-types";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function ThumbnailsList(props) {
    return (
        <div className={"ThumbnailsList"}>
            {props.images.map((image, index) => {
                return (
                    <LazyAssetWrapper
                        className={"ThumbnailsList__thumbnail"}
                        mode={"natural"}
                        crop={"natural"}
                        sizes={`150px`}
                        key={index}
                        image={image}
                        // placeholder={null}
                        // backgroundColor={"white"}
                    />
                );
            })}
        </div>
    );
}

ThumbnailsList.propTypes = {
    images: PropTypes.array.isRequired
};

export default ThumbnailsList;
