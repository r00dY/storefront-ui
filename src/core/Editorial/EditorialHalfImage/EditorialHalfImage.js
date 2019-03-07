import React from "react";
import PropTypes from "prop-types";
import "./EditorialHalfImage.scss";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function EditorialHalfImage(props) {
    let _v = "flex-start";
    let _imageOrder = 1;

    if (props.imageFirst) {
        _imageOrder = -1;
    }
    if (props.elementPosition === "center") {
        _v = "center";
    } else if (props.elementPosition === "bottom") {
        _v = "flex-end";
    }

    return (
        <div className={"EditorialHalfImage"}>
            <div
                className="EditorialHalfImage__elementWrapper"
                style={{ "align-items": _v }}
            >
                <div className="EditorialHalfImage__element">
                    {props.element}
                </div>
            </div>
            <div
                className="EditorialHalfImage__imageWrapper"
                style={{ order: _imageOrder }}
            >
                <LazyAssetWrapper
                    className={
                        "EditorialHalfImage__image EditorialHalfImage__image--cover"
                    }
                    mode={"cover"}
                    crop={"natural"}
                    sizes={`50vw`}
                    image={props.image}
                    // placeholder={null}
                    // backgroundColor={"white"}
                />
                <LazyAssetWrapper
                    className={
                        "EditorialHalfImage__image EditorialHalfImage__image--natural"
                    }
                    mode={"natural"}
                    crop={"natural"}
                    sizes={`100vw`}
                    image={props.image}
                    // placeholder={null}
                    // backgroundColor={"white"}
                />
            </div>
        </div>
    );
}
EditorialHalfImage.testOptions = {
    elementPosition: ["top", "center", "bottom"],
    imageFirst: [true, false]
};
EditorialHalfImage.defaultProps = {
    imageFirst: false
};
EditorialHalfImage.propTypes = {
    image: PropTypes.object.isRequired,
    element: PropTypes.element.isRequired,
    elementPosition: PropTypes.oneOf(
        EditorialHalfImage.testOptions["elementPosition"]
    ),
    imageFirst: PropTypes.bool
};
export default EditorialHalfImage;
