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
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Name: NameOverride,
      Description: DescriptionOverride,
      Variant: VariantOverride,
      Price: Price,
      Content: ContentOverride,
      Data: DataOverride,
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
    ({ dataElem, removeElem, quantityElem, priceElem, mode }) => {
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
  const [Remove, removeProps] = getOverrides(RemoveOverride, () => (
    <ButtonRaw$>Remove</ButtonRaw$>
  ));
  const [Quantity, quantityProps] = getOverrides(
    QuantityOverride,
    QuantityStyled
  );

  const nameElem = (
    <Name {...nameProps}>
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
    />
  );

  const imageElem = (
    <a href={href} tabIndex={"-1"}>
      <ImageContainer {...imageContainerProps}>
        <Image image={images[0]} />
      </ImageContainer>
    </a>
  );
  return <Root image={imageElem} content={contentElem} {...rootProps} />;
};
ProductRow$.defaultProps = {
  gutter: 16,
  mode: "full",
  breakpoint: "md"
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
