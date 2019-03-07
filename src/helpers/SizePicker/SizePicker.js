import React from "react";
import PropTypes from "prop-types";
import "./SizePicker.scss";
import Font from "../../core-main/Font";
import styled from "styled-components";

const Root = styled.div`
    ${props => props.font.css}
`;

function SizePicker(props) {
    return (
        <Root className="SizePicker" font={props.font}>
            <div className="SizePicker__head">
                <div className="SizePicker__title">Pick your size</div>
                <div className="SizePicker__link">
                    <a href={""}>Size guide</a>
                </div>
            </div>
            <div className="SizePicker__sizes">
                {props.sizes.map((option, index) => {
                    return (
                        <div className="SizePicker__option" key={index}>
                            <input
                                className="SizePicker__option__radio"
                                disabled={!option.available}
                                type="radio"
                                id={option.value}
                                name={props.name}
                                value={option.value}
                            />
                            <label
                                htmlFor={option.value}
                                className={"SizePicker__option__label"}
                                title={option.tooltip}
                            >
                                {option.label}
                            </label>
                        </div>
                    );
                })}
            </div>
        </Root>
    );
}
SizePicker.propTypes = {
    sizes: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    font: PropTypes.instanceOf(Font)
};

export default SizePicker;
