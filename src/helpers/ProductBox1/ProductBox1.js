import React from "react";
import PropTypes from "prop-types";
import "./ProductBox1.scss";
import LazyAssetWrapper from "../../core/LazyAssetWrapper/LazyAssetWrapper";

import InlineSVG from "svg-inline-react";
import HeartIcon from "../../svg/outline-favorite_border-18px.svg";

class ProductBox1 extends React.Component {
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
            <div className="ProductBox1">
                <a href={this.props.link} className="ProductBox1__images">
                    <LazyAssetWrapper
                        className={
                            "ProductBox1__image ProductBox1__image--main"
                        }
                        mode={"natural"}
                        crop={"natural"}
                        sizes={`500px`}
                        image={this.props.image}
                    />
                    <LazyAssetWrapper
                        className={
                            "ProductBox1__image ProductBox1__image--onHover"
                        }
                        mode={"natural"}
                        crop={"natural"}
                        sizes={`500px`}
                        image={this.props.imageOnHover}
                    />
                    <div className="ProductBox1__variants">
                        {this.props.variantsImages.map((image, index) => {
                            let classes = [
                                "ProductBox1__image ProductBox1__image--alternate"
                            ];
                            if (this.state.hoveredTriggerIndex === index) {
                                classes.push("ProductBox1__image--isOnTop");
                            }
                            return (
                                <LazyAssetWrapper
                                    className={classes.join(" ")}
                                    mode={"natural"}
                                    crop={"natural"}
                                    sizes={`500px`}
                                    key={index}
                                    image={image}
                                />
                            );
                        })}
                    </div>
                </a>

                <div className="ProductBox1__content">
                    <div className="ProductBox1__contentHead">
                        <div className="ProductBox1__titleRow">
                            <div className="ProductBox1__title">
                                {this.props.title}
                            </div>
                            <div className="ProductBox1__heart">
                                <InlineSVG src={HeartIcon} />️
                            </div>
                        </div>
                        <div className="ProductBox1__priceRow">
                            <div className="ProductBox1__price">
                                {this.props.price}
                            </div>
                            {this.props.priceBefore && (
                                <div className="ProductBox1__price ProductBox1__price--before">
                                    {this.props.priceBefore}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="ProductBox1__label">{this.props.label}</div>
                    <div className="ProductBox1__variantsTriggers">
                        {this.props.colors.map((color, index) => {
                            return (
                                <div
                                    className={"ProductBox1__trigger"}
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
                                        className="ProductBox1__triggerInner"
                                        style={{ background: color }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
ProductBox1.propTypes = {
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

export default ProductBox1;
