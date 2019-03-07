import React from "react";
import "./TwoCols.scss";
import PropTypes from "prop-types";
import LazyAssetWrapper from "../../LazyAssetWrapper/LazyAssetWrapper";
import { RangeSet } from "responsive-helpers";

function TwoCols(props) {
    return (
        <div className={"TwoCols"}>
            <div className="TwoCols__inner">
                {props.items.map((item, index) => {
                    let _className = "TwoCols__item";
                    let _sizes = `(min-width: ${
                        RangeSet.main.get("md").from
                    }px) 40vw, 80vw `;
                    if (item.isFullWidth) {
                        _className += " TwoCols__item--isFullWidth";
                        _sizes = `(min-width: ${
                            RangeSet.main.get("md").from
                        }px) 80vw, 80vw `;
                    }
                    return (
                        <div className={_className} key={index}>
                            {"image" in item && (
                                <LazyAssetWrapper
                                    className={"TwoCols__image"}
                                    mode={"natural"}
                                    crop={"natural"}
                                    sizes={_sizes}
                                    image={item.image}
                                    // placeholder={null}
                                    // backgroundColor={"white"}
                                />
                            )}
                            {item.text}
                            {item.video}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

TwoCols.propTypes = {
    items: PropTypes.array.isRequired
};

export default TwoCols;
