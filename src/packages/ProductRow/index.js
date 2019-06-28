import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";
import { rslin } from "responsive-helpers";
import {
  RootStyled,
  ImageContainerStyled,
  NameStyled,
  DescriptionStyled,
  PriceStyled,
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
    name,
    images,
    href,
    description,
    price,
    discountPrice,
    quantity,
    variant,
    gutter,
    mode,
    breakpoint,
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Name: NameOverride,
      Description: DescriptionOverride,
      Variant: VariantOverride,
      Price: PriceOverride,
      Content: ContentOverride,
      Data: DataOverride,
      Quantity: QuantityOverride,
      Remove: RemoveOverride
    }
  } = props;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [ImageContainer, imageContainerProps] = getOverrides(
    ImageContainerOverride,
    ImageContainerStyled
  );
  const [Content, contentProps] = getOverrides(
    ContentOverride,
    ({
      dataElem,
      removeElem,
      quantityElem,
      priceElem,
      mode,
      name,
      description,
      variant,
      quantity,
      price,
      discountPrice
    }) => {
      let _breakpoint = breakpoint;
      if (mode === "compact") {
        _breakpoint = undefined;
      }

      let paramsData = { xs: [20] };
      let paramsRemove = { xs: [4] };
      let paramsQuantity = { xs: [12] };
      let paramsPrice = { xs: [12] };

      if (_breakpoint) {
        paramsData[_breakpoint] = [12, 0, 0];
        paramsQuantity[_breakpoint] = [3, 0, 1];
        paramsPrice[_breakpoint] = [5, 0, 2];
        paramsRemove[_breakpoint] = [4, 0, 3];
      }

      return (
        <div
          css={css`
            display: flex;
            flex-grow: 1;
          `}
        >
          <Grid
            css={css`
              flex-grow: 1;
              height: 100%;
              padding: ${gutter}px;
              & > div {
                height: 100%;
                align-content: stretch;
                ${_breakpoint &&
                  R.from(_breakpoint).css("align-items: center;")}
              }
            `}
            gutter={gutter}
          >
            <GridItem params={paramsData}>{dataElem}</GridItem>
            <GridItem
              params={paramsRemove}
              css={css`
                display: flex;
                justify-content: flex-end;
                align-items: flex-start;
              `}
            >
              {removeElem}
            </GridItem>
            <GridItem
              params={paramsQuantity}
              css={css`
                display: flex;
                align-items: flex-end;
                ${_breakpoint &&
                  R.from(_breakpoint).css("justify-content: center;")}
              `}
            >
              {quantityElem}
            </GridItem>
            <GridItem
              params={paramsPrice}
              css={css`
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
                ${_breakpoint &&
                  R.from(_breakpoint).css("align-items: center;")}
              `}
            >
              {priceElem}
            </GridItem>
          </Grid>
        </div>
      );
    }
  );
  const [Data, dataProps] = getOverrides(DataOverride, DataStyled);
  const [Variant, variantProps] = getOverrides(VariantOverride, VariantStyled);
  const [Name, nameProps] = getOverrides(NameOverride, NameStyled);
  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );
  const [Price, priceProps] = getOverrides(PriceOverride, PriceStyled);
  const [Remove, removeProps] = getOverrides(RemoveOverride, () => (
    <ButtonRaw$>Remove</ButtonRaw$>
  ));
  const [Quantity, quantityProps] = getOverrides(
    QuantityOverride,
    QuantityStyled
  );

  const nameElem = (
    <>
      <ButtonRaw$ href={href}>
        <Name {...nameProps}>{name}</Name>
      </ButtonRaw$>
    </>
  );
  const descriptionElem = (
    <Description {...descriptionProps}>{description}</Description>
  );
  const variantElem = (
    <Variant {...variantProps} variant={variant}>
      Size: {variant}
    </Variant>
  );
  const priceElem = (
    <Price
      {...priceProps}
      price={price}
      discountPrice={discountPrice}
      quantity={quantity}
    />
  );
  const removeElem = <Remove {...removeProps} />;

  const dataElem = (
    <Data
      {...dataProps}
      name={nameElem}
      description={descriptionElem}
      variant={variantElem}
    />
  );
  const quantityElem = (
    <Quantity {...quantityProps} quantity={quantity}>
      <ButtonRaw$>[-]</ButtonRaw$>
      {quantity}
      <ButtonRaw$>[+]</ButtonRaw$>
    </Quantity>
  );

  const contentElem = (
    <Content
      {...contentProps}
      dataElem={dataElem}
      removeElem={removeElem}
      quantityElem={quantityElem}
      priceElem={priceElem}
      mode={mode}
      name={name}
      description={description}
      variant={variant}
      quantity={quantity}
      price={price}
      discountPrice={discountPrice}
    />
  );

  const imageElem = (
    <ImageContainer {...imageContainerProps}>
      <Image image={images[0]} />
    </ImageContainer>
  );

  return <Root image={imageElem} content={contentElem} {...rootProps} />;
};
ProductRow$.defaultProps = {
  gutter: 16,
  mode: "full",
  breakpoint: "md"
};

ProductRow$.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
  images: PropTypes.array.isRequired,
  badges: PropTypes.array,
  gutter: PropTypes.number,
  overrides: PropTypes.object
};

export default ProductRow$;
