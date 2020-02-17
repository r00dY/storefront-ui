import React from "react";
import { getOverrides } from "../../packages/base/helpers/overrides";
import {
  TitleStyled,
  DescriptionStyled,
  RootStyled
} from "./styled-components";

function FormHeader(props) {
  const {
    title,
    description,
    overrides: {
      Title: TitleOverride,
      Description: DescriptionOverride,
      Root: RootOverride
    }
  } = props;

  const sharedProps = {
    $title: props.title,
    $description: props.description
  };

  const [Title, titleProps] = getOverrides(TitleOverride, TitleStyled);

  const [Description, descriptionProps] = getOverrides(
    DescriptionOverride,
    DescriptionStyled
  );

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  return (
    <Root {...sharedProps} {...rootProps}>
      <Title {...sharedProps} {...titleProps}>
        {title}
      </Title>
      <Description {...sharedProps} {...descriptionProps}>
        {description}
      </Description>
    </Root>
  );
}

FormHeader.defaultProps = {
  overrides: {}
};

export { FormHeader };
