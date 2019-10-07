import React from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import Container from "@commerce-ui/core/Container";
import { useTheme } from "@commerce-ui/core/Theme";
import { L } from "@commerce-ui/core/Config";

import { rslin } from "responsive-helpers";

import Link from "next/link";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TextSection = props => {
  const theme = useTheme();
  return (
    <Container>
      <Grid>
        <GridItem params={{ xs: 24, md: [16, 4], lg: [12, 6] }}>
          <div
            css={css`
              h1 {
                ${theme.fonts.h2.css}
                text-align: center;
                margin-bottom: 1em;
                margin-top: 2em;
              }
              h2 {
                ${theme.fonts.h5.css}
                margin-bottom: 1em;
                margin-top: 2em;
              }
              h3 {
                ${theme.fonts.body1.css}
                margin-bottom: 1em;
                margin-top: 2em;
                font-weight: 800;
              }
              p {
                ${theme.fonts.body1.css}
                margin-bottom: 1em;
              }
              a {
                color: inherit;
              }
            `}
          >
            {props.children}
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default TextSection;
