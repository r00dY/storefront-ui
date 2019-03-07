import React from "react";
import PropTypes from "prop-types";
import "./ProductBox2.scss";
import LazyAssetWrapper from "../../core/LazyAssetWrapper/LazyAssetWrapper";

import InlineSVG from "svg-inline-react";
import HeartIcon from "../../svg/outline-favorite_border-18px.svg";

class ProductBox2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredTriggerIndex: -1
        };
    }
    handleHover(i) {
        this.setState({
            hoveredTriggerIndex: i
        });
    }

    handleHoverLeave() {
        this.setState({
            hoveredTriggerIndex: -1
        });
    }
    render() {
        return (
            <div className="ProductBox2">
                <a href={this.props.link} className="ProductBox2__images">
                    <LazyAssetWrapper
                        className={
                            "ProductBox2__image ProductBox2__image--main"
                        }
                        mode={"natural"}
                        crop={"square"}
                        sizes={`500px`}
                        image={this.props.image}
                    />
                    <LazyAssetWrapper
                        className={
                            "ProductBox2__image ProductBox2__image--onHover"
                        }
                        mode={"natural"}
                        crop={"square"}
                        sizes={`500px`}
                        image={this.props.imageOnHover}
                    />
                    {this.props.variantsImages && (
                        <div className="ProductBox2__variants">
                            {this.props.variantsImages.map((image, index) => {
                                let classes = [
                                    "ProductBox2__image ProductBox2__image--alternate"
                                ];
                                if (this.state.hoveredTriggerIndex === index) {
                                    classes.push("ProductBox2__image--isOnTop");
                                }
                                return (
                                    <LazyAssetWrapper
                                        className={classes.join(" ")}
                                        mode={"natural"}
                                        crop={"square"}
                                        sizes={`500px`}
                                        key={index}
                                        image={image}
                                    />
                                );
                            })}
                        </div>
                    )}
                </a>

                <div className="ProductBox2__content">
                    <div className="ProductBox2__contentHead">
                        <div className="ProductBox2__titleRow">
                            <div className="ProductBox2__title">
                                {this.props.title}
                            </div>
                            <div className="ProductBox2__heart">
                                <InlineSVG src={HeartIcon} />️
                            </div>
                        </div>
                    </div>
                    <div className="ProductBox2__label">{this.props.label}</div>
                    <div className="ProductBox2__priceRow">
                        <div className="ProductBox2__price">
                            {this.props.price}
                        </div>
                        {this.props.priceBefore && (
                            <div className="ProductBox2__price ProductBox2__price--before">
                                {this.props.priceBefore}
                            </div>
                        )}
                    </div>
                    {this.props.colors && (
                        <div className="ProductBox2__variantsTriggers">
                            {this.props.colors.map((color, index) => {
                                return (
                                    <div
                                        className={"ProductBox2__trigger"}
                                        key={index}
                                        onMouseEnter={this.handleHover.bind(
                                            this,
                                            index
                                        )}
                                        onMouseLeave={this.handleHoverLeave.bind(
                                            this,
                                            index
                                        )}
                                    >
                                        <div
                                            className="ProductBox2__triggerInner"
                                            style={{ background: color }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
ProductBox2.propTypes = {
    image: PropTypes.object.isRequired,
    imageOnHover: PropTypes.object,
    variantsImages: PropTypes.array,
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    colors: PropTypes.array,
    link: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceBefore: PropTypes.string
};

export default ProductBox2;
