import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";

import {
  RootStyled,
  ImageContainerStyled,
  NameStyled,
  DescriptionStyled,
  ContentStyled,
  ImageOverlayStyled,
  BadgeStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";
import { ButtonRaw$ } from "../ButtonRaw";

const ProductCard$ = props => {
  const {
    product,
    onSaveToFavourites,
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Name: NameOverride,
      Description: DescriptionOverride,
      Content: ContentOverride,
      ImageOverlay: ImageOverlayOverride,
      Badge: BadgeOverride,
      Price: Price
    }
  } = props;

  const { name, href, description, price, images, badges } = product;

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);
  const [ImageContainer, imageContainerProps] = getOverrides(
    ImageContainerOverride,
    ImageContainerStyled
  );
  const [Content, contentProps] = getOverrides(ContentOverride, ContentStyled);
  const [Name, nameProps] = getOverrides(NameOverride, NameStyled);
  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );
  const [ImageOverlay, imageOverlayProps] = getOverrides(
    ImageOverlayOverride,
    ImageOverlayStyled
  );
  const [Badge, badgeProps] = getOverrides(BadgeOverride, BadgeStyled);

  const nameElem = (
    <>
      <Name {...nameProps}>
        <a href={href}>{name} </a>
      </Name>
    </>
  );
  const descriptionElem = (
    <Description {...descriptionProps}>{description}</Description>
  );
  const priceElem = <Price price={price} />;
  const badgesElem = (
    <>
      {badges &&
        badges.map((badge, i) => (
          <Badge key={i} {...badgeProps} label={badge.label} type={badge.type}>
            {badge.label}
          </Badge>
        ))}
    </>
  );

  const contentElem = (
    <Content
      {...contentProps}
      name={nameElem}
      description={descriptionElem}
      price={priceElem}
      badges={badges}
    />
  );
  const imageElem = (
    <ImageContainer
      {...imageContainerProps}
      images={images}
      badges={badges}
      name={name}
      description={description}
      price={price}
      onSaveToFavourites={onSaveToFavourites}
    >
      <a href={product.href} tabIndex={"-1"}>
        <Image image={images[0]} />
      </a>
      <ImageOverlay
        {...imageOverlayProps}
        badges={badgesElem}
        onSaveToFavourites={onSaveToFavourites}
      />
    </ImageContainer>
  );

  return (
    <Root
      content={contentElem}
      image={imageElem}
      name={name}
      description={description}
      price={price}
      images={images}
      badges={badges}
      onSaveToFavourites={onSaveToFavourites}
      {...rootProps}
    />
  );
};

ProductCard$.defaultProps = {
  overrides: {}
};

ProductCard$.propTypes = {
  product: PropTypes.object.isRequired,
  overrides: PropTypes.object
};

export default ProductCard$;
