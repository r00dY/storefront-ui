import React from "react";
import PropTypes from "prop-types";
import "./EditorialBigImage.scss";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function EditorialBigImage(props) {
    let _h = "flex-start";
    let _v = "flex-start";

    if (props.elementPosition) {
        if (props.elementPosition[0] === "center") {
            _h = "center";
        } else if (props.elementPosition[0] === "right") {
            _h = "flex-end";
        }

        if (props.elementPosition[1] === "center") {
            _v = "center";
        } else if (props.elementPosition[1] === "bottom") {
            _v = "flex-end";
        }
    }

    let _classes = ["EditorialBigImage"];
    let _imageMode = "natural";

    if (props.modeCover) {
        _classes.push("EditorialBigImage--modeCover");
        _imageMode = "cover";
    }

    return (
        <div className={_classes.join(" ")}>
            <div className="EditorialBigImage__bottomLayer">
                <LazyAssetWrapper
                    className={"EditorialBigImage__background"}
                    mode={_imageMode}
                    crop={"natural"}
                    sizes={`100vw`}
                    image={props.image}
                    placeholder={null}
                    backgroundColor={"white"}
                />
            </div>
            {props.element && (
                <div
                    className="EditorialBigImage__topLayer"
                    style={{ "align-items": _v, "justify-content": _h }}
                >
                    <div className="EditorialBigImage__topLayer__element">
                        {props.element}
                    </div>
                </div>
            )}
        </div>
    );
}
EditorialBigImage.testOptions = {
    elementPosition: [["left", "center", "right"], ["top", "center", "bottom"]]
};
EditorialBigImage.propTypes = {
    image: PropTypes.object.isRequired,
    element: PropTypes.element,
    elementPosition: PropTypes.arrayOf(PropTypes.string),
    modeCover: PropTypes.bool
};
export default EditorialBigImage;
