import React from "react";
import PropTypes from "prop-types";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rslin } from "responsive-helpers";
import Font from "@commerce-ui/core/Font";
import Container from "@commerce-ui/core/Container";
import { Grid, GridItem } from "@commerce-ui/core/Grid";

function EditorialIntro(props) {
  return (
    <div>
      <Container>
        <Grid>
          <GridItem
            params={{ xs: 24, sm: [20, 2], md: [16, 4] }}
            css={css`
              text-align: ${props.textalign};
              ${rslin(50, 60).css("padding-top")}
              ${rslin(50, 60).css("padding-bottom")}
            `}
          >
            <div
              css={css`
                ${props.titleFont.css}
              `}
            >
              {props.title}
            </div>
            <div
              css={css`
                ${props.paragraphFont.css}
                ${rslin(20, 30).css("margin-top")}
              `}
            >
              {props.paragraph}
            </div>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
EditorialIntro.testOptions = {
  textalign: ["left", "center", "right", "justify"]
};
EditorialIntro.defaultProps = {
  textalign: "center"
};
EditorialIntro.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  textalign: PropTypes.oneOf(EditorialIntro.testOptions.textalign).isRequired,
  paragraphFont: PropTypes.instanceOf(Font),
  titleFont: PropTypes.instanceOf(Font)
};
export default EditorialIntro;
