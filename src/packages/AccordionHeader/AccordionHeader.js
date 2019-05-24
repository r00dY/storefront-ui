import React from "react";
import { getOverrides } from "../base/helpers/overrides";
import { TitleStyled, ToggleStyled, RootStyled } from "./styled-components";
import { ButtonRaw } from "../ButtonRaw";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function AccordionHeader(props) {
  const {
    children,
    open,
    overrides: {
      Title: TitleOverride,
      Toggle: ToggleOverride,
      Root: RootOverride
    },
    ...restProps
  } = props;

  const sharedProps = {
    $open: open,
    $title: children
  };

  const [Title, titleProps] = getOverrides(TitleOverride, TitleStyled);

  const [Toggle, toggleProps] = getOverrides(ToggleOverride, ToggleStyled);

  const [Root, rootProps] = getOverrides(RootOverride, RootStyled);

  const toggle = (
    <Toggle {...sharedProps} {...toggleProps}>
      {open ? "-" : "+"}
    </Toggle>
  );
  const title = (
    <Title {...sharedProps} {...titleProps}>
      {children}
    </Title>
  );

  return (
    <ButtonRaw
      {...restProps}
      css={css`
        display: block;
        width: 100%;
      `}
    >
      <Root {...sharedProps} {...rootProps} toggle={toggle} title={title} />
    </ButtonRaw>
  );
}

AccordionHeader.defaultProps = {
  open: true,
  overrides: {}
};

export { AccordionHeader };
