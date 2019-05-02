import React from "react";
import { storiesOf } from "@storybook/react";
import SwipeableItemsContainer from "./SwipeableItemsContainer";
import Index from "../Container/Container";
import { rslin } from "responsive-helpers";
import Layout from "../Layout";
import styled from "@emotion/styled";

const Box = styled.div`
    position: relative;
    width: 100%;
    background-color: ${props => props.background};
    height: ${props => props.height};
`;

const backgroundColors = ["black", "blue", "red", "yellow", "orange", "green"];
const items = (n, height) => {
    let result = [];
    height = height || "100%";

    for (let i = 0; i < n; i++) {
        result.push(
            <Box background={backgroundColors[i % 6]} height={height} />
        );
    }

    return result;
};

const HorizontalContainer = styled.div`
    border: 1px solid lightgrey;
    height: 200px;
`;

const VerticalContainer = styled.div`
    border: 1px solid lightgrey;
    width: 200px;
    height: 800px;
`;

storiesOf("SwipeableItemsContainer", module).add("slider mode", () => (
    <Index>
        <br />
        <h2>Slider horizontal (itemSize)</h2>
        <br />
        <HorizontalContainer>
            <SwipeableItemsContainer
                mode={"horizontal"}
                items={items(12)}
                gutter={rslin(10, 50)}
                itemSize={Layout.main.cols(6)}
                offsetBefore={rslin(10, 50)}
                offsetAfter={rslin(10, 50)}
            />
        </HorizontalContainer>
        <br />

        <h2>Slider horizontal (itemsVisible)</h2>
        <br />
        <HorizontalContainer>
            <SwipeableItemsContainer
                mode={"horizontal"}
                items={items(12)}
                gutter={rslin(10, 50)}
                itemsInRow={3}
            />
        </HorizontalContainer>

        <br />
        <h2>Slider horizontal (itemsVisible + offset)</h2>
        <br />
        <HorizontalContainer>
            <SwipeableItemsContainer
                mode={"horizontal"}
                items={items(12)}
                gutter={rslin(10, 50)}
                itemsInRow={3}
                offsetBefore={rslin(10, 50)}
                offsetAfter={rslin(10, 50)}
            />
        </HorizontalContainer>

        <br />

        <h2>Slider horizontal (less items than container width)</h2>
        <br />

        <HorizontalContainer>
            <SwipeableItemsContainer
                mode={"horizontal"}
                items={items(4)}
                itemSize={200}
            />
        </HorizontalContainer>
        <br />

        <h2>Slider vertical</h2>
        <br />

        <VerticalContainer>
            <SwipeableItemsContainer
                mode={"vertical"}
                items={items(12, "200px")}
                itemSize={rslin(100, 200)}
                gutter={rslin(10, 50)}
                offsetBefore={rslin(10, 50)}
                offsetAfter={rslin(10, 50)}
            />
        </VerticalContainer>

        <br />

        <h2>Slider vertical (itemsVisible)</h2>
        <br />

        <VerticalContainer>
            <SwipeableItemsContainer
                mode={"vertical"}
                items={items(12, "100%")}
                itemsInRow={3}
            />
        </VerticalContainer>

        <br />
        <h2>
            Slider horizontal with transforms (swiper script) + itemsVisible
        </h2>
        <br />

        <HorizontalContainer>
            <SwipeableItemsContainer
                mode={"horizontal"}
                items={items(12)}
                itemsInRow={2}
                gutter={20}
                offsetBefore={100}
                offsetAfter={100}
                swiper={true}
            />
        </HorizontalContainer>
        <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </Index>
));
