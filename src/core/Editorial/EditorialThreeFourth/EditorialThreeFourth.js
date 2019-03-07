import React from "react";
import PropTypes from "prop-types";
import "./EditorialThreeFourth.scss";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function EditorialThreeFourth(props) {
    return (
        <div className={"EditorialThreeFourth"}>
            <div className="EditorialThreeFourth__background">
                <LazyAssetWrapper
                    className={"EditorialThreeFourth__image "}
                    mode={"cover"}
                    crop={"natural"}
                    sizes={`100vw`}
                    image={props.image}
                    // placeholder={null}
                    // backgroundColor={"white"}
                />
            </div>
            <div className="EditorialThreeFourth__foreground">
                <div className="EditorialThreeFourth__title">{props.title}</div>
                <div className="EditorialThreeFourth__text">{props.text}</div>
            </div>
        </div>
    );
}

EditorialThreeFourth.propTypes = {
    image: PropTypes.object.isRequired,
    title: PropTypes.string,
    text: PropTypes.string
};
export default EditorialThreeFourth;
