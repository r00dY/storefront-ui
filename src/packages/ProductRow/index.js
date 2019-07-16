import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";
import { rslin } from "responsive-helpers";
import {
  RootStyled,
  ImageContainerStyled,
  NameStyled,
  DescriptionStyled,
  DataStyled,
  VariantStyled,
  QuantityStyled
} from "./styled-components";

import { R } from "storefront-ui/Config";
import { Grid, GridItem } from "storefront-ui/Grid";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";
import { ButtonRaw$ } from "../ButtonRaw";

const ProductRow$ = props => {
  const {
    product,
    price,
    quantity,
    gutter,
    mode,
    breakpoint,
    editable,
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Name: NameOverride,
      Description: DescriptionOverride,
      Variant: VariantOverride,
      Price: Price,
      Content: ContentOverride,
      Quantity: QuantityOverride,
      Remove: RemoveOverride
    }
  } = props;

  const { name, description, variant, href, images } = product;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [ImageContainer, imageContainerProps] = getOverrides(
    ImageContainerOverride,
    ImageContainerStyled
  );
  const [Content, contentProps] = getOverrides(
    ContentOverride,
    ({
      nameElem,
      descriptionElem,
      variantElem,
      removeElem,
      quantityElem,
      priceElem,
      mode,
      editable
    }) => {
      let _breakpoint = breakpoint;
      if (mode === "compact") {
        _breakpoint = undefined;
      }

      return (
        <div
          css={css`
            width: 100%;
            padding: ${gutter}px;
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
              padding-bottom: ${gutter}px;
              ${editable ? "padding-right: 30px;" : ""}
              ${_breakpoint
                ? R.from(_breakpoint).css(
                    `padding-right: ${gutter}px; padding-bottom: 0; width: 50%;`
                  )
                : ""}
            `}
          >
            {nameElem}
            {descriptionElem}
            {variantElem}
          </div>
          <div
            css={css`
              position: absolute;
              top: ${gutter}px;
              right: ${gutter}px;
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
  const [Name, nameProps] = getOverrides(NameOverride, NameStyled);
  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );
  const [Remove, removeProps] = getOverrides(RemoveOverride, ({ editable }) => (
    <>{editable && <ButtonRaw$>Remove</ButtonRaw$>}</>
  ));
  const [Quantity, quantityProps] = getOverrides(
    QuantityOverride,
    QuantityStyled
  );

  const nameElem = (
    <Name {...nameProps} mode={mode}>
      <a href={href}>{name}</a>
    </Name>
  );
  const descriptionElem = (
    <Description {...descriptionProps}>{description}</Description>
  );
  const variantElem = (
    <Variant {...variantProps} variant={variant}>
      Size: {variant}
    </Variant>
  );
  const priceElem = <Price price={price} />;
  const removeElem = <Remove {...removeProps} editable={editable} />;

  const quantityElem = (
    <Quantity {...quantityProps} quantity={quantity} editable={editable}>
      {editable && <ButtonRaw$>[-]</ButtonRaw$>}
      {quantity}
      {editable && <ButtonRaw$>[+]</ButtonRaw$>}
    </Quantity>
  );
  const contentElem = (
    <Content
      {...contentProps}
      nameElem={nameElem}
      descriptionElem={descriptionElem}
      variantElem={variantElem}
      removeElem={removeElem}
      quantityElem={quantityElem}
      priceElem={priceElem}
      mode={mode}
      name={name}
      description={description}
      variant={variant}
      quantity={quantity}
      price={price}
      editable={editable}
    />
  );

  const imageElem = (
    <a href={href} tabIndex={"-1"}>
      <ImageContainer {...imageContainerProps} mode={mode}>
        <Image
          image={images[0]}
          css={css`
            width: 100%;
          `}
        />
      </ImageContainer>
    </a>
  );
  return <Root image={imageElem} content={contentElem} {...rootProps} />;
};
ProductRow$.defaultProps = {
  gutter: 16,
  mode: "full",
  breakpoint: "md",
  editable: false
};

ProductRow$.propTypes = {
  product: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  quantity: PropTypes.string.isRequired,
  mode: PropTypes.string,
  gutter: PropTypes.number,
  overrides: PropTypes.object
};

export default ProductRow$;
