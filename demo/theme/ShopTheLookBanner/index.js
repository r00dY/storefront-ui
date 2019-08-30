import React, { useState } from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { Grid, GridItem } from "storefront-ui/Grid";

import { rslin, rs, rm } from "responsive-helpers";
import { F, L, Color, S, R } from "storefront-ui/Config";
import { Image } from "../Image";
import Link from "next/link";
import { useTheme } from "storefront-ui/Theme";
import { ButtonRaw } from "../ButtonRaw";
import { Modal } from "../Modal";

import IconCart from "../../svg/cart.svg";
import IconArrowLeft from "../../svg/chevron_left.svg";
import IconArrowRight from "../../svg/chevron_right.svg";
import IconClose from "../../svg/close.svg";
import { ProductCardTheme1 } from "../ProductCard";
import Price from "../Price";

const NavButton = props => {
  const theme = useTheme();
  return (
    <div
      css={css`
        ${R.to("sm").css("display: none;")} pointer-events: none;
        display: flex;
        flex: 60px 0 0;
        align-items: center;
        justify-content: center;
        button {
          color: white;
          pointer-events: all;
        }
        svg {
          width: 32px;
          height: 32px;
        }
      `}
    >
      {props.children}
    </div>
  );
};
const ShopTheLookBanner = props => {
  const theme = useTheme();

  // const [opened, setOpened] = useState(false);
  const [miniIcon, setMiniIcon] = useState(false);
  setTimeout(() => setMiniIcon(true), 5000);

  const D = 30;

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div>
        <Image
          image={props.image}
          backgroundColor={props.imageBackground}
          sizes={"100vw"}
        />
        <div
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            cursor: pointer;
            align-items: flex-end;
            ${rslin(theme.spacings.s40, theme.spacings.s60).css("padding")}
            svg {
              width: 20px;
              height: 20px;
            }
          `}
          onClick={() => props.setModalOpen(props.id)}
        >
          <ButtonRaw
            onClick={() => props.setModalOpen(props.id)}
            css={css`
              color: white;
              ${theme.fonts.body2.css}
              position: relative;
              svg {
                z-index: 1;
              }
            `}
          >
            <div
              css={css`
                position: absolute;
                height: ${D}px;
                width: ${miniIcon ? D : 124}px;
                border-radius: ${D / 2}px;
                background: rgba(0, 0, 0, 0.5);
                transition: 200ms;
              `}
            />

            <div
              css={css`
                ${!miniIcon ? `opacity: 1;` : `opacity: 0;`}
                position: absolute;
                left: ${D}px;
                height: ${D}px;
                display: flex;
                align-items: center;
                white-space: nowrap;
                transition: 200ms;
              `}
            >
              Shop the look
            </div>

            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                height: ${D}px;
                width: ${D}px;
              `}
            >
              <IconCart />
            </div>
          </ButtonRaw>
        </div>
      </div>

      <Modal
        config={{
          xs: {
            mode: "bottom",
            height: "auto"
          },
          md: {
            mode: "center",
            width: "1100",
            height: "auto"
          }
        }}
        isOpen={props.modalOpen}
        onRequestClose={() => props.setModalOpen(-1)}
        overrides={{
          Root: { style: `background: transparent; pointer-events: none;` }
        }}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            max-height: 100vh;
          `}
        >
          <NavButton>
            {!props.hasNotLeftArrow && (
              <ButtonRaw onClick={() => props.setModalOpen("prev")}>
                <IconArrowLeft />
              </ButtonRaw>
            )}
          </NavButton>

          <div
            css={css`
              background: white;
              display: flex;
              flex-grow: 1;
              flex-wrap: wrap;
              pointer-events: all;
            `}
          >
            <div
              css={css`
                flex: calc(100% - 375px) 0 0;
                ${R.to("sm").css("flex: 100% 0 0;")} ${R.to("sm").css(
                  "display: none;"
                )}
              `}
            >
              <Image image={props.image} />
            </div>
            <div
              css={css`
                flex: 375px 0 0;
                padding: 20px;
                ${R.to("sm").css("flex: 100% 0 0;")}
              `}
            >
              <div
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  ${theme.fonts.body1.css} margin-bottom: 20px;
                `}
              >
                In this Look
                <ButtonRaw onClick={() => props.setModalOpen(-1)}>
                  <IconClose />
                </ButtonRaw>
              </div>

              {props.products.map((product, index) => (
                <Link href={product.href} key={index}>
                  <a
                    href={product.href}
                    css={css`
                      display: flex;
                      align-items: center;
                      &:not(:last-of-type) {
                        margin-bottom: 20px;
                      }
                    `}
                  >
                    <Image
                      image={product.images[0]}
                      css={css`
                        flex: 80px 0 0;
                        margin-right: 20px;
                      `}
                    />
                    <div>
                      <div
                        css={css`margin-bottom: ${theme.spacings.s30}px;
      ${theme.fonts.body2.css} color: ${theme.colors.mono500.css};`}
                      >
                        {product.description}
                      </div>
                      <div
                        css={css`
                          margin-bottom: ${theme.spacings.s30}px;
                          ${theme.fonts.body1.css}
                          line-height: 1.2;
                        `}
                      >
                        {product.title}
                      </div>
                      <div>
                        <Price price={product.price} />
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <NavButton>
            {!props.hasNotRightArrow && (
              <ButtonRaw onClick={() => props.setModalOpen("next")}>
                <IconArrowRight />
              </ButtonRaw>
            )}
          </NavButton>
        </div>
      </Modal>
    </div>
  );
};

ShopTheLookBanner.propTypes = {
  image: PropTypes.object,
  video: PropTypes.object,
  videoMobile: PropTypes.object,
  products: PropTypes.array
};

export default ShopTheLookBanner;
