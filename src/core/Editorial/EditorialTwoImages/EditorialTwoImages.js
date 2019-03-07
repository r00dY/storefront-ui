import React from "react";
import PropTypes from "prop-types";
import "./EditorialTwoImages.scss";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";

function EditorialTwoImages(props) {
    function putImageClasses(image) {
        let classes = ["EditorialTwoImages__image"];

        if (image.size === "small") {
            classes.push("EditorialTwoImages__image--small");
        } else if (image.size === "medium") {
            classes.push("EditorialTwoImages__image--medium");
        }
        if (image.hasTopOffset) {
            classes.push("EditorialTwoImages__image--hasTopOffset");
        }
        return classes.join(" ");
    }

    function putWrapperClasses(image, imagesAlign) {
        let classes = ["EditorialTwoImages__wrapper"];
        if (image.justify === "center") {
            classes.push("EditorialTwoImages__wrapper--justifyCenter");
        } else if (image.justify === "right") {
            classes.push("EditorialTwoImages__wrapper--justifyRight");
        }
        if (imagesAlign === "center") {
            classes.push("EditorialTwoImages__wrapper--alignCenter");
        } else if (imagesAlign === "bottom") {
            classes.push("EditorialTwoImages__wrapper--alignBottom");
        }
        return classes.join(" ");
    }

    return (
        <div className={"EditorialTwoImages"}>
            <div className="container">
                <div className="row">
                    <div className="EditorialTwoImages__col">
                        <div
                            className={putWrapperClasses(
                                props.imageA,
                                props.imagesAlign
                            )}
                        >
                            <div className={putImageClasses(props.imageA)}>
                                <LazyAssetWrapper
                                    mode={"natural"}
                                    crop={"portrait"}
                                    sizes={`50vw`}
                                    image={props.imageA.image}
                                    // placeholder={null}
                                    // backgroundColor={"white"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="EditorialTwoImages__col">
                        <div
                            className={putWrapperClasses(
                                props.imageB,
                                props.imagesAlign
                            )}
                        >
                            <div className={putImageClasses(props.imageB)}>
                                <LazyAssetWrapper
                                    mode={"natural"}
                                    crop={"portrait"}
                                    sizes={`50vw`}
                                    image={props.imageB.image}
                                    // placeholder={null}
                                    // backgroundColor={"white"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
EditorialTwoImages.testOptions = {
    imageA: {
        size: ["small", "medium", "large"],
        justify: ["left", "center", "right"],
        hasTopOffset: [true, false]
    },
    imageB: {
        size: ["small", "medium", "large"],
        justify: ["left", "center", "right"],
        hasTopOffset: [true, false]
    },
    imagesAlign: ["top", "center", "bottom"]
};
EditorialTwoImages.propTypes = {
    imageA: PropTypes.object.isRequired,
    imageB: PropTypes.object.isRequired,
    imagesAlign: PropTypes.oneOf(EditorialTwoImages.testOptions.imagesAlign)
};
export default EditorialTwoImages;
