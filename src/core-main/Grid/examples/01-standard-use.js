import { Grid, GridItem, Container } from "storefront-ui";
import React from "react";
import Rectangle from "./Rectangle";

export default () => (
    <Container>
        <Grid>
            {/* Fixed width items */}

            <GridItem params={6}>
                <Rectangle color={"red"}>always 6 cols</Rectangle>
            </GridItem>

            <GridItem params={6}>
                <Rectangle color={"red"}>always 6 cols</Rectangle>
            </GridItem>

            <GridItem params={6}>
                <Rectangle color={"red"}>always 6 cols</Rectangle>
            </GridItem>

            <GridItem params={6}>
                <Rectangle color={"red"}>always 6 cols</Rectangle>
            </GridItem>

            {/* Responsive width items */}

            <GridItem params={{
                xs: 24,
                md: 12,
                lg: 6
            }}>
                <Rectangle color={"coral"}>24 on xs<br/>12 on md<br />6 on lg</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: 24,
                md: 12,
                lg: 6
            }}>
                <Rectangle color={"coral"}>24 on xs<br/>12 on md<br />6 on lg</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: 24,
                md: 12,
                lg: 6
            }}>
                <Rectangle color={"coral"}>24 on xs<br/>12 on md<br />6 on lg</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: 24,
                md: 12,
                lg: 6
            }}>
                <Rectangle color={"coral"}>24 on xs<br/>12 on md<br />6 on lg</Rectangle>
            </GridItem>

            <GridItem params={6}>
                <Rectangle color={"red"}>always 6 cols</Rectangle>
            </GridItem>

            {/* width + offset example (with responsiveness) */}

            <GridItem params={{
                xs: [6, 0],
                md: [6, 6],
                lg: [6, 12]
            }}>
                <Rectangle color={"blue"}>always 6 cols<br/>+12 cols offset on lg<br/>+6 cols offset on md<br/>+0 cols offset on xs</Rectangle>
            </GridItem>

        </Grid>

        {/* Order changes on responsiveness */}

        <Grid>
            <GridItem params={{
                xs: [6, 0, 3],
                lg: [6, 0, 0]
            }}>
                <Rectangle color={"olivedrab"}>A (order changed below lg)</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: [6, 0, 2],
                lg: [6, 0, 1]
            }}>
                <Rectangle color={"salmon"}>B (order changed below lg)</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: [6, 0, 1],
                lg: [6, 0, 2]
            }}>
                <Rectangle color={"cadetblue"}>C (order changed below lg)</Rectangle>
            </GridItem>

            <GridItem params={{
                xs: [6, 0, 0],
                lg: [6, 0, 3]
            }}>
                <Rectangle color={"cornflowerblue"}>D (order changed below lg)</Rectangle>
            </GridItem>

        </Grid>
    </Container>
);
