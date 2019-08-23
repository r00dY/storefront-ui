import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";

import {
  RootStyled,
  ImageContainerStyled,
  TitleStyled,
  DescriptionStyled,
  ContentStyled,
  ImageOverlayStyled,
  BadgeStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";

const ProductCard$ = props => {
  const {
    dataMapper,
    onSaveToFavourites,
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Title: TitleOverride,
      Description: DescriptionOverride,
      Content: ContentOverride,
      ImageOverlay: ImageOverlayOverride,
      Badge: BadgeOverride,
      Price: Price
    }
  } = props;

  const product = dataMapper(props.product); // map product

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [ImageContainer, imageContainerProps] = getOverrides(
    ImageContainerOverride,
    ImageContainerStyled
  );
  const [Content, contentProps] = getOverrides(ContentOverride, ContentStyled);
  const [Title, titleProps] = getOverrides(TitleOverride, TitleStyled);
  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );

  const [ImageOverlay, imageOverlayProps] = getOverrides(
    ImageOverlayOverride,
    ImageOverlayStyled
  );

  const [Badge, badgeProps] = getOverrides(BadgeOverride, BadgeStyled);

  const titleElem = (
    <>
      <Title {...titleProps} product={product}>
        <a href={product.href}>{product.title}</a>
      </Title>
    </>
  );

  const descriptionElem = (
    <Description {...descriptionProps} product={product}>
      {product.description}
    </Description>
  );
  const priceElem = <Price product={product} />;

  const badgesElem = (
    <>
      {product.badges &&
        product.badges.map((badge, i) => (
          <Badge key={i} {...badgeProps} label={badge.label} type={badge.type}>
            {badge.label}
          </Badge>
        ))}
    </>
  );

  const contentElem = (
    <Content
      {...contentProps}
      titleElem={titleElem}
      descriptionElem={descriptionElem}
      priceElem={priceElem}
      product={product}
    />
  );

  const imageElem = (
    <ImageContainer
      {...imageContainerProps}
      product={product}
      onSaveToFavourites={onSaveToFavourites}
    >
      <a href={product.href} tabIndex={"-1"}>
        <Image image={product.images[0]} />
      </a>
      <ImageOverlay
        {...imageOverlayProps}
        badgesElem={badgesElem}
        onSaveToFavourites={onSaveToFavourites}
      />
    </ImageContainer>
  );

  return (
    <Root
      contentElem={contentElem}
      imageElem={imageElem}
      product={product}
      onSaveToFavourites={onSaveToFavourites}
      {...rootProps}
    />
  );
};

ProductCard$.defaultProps = {
  overrides: {},
  dataMapper: x => x
};

ProductCard$.propTypes = {
  product: PropTypes.object.isRequired,
  overrides: PropTypes.object
};

export default ProductCard$;
