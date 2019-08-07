import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import { rslin, rs } from "responsive-helpers";
import { R, F, C, S, L } from "storefront-ui/Config";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "storefront-ui/SwipeableItemsContainer";
import ScrollBar from "storefront-ui/ScrollBar";
import Container from "storefront-ui/Container";

import IconArrowLeft from "./baseline-keyboard_arrow_left-24px.svg";
import IconArrowRight from "./baseline-keyboard_arrow_right-24px.svg";
import { ButtonRaw } from "../ButtonRaw";
import SectionTitle from "../SectionTitle";

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
        xs: 1.33,
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
      {props.boxes.map((box, index) => {
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
            {box}
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
      {/*{!props.hiddenScrollbar && (*/}
      {/*<Container*/}
      {/*css={css`*/}
      {/*${R.from("md").css(`*/}
      {/*padding-left: 10%;*/}
      {/*padding-right: 10%;*/}
      {/*`)}*/}
      {/*${rslin(S.s3, S.s6).css("padding-top")}*/}
      {/*`}*/}
      {/*>*/}
      {/*<ScrollBar*/}
      {/*swipeableItemsContainer={swiper}*/}
      {/*trackColor={C.grey5}*/}
      {/*backgroundColor={C.grey20}*/}
      {/*/>*/}
      {/*</Container>*/}
      {/*)}*/}
    </div>
  );
}
ProductSlider.defaultProps = {
  hiddenScrollbar: false
};
ProductSlider.propTypes = {
  boxes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  hiddenScrollbar: PropTypes.bool
};

export default ProductSlider;
