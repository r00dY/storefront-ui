import React from "react";
import PropTypes from "prop-types";
import Image from "../../../core-main/Image/Image";
import "./ProductVariants.scss";

function ProductVariants(props) {
    return (
        <div className="ProductVariants">
            {props.variants.map((variant, index) => {
                let _className = "ProductVariants__variant";
                return (
                    <div className={_className} key={index}>
                        <Image
                            className={"ProductVariants__photo"}
                            mode={"natural"}
                            crop={props.itemsCrop}
                            sizes={`200px`}
                            images={variant.image}
                            load={true}
                            // placeholder={null}
                            // backgroundColor={"white"}
                        />
                    </div>
                );
            })}
        </div>
    );
}

ProductVariants.defaultProps = {
    itemsCrop: "portrait"
};

ProductVariants.propTypes = {
    variants: PropTypes.array.isRequired,
    itemsCrop: PropTypes.string
};

export default ProductVariants;
