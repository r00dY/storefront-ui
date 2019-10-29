import React from "react";
import StickyColumn from "@commerce-ui/core/StickyColumn";
import { Grid, GridItem } from "@commerce-ui/core/Grid";
import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import VariableHeightColumn from "../../../../docs-utils/VariableHeightColumn";

export default () => {
  return (
    <div>
      <Grid>
        <GridItem
          params={{
            xs: 24,
            lg: 12
          }}
        >
          <VariableHeightColumn color={"blue"} height={8000} />
        </GridItem>
        <GridItem
          params={{
            xs: [24, 0, -1],
            lg: 3
          }}
        >
          <StickyColumn
            css={css`
              height: 100%;
            `}
            offset={rslin(10, 20)}
          >
            <VariableHeightColumn color={"green"} height={2000} />
          </StickyColumn>
        </GridItem>
        <GridItem
          params={{
            xs: 0,
            lg: 3
          }}
        >
          <VariableHeightColumn color={"red"} height={1000} />
        </GridItem>

        <GridItem
          params={{
            xs: 0,
            lg: 3
          }}
        >
          <VariableHeightColumn color={"orange"} height={400} />
        </GridItem>

        <GridItem
          params={{
            xs: [24, 0, 2],
            lg: 3
          }}
        >
          <StickyColumn
            css={css`
              height: 100%;
            `}
            offset={10}
          >
            <VariableHeightColumn color={"black"} height={400} />
          </StickyColumn>

          {/*<div css={css`*/}
          {/*position: relative;*/}
          {/*height: 100%;*/}
          {/*`}>*/}
          {/*<div css={css`*/}
          {/*position: sticky;*/}
          {/*z-index: 1000;*/}
          {/*left: 0;*/}
          {/*top: 0;*/}
          {/*width: 100%;*/}
          {/*height: 300px;*/}
          {/*background-color: coral;*/}
          {/*`}>*/}
          {/*</div>*/}
          {/*</div>*/}
        </GridItem>
      </Grid>

      {/*<div css={css`*/}
      {/*position: relative;*/}
      {/*height: 2000px;*/}
      {/*`}>*/}
      {/*<div css={css`*/}
      {/*position: sticky;*/}
      {/*z-index: 1000;*/}
      {/*left: 0;*/}
      {/*top: 0;*/}
      {/*width: 100%;*/}
      {/*height: 300px;*/}
      {/*background-color: coral;*/}
      {/*`}>*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
};
