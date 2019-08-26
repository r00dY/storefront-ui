import PropTypes from "prop-types";
import React from "react";
import { rslin } from "responsive-helpers";
import { R } from "storefront-ui/Config";
import { Grid, GridItem } from "storefront-ui/Grid";
import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";
import { ButtonRaw$ } from "../ButtonRaw";
import { Button$ } from "../Button";
import Link from "next/link";

import {
  RootStyled,
  ImageContainerStyled,
  TitleStyled,
  DescriptionStyled,
  VariantStyled,
  QuantityStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const CheckoutLineItemRow$ = props => {
  const {
    gutter,
    layout,
    breakpoint,
    mode,
    overrides: {
      Root: RootOverride,
      Image: Image,
      ImageContainer: ImageContainerOverride,
      Title: TitleOverride,
      Description: DescriptionOverride,
      Variant: VariantOverride,
      Price: Price,
      Content: ContentOverride,
      Quantity: QuantityOverride,
      Remove: RemoveOverride
    }
  } = props;

  // const product = props.dataMapper(props.product);

  const checkoutLineItem = props.dataMapper(props.checkoutLineItem);

  const { productVariant, price, discountPrice, quantity } = checkoutLineItem;

  // const { title, description, variant, href, images } = productVariant;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [ImageContainer, imageContainerProps] = getOverrides(
    ImageContainerOverride,
    ImageContainerStyled
  );
  const [Content, contentProps] = getOverrides(
    ContentOverride,
    ({
      titleElem,
      descriptionElem,
      variantElem,
      removeElem,
      quantityElem,
      priceElem,
      layout,
      mode,
      gutter
    }) => {
      let _breakpoint = breakpoint;
      if (layout === "compact") {
        _breakpoint = undefined;
      }

      return (
        <div
          css={css`
            width: 100%;
            padding-left: ${gutter}px;
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            justify-content: space-between;
            min-width: 0;
            ${_breakpoint
              ? R.from(_breakpoint).css(
                  "align-items: center; flex-wrap: nowrap;"
                )
              : ""}
          `}
        >
          <div
            css={css`
              width: 100%;
              min-width: 0;
              padding-bottom: ${gutter}px;
              ${mode !== "default" ? "padding-right: 30px;" : ""}
              ${_breakpoint
                ? R.from(_breakpoint).css(
                    `padding-right: ${gutter}px; padding-bottom: 0; width: 50%;`
                  )
                : ""}
            `}
          >
            {titleElem}
            {descriptionElem}
            {variantElem}
          </div>
          <div
            css={css`
              position: absolute;
              top: 0;
              right: 0;
              ${_breakpoint
                ? R.from(_breakpoint).css(
                    `position: relative; top: auto; right: auto; order: 3; padding-left: ${gutter}px;`
                  )
                : ""}
            `}
          >
            {removeElem}
          </div>
          <div
            css={css`
              display: flex;
              align-items: flex-end;
              ${_breakpoint
                ? R.from(_breakpoint).css(
                    "width: auto; justify-content: center;"
                  )
                : ""}
            `}
          >
            {quantityElem}
          </div>
          <div
            css={css`
              display: flex;
              justify-content: flex-end;
              ${_breakpoint
                ? R.from(_breakpoint).css(
                    `width: auto; padding-left: ${gutter}px; flex-grow: 1;`
                  )
                : ""}
            `}
          >
            {priceElem}
          </div>
        </div>
      );
    }
  );
  const [Variant, variantProps] = getOverrides(VariantOverride, VariantStyled);
  const [Title, titleProps] = getOverrides(TitleOverride, TitleStyled);
  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );
  const [Remove, removeProps] = getOverrides(RemoveOverride, ({ mode }) => (
    <>
      {(mode === "basket" || mode === "wishlist") && (
        <ButtonRaw$>Remove</ButtonRaw$>
      )}
    </>
  ));
  const [Quantity, quantityProps] = getOverrides(
    QuantityOverride,
    QuantityStyled
  );

  const titleElem = (
    <Title {...titleProps} layout={layout}>
      <Link href={productVariant.product.href}>
        <a>{productVariant.product.title}</a>
      </Link>
    </Title>
  );
  const descriptionElem = (
    <Description {...descriptionProps}>
      {productVariant.product.description}
    </Description>
  );
  const variantElem = (
    <Variant
      {...variantProps}
      variant={productVariant.selectedOptions[0].value}
    >
      Size: {productVariant.selectedOptions[0].value}
    </Variant>
  );
  const priceElem = <Price price={price} discountPrice={discountPrice} />;
  const removeElem = <Remove {...removeProps} mode={mode} />;

  const quantityElem = (
    <Quantity {...quantityProps} quantity={quantity} mode={mode}>
      {mode === "basket" && <ButtonRaw$>[-]</ButtonRaw$>}
      {quantity}
      {mode === "basket" && <ButtonRaw$>[+]</ButtonRaw$>}
      {mode === "wishlist" && <Button$>Add to basket</Button$>}
    </Quantity>
  );
  const contentElem = (
    <Content
      {...contentProps}
      titleElem={titleElem}
      descriptionElem={descriptionElem}
      variantElem={variantElem}
      removeElem={removeElem}
      quantityElem={quantityElem}
      priceElem={priceElem}
      layout={layout}
      mode={mode}
      gutter={gutter}
    />
  );

  const imageElem = (
    <Link href={productVariant.product.href}>
      <a tabIndex={"-1"}>
        <ImageContainer {...imageContainerProps} layout={layout}>
          <Image
            image={productVariant.product.images[0]}
            css={css`
              width: 100%;
            `}
          />
        </ImageContainer>
      </a>
    </Link>
  );
  return <Root image={imageElem} content={contentElem} {...rootProps} />;
};

CheckoutLineItemRow$.defaultProps = {
  gutter: 16,
  layout: "full",
  breakpoint: "md",
  mode: "default",
  dataMapper: x => x
};

CheckoutLineItemRow$.propTypes = {
  checkoutLineItem: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  layout: PropTypes.string,
  gutter: PropTypes.number,
  overrides: PropTypes.object
};

export default CheckoutLineItemRow$;
