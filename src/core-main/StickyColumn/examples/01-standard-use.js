import React from "react";
import {StickyColumn, Grid, GridItem} from "storefront-ui";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

import VariableHeightColumn from "../../../../docs-utils/VariableHeightColumn";

export default () => {
    return (<div>

        <Grid>
            <GridItem
                params={{
                    xs: 24,
                    lg: 12
                }}
            >
                <VariableHeightColumn color={"blue"} height={8000}/>
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
                    offset={[10, 10]}
                >
                    <VariableHeightColumn color={"green"} height={2000}/>
                </StickyColumn>
            </GridItem>
            <GridItem
                params={{
                    xs: 0,
                    lg: 3
                }}
            >
                <VariableHeightColumn color={"red"} height={1000}/>
            </GridItem>

            <GridItem
                params={{
                    xs: 0,
                    lg: 3
                }}
            >
                <VariableHeightColumn color={"orange"} height={400}/>
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
                >
                    <VariableHeightColumn color={"black"} height={400}/>
                </StickyColumn>
            </GridItem>
        </Grid>

    </div>)
};
