import React from "react";
import PropTypes from "prop-types";
import Color from "../Color";

import { rs } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

let DotsItem = styled.div`
    ${props => rs(props.dotSize).css("width")}
    ${props => rs(props.dotSize).css("height")}
    ${props =>
        rs(props.dotSize)
            .divide(2)
            .css("border-radius")}
    background-color: ${props =>
        props.active ? props.activeColor.css : props.color.css};
`;

let DotsBox = styled.div`
    position: relative;
    ${props => rs(props.spaceWidth).css("width")}
    ${props => rs(props.spaceHeight).css("height")}
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover ${DotsItem} {
        background-color: ${props => props.hoverColor.css};
    }
    cursor: pointer;
`;

const Dots = props => {
    let items = [];
    for (let i = 0; i < props.amount; i++) {
        items.push(
            <DotsBox
                spaceWidth={props.spaceWidth}
                spaceHeight={props.spaceHeight}
                hoverColor={props.hoverColor}
                onClick={() => {
                    props.onClick ? props.onClick(i) : undefined;
                }}
                key={i}
            >
                <DotsItem
                    {...props}
                    dotSize={props.dotSize}
                    color={props.color}
                    activeColor={props.activeColor}
                    active={props.active === i}
                />
            </DotsBox>
        );
    }

    return (
        <div style={props.style} className={props.className}>
            <div
                css={css`
                    display: flex;
                    flex-direction: ${props.vertical ? "column" : "row"};
                    justify-content: center;
                    align-items: center;
                `}
            >
                {items}
            </div>
        </div>
    );
};

Dots.propTypes = {
    active: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    dotSize: PropTypes.any,
    spaceWidth: PropTypes.any,
    spaceHeight: PropTypes.any,
    color: PropTypes.instanceOf(Color),
    activeColor: PropTypes.instanceOf(Color),
    hoverColor: PropTypes.instanceOf(Color),
    vertical: PropTypes.bool.isRequired
};

Dots.defaultProps = {
    active: 0,
    dotSize: 6,
    spaceWidth: 20,
    spaceHeight: 20,
    color: new Color("rgba(0,0,0,0.5)"),
    activeColor: new Color("black"),
    hoverColor: new Color("black"),
    vertical: false
};

export default Dots;
