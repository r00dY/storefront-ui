import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "@commerce-ui/core/Theme";

import { rslin, rs } from "responsive-helpers";
import { R, F, C, S, L } from "../../theme.js";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "@commerce-ui/core/SwipeableItemsContainer";
import Container from "@commerce-ui/core/Container";

import IconArrowLeft from "../../svg/keyboard_arrow_left.svg";
import IconArrowRight from "../../svg/keyboard_arrow_right.svg";
import { ButtonRaw } from "../ButtonRaw";
import SectionTitle from "../SectionTitle";
import { ProductCardTheme1 } from "../ProductCard";

function ProductSlider(props) {
  const theme = useTheme();

  const _arrowCss = `
        width: 50px; height: 50px; border-radius: 50%;
        background-color: white;
        opacity: 0.8;
        box-shadow: ${theme.lighting.shadow400};
        display: flex;
        align-items: center; justify-content: center;
        transition: all 100ms;
        svg {
            transition: all 100ms;
            fill: ${theme.colors.mono800.css};
        }
        &:hover {
            opacity: 1;
            svg {fill: ${theme.colors.mono800.css};}
        }
    `;
  const ArrowLeft = () => (
    <div
      css={css`
        ${_arrowCss}
      `}
    >
      <IconArrowLeft />
    </div>
  );
  const ArrowRight = () => (
    <div
      css={css`
        ${_arrowCss}
      `}
    >
      <IconArrowRight />
    </div>
  );

  let swiper = useSwipeableItemsContainer(
    <SwipeableItemsContainer
      mode={"horizontal"}
      gutter={theme.layout.gutter}
      offsetBefore={theme.layout.margin}
      offsetAfter={theme.layout.margin}
      itemsVisible={{
        xs: 1.66,
        sm: 2.33,
        md: 3,
        lg: 4
      }}
      arrows={{
        left: ({ onClick }) => (
          <ButtonRaw onClick={onClick}>
            <ArrowLeft />
          </ButtonRaw>
        ),
        right: ({ onClick }) => (
          <ButtonRaw onClick={onClick}>
            <ArrowRight />
          </ButtonRaw>
        ),
        offset: theme.layout.margin.subtract(25),
        hideWhenInactive: true,
        hideOnTouchDevices: true
      }}
      snap={"center"}
    >
      {props.products.map((product, index) => {
        return (
          <div
            key={index}
            css={css`
              position: relative;
              user-select: none;
              user-drag: none;
              width: 100%;
            `}
          >
            <ProductCardTheme1 product={product} key={index} />
          </div>
        );
      })}
    </SwipeableItemsContainer>
  );
  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <Container>
        <div
          css={css`
            ${rslin(theme.spacings.s20, theme.spacings.s40).css(
              "margin-bottom"
            )}
          `}
        >
          <SectionTitle>{props.title}</SectionTitle>
        </div>
      </Container>
      {swiper.element}
    </div>
  );
}
ProductSlider.defaultProps = {
  hiddenScrollbar: false
};
ProductSlider.propTypes = {
  title: PropTypes.string.isRequired,
  hiddenScrollbar: PropTypes.bool
};

export default ProductSlider;
