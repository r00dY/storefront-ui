import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconClose from "./close.svg";
import { rs, rslin } from "responsive-helpers";
import { R, F, C, L, Color } from "storefront-ui/Config";

import Image, { ImageZoomable } from "storefront-ui/Image";
import StickyColumn from "storefront-ui/StickyColumn";
import Container from "storefront-ui/Container";
import SwipeableItemsContainer, {
  useSwipeableItemsContainer
} from "storefront-ui/SwipeableItemsContainer";
import ScrollBar from "storefront-ui/ScrollBar";
import { Modal } from "../Modal";
import { Grid, GridItem } from "storefront-ui/Grid";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";

import IconHeart from "../../svg/heart.svg";
import IconHeartFill from "../../svg/heart_fill.svg";

import { Button } from "../Button";
import { ButtonRaw } from "../ButtonRaw";
import { ButtonGroup } from "../ButtonGroup";
import Price from "../Price";

import { showNotification } from "storefront-ui/Notifications";
import Notification from "../../components/Notification";
import useAddToCart from "../../helpers/useAddToCart";

const MetaRow = styled.div`
  &:not(:first-of-type) {
    ${rslin(40, 50).css("margin-top")}
  }
`;

function ProductHead(props) {
  const theme = useTheme();

  const [opened, setOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [config, setConfig] = useState(null);

  const [addToCart, isLoading] = useAddToCart();

  const [isFav, setFav] = useState(false);

  let swiper = useSwipeableItemsContainer(
    <SwipeableItemsContainer mode={"horizontal"}>
      {props.mosaicImages.map((image, index) => {
        return <Image mode={"natural"} image={image} />;
      })}
    </SwipeableItemsContainer>
  );

  let titleElem = (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex-grow: 1;
          color: ${theme.colors.mono900.css};
          margin-right: 20px;
          ${theme.fonts.h4.css}
        `}
      >
        {props.title}
      </div>
      <div
        css={css`
          ${theme.fonts.body2.css}
          white-space: nowrap;
          span {
            text-decoration: line-through;
            color: ${theme.colors.mono200.css};
          }
        `}
      >
        <Price price={props.price} alignRight />
      </div>
    </div>
  );
  let VARIANTS = (
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-column-gap: 5px;
      `}
    >
      {props.variants.map((variant, index) => {
        return (
          <a
            href={"#"}
            key={index}
            css={css`
              margin-top: 5px;
              transition: 100ms;
            `}
          >
            <div
              css={css`
                position: relative;
              `}
            >
              <Image mode={"natural"} image={variant} />
              <div
                css={css`
                  ${index === 0
                    ? `position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.15);`
                    : ""}
                `}
              />
            </div>
          </a>
        );
      })}
    </div>
  );

  let metaElem = (
    <div>
      <Device desktop>
        {titleElem}
        <MetaRow>{VARIANTS}</MetaRow>
      </Device>
      <MetaRow>{props.sizes}</MetaRow>
      <MetaRow>
        <Button
          size={"large"}
          fitContainer={true}
          css={css`
            margin-bottom: 10px;
          `}
          onClick={addToCart}
          isLoading={isLoading}
        >
          Add to Cart
        </Button>
        <Button
          size={"large"}
          kind={"secondary"}
          fitContainer={true}
          endEnhancer={() => {
            return isFav ? <IconHeartFill /> : <IconHeart />;
          }}
          onClick={() => {
            setFav(!isFav);
          }}
        >
          {isFav ? "Saved in wishlist" : "Add to wishlist"}
        </Button>
      </MetaRow>
      <MetaRow>
        <div
          css={css`
            ${theme.fonts.body2.css} a {
              text-decoration: underline;
            }
          `}
        >
          This is a demo store. You can purchase products like this from{" "}
          <a href="https://nike.com">Nike</a>.
        </div>
      </MetaRow>
      <MetaRow>
        <div
          css={css`
            p {
              &:not(:first-of-type) {
                margin-top: 1em;
              }
            }
            ${theme.fonts.body2.css}
          `}
        >
          {props.description}
        </div>
      </MetaRow>
      <MetaRow>{props.accordion}</MetaRow>
    </div>
  );

  const ModalContent = props => {
    const ref = useRef(null);

    const items = Array.from({ length: props.mosaicImages.length }, a =>
      useRef(null)
    );

    useEffect(() => {
      let item = items[selectedImage].current;
      ref.current.scrollTop =
        item.offsetHeight / 2 + item.offsetTop - window.innerHeight / 2;
    }, []);

    return (
      <div>
        <div
          css={css`
            position: absolute;
            background-color: white;
            width: 100%;
            height: 100%;
          `}
        />
        <ButtonRaw
          onClick={() => setOpened(false)}
          css={css`
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 100ms;
            background: transparent;
          `}
        >
          <IconClose />
        </ButtonRaw>
        <div
          css={css`
            position: relative;
            height: 100vh;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
          `}
          ref={ref}
        >
          <div
            css={css`
              display: grid;
              grid-template-columns: 1fr;
              grid-row-gap: 10px;
            `}
          >
            {props.mosaicImages.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpened(true)}
                ref={items[index]}
              >
                <ImageZoomable image={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Modal
        config={config}
        isOpen={opened}
        onRequestClose={() => setOpened(false)}
        overrides={{
          Body: {
            style: `padding: 0;`
          }
        }}
      >
        <ModalContent {...props} />
      </Modal>

      <Device mobile>
        <Container
          css={css`
            padding: 50px 0;
          `}
        >
          {titleElem}
        </Container>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              width: 100%;
              background-color: #f6f6f6;
            `}
          >
            {swiper.element}
          </div>

          <div
            css={css`
              padding: 20px 0;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
            `}
          />
        </div>

        <div
          css={css`
            margin-bottom: 40px;
          `}
        >
          {VARIANTS}
        </div>
      </Device>

      <Container>
        <Grid>
          <GridItem params={{ xs: 24, 768: 14, lg: 16 }}>
            <Device desktop>
              <div
                css={css`
                  display: grid;
                  grid-column-gap: 15px;
                  grid-row-gap: 15px;
                  ${R.from("md").css("grid-template-columns: 1fr 1fr;")}
                `}
              >
                {props.mosaicImages.map((item, index) => (
                  <div key={index}>
                    <ImageZoomable image={item} />
                  </div>
                ))}
              </div>
            </Device>
          </GridItem>
          <GridItem params={{ xs: 24, 768: 10, lg: [7, 1] }}>
            <StickyColumn
              css={css`
                height: 100%;
              `}
              offset={[80, 80]}
            >
              {metaElem}
            </StickyColumn>
          </GridItem>
        </Grid>
      </Container>
      <div id={"overlaysContainer"} />
    </div>
  );
}

ProductHead.propTypes = {
  mosaicImages: PropTypes.array,
  title: PropTypes.string,
  price: PropTypes.object,
  variants: PropTypes.array,
  sizes: PropTypes.element,
  description: PropTypes.element,
  accordion: PropTypes.element
};

export default ProductHead;
