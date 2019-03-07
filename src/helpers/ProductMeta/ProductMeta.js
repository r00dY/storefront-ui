import React from "react";
import PropTypes from "prop-types";
import "./ProductMeta.scss";
import InlineSVG from "svg-inline-react";
import HeartIcon from "../../svg/outline-favorite_border-18px.svg";
import styled from "styled-components";

const Root = styled.div`
    ${props => props.font.css}
`;
const Title = styled.div`
    ${props => props.font.css}
`;

const AddButton = styled.button`
    ${props => props.font.css}
`;

function ProductMeta(props) {
    return (
        <Root font={props.textFont} className={"ProductMeta"}>
            {props.showTitle && (
                <div className={`ProductMeta__row`}>
                    <Title
                        className={`ProductMeta__title  ${
                            props.showDesc
                                ? "ProductMeta__title--paddingBottom"
                                : ""
                        }`}
                        font={props.titleFont}
                    >
                        {props.title}
                    </Title>
                    <div className="ProductMeta__price">
                        <span>{props.priceRegular}</span>{" "}
                        {props.priceDiscounted}
                    </div>
                </div>
            )}

            {props.showDesc && (
                <div>
                    <div className="ProductMeta__row">{props.variants}</div>
                    <div className="ProductMeta__row">{props.sizes}</div>
                    <div className="ProductMeta__row">
                        <div className="ProductMeta__buttonWrapper">
                            <AddButton
                                type="button"
                                className={
                                    "ProductMeta__button ProductMeta__button--addToBasket"
                                }
                                font={props.buttonFont}
                            >
                                Add to bag
                            </AddButton>
                            <button
                                type="button"
                                className={
                                    "ProductMeta__button ProductMeta__button--addToWishlist"
                                }
                                title={"Add to wishlist"}
                            >
                                <InlineSVG src={HeartIcon} />️
                            </button>
                        </div>
                    </div>
                    <div className="ProductMeta__row">
                        <div className="ProductMeta__description">
                            {props.description}
                        </div>
                    </div>
                    <div className="ProductMeta__row">{props.accordion}</div>
                </div>
            )}
        </Root>
    );
}

ProductMeta.propTypes = {
    title: PropTypes.string,
    priceRegular: PropTypes.string,
    priceDiscounted: PropTypes.string,
    variants: PropTypes.element,
    sizes: PropTypes.element,
    description: PropTypes.element,
    accordion: PropTypes.element
};

ProductMeta.defaultProps = {
    showTitle: true,
    showDesc: true
};

export default ProductMeta;
