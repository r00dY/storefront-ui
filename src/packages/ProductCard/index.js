import PropTypes from "prop-types";
import React from "react";
import Image from "../Image";

import {
  RootStyled,
  ImageContainerStyled,
  NameStyled,
  DescriptionStyled,
  PriceStyled,
  ContentStyled,
  ImageOverlayStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rs } from "responsive-helpers";
import { getOverrides } from "../base/helpers/overrides";
import { ButtonRaw$ } from "../ButtonRaw";

const ProductCard$ = props => {
  const {
    name,
    href,
    description,
    price,
    discountPrice,
    images,
    badges,
    overrides: {
      Root: RootOverride,
      ImageContainer: ImageContainerOverride,
      Name: NameOverride,
      Description: DescriptionOverride,
      Price: PriceOverride,
      Content: ContentOverride,
      ImageOverlay: ImageOverlayOverride,
      Badge: BadgeOverride
    }
  } = props;

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
  const [Price, priceProps] = getOverrides(PriceOverride, PriceStyled);
  const [ImageOverlay, imageOverlayProps] = getOverrides(
    ImageOverlayOverride,
    ImageOverlayStyled
  );
  const [Badge, badgeProps] = getOverrides(BadgeOverride, props => (
    <div>{props.children}</div>
  ));

  const nameElem = (
    <ButtonRaw$ href={href}>
      <Name {...nameProps}>{name}</Name>
    </ButtonRaw$>
  );
  const descriptionElem = (
    <Description {...descriptionProps}>{description}</Description>
  );
  const priceElem = (
    <Price {...priceProps} price={price} discountPrice={discountPrice}>
      {price} {discountPrice}
    </Price>
  );
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
      discountPrice={discountPrice}
    >
      <Image image={images[0]} />
      <ImageOverlay {...imageOverlayProps} badges={badgesElem} />
    </ImageContainer>
  );

  return (
    <Root
      content={contentElem}
      image={imageElem}
      name={name}
      description={description}
      price={price}
      discountPrice={discountPrice}
      images={images}
      badges={badges}
      {...rootProps}
    />
  );
};
//
// ProductCard$.defaultProps = {
//     overrides: {}
// };

ProductCard$.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string.isRequired,
  discountPrice: PropTypes.string,
  images: PropTypes.array.isRequired,
  badges: PropTypes.array,
  overrides: PropTypes.object
};

export default ProductCard$;
