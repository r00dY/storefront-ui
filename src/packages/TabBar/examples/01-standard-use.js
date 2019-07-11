import React, { useState } from "react";
import { TabBar } from "../../../../demo/theme/TabBar";
import { Button } from "../../../../demo/theme/Button";
import { TabBar$ } from "storefront-ui/TabBar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const options = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve"
];

const options2 = ["One", "Two", "Three", "Four", "Five"];

const Wrapper = styled.div`
  border: 1px solid lightgrey;
`;

export default () => {
  const [tab, setTab] = useState(11);
  const [tab2, setTab2] = useState(0);

  const props1 = {
    data: options,
    active: tab,
    onChange: setTab
  };

  const props2 = {
    data: options2,
    active: tab2,
    onChange: setTab2
  };

  return (
    <div>
      <p>Scrollable (align=left)</p>
      <Wrapper>
        <TabBar {...props1} />
      </Wrapper>

      <p>Scrollable (align=center)</p>
      <Wrapper>
        <TabBar {...props1} align={"center"} />
      </Wrapper>

      <p>Scrollable (align=right)</p>
      <Wrapper>
        <TabBar {...props1} align={"right"} />
      </Wrapper>

      <p>Scrollable (align=fit)</p>
      <Wrapper>
        <TabBar {...props1} align={"fit"} />
      </Wrapper>

      <p>Scrollable (align=left) - few items</p>
      <Wrapper>
        <TabBar {...props2} />
      </Wrapper>

      <p>Scrollable (align=center) - few items</p>
      <Wrapper>
        <TabBar {...props2} align={"center"} />
      </Wrapper>

      <p>Scrollable (align=right)</p>
      <Wrapper>
        <TabBar {...props2} align={"right"} />
      </Wrapper>

      <p>Scrollable (align=fit) - few items</p>
      <Wrapper>
        <TabBar {...props2} align={"fit"} />
      </Wrapper>

      <p>Not scrollable (align=left)</p>
      <Wrapper>
        <TabBar scrollable={false} {...props1} />
      </Wrapper>

      <p>Not scrollable (align=center)</p>
      <Wrapper>
        <TabBar scrollable={false} {...props1} align={"center"} />
      </Wrapper>

      <p>Not scrollable (align=right) - few items</p>
      <Wrapper>
        <TabBar scrollable={false} {...props1} align={"right"} />
      </Wrapper>

      <p>Not scrollable (align=fit)</p>
      <Wrapper>
        <TabBar scrollable={false} {...props1} align={"fit"} />
      </Wrapper>

      <p>Not scrollable (align=left) - few items</p>
      <Wrapper>
        <TabBar scrollable={false} {...props2} />
      </Wrapper>

      <p>Not scrollable (align=center) - few items</p>
      <Wrapper>
        <TabBar scrollable={false} {...props2} align={"center"} />
      </Wrapper>

      <p>Not scrollable (align=right) - few items</p>
      <Wrapper>
        <TabBar scrollable={false} {...props2} align={"right"} />
      </Wrapper>

      <p>Not scrollable (align=fit) - few items</p>
      <Wrapper>
        <TabBar scrollable={false} {...props2} align={"fit"} />
      </Wrapper>

      <br />
      <br />

      {/*<div css={css`*/}
      {/*display: flex;*/}
      {/*flex-direction: row;*/}
      {/*overflow-x: auto;*/}
      {/*`}>*/}

      {/*<div css={css`*/}
      {/*display: flex;*/}
      {/*flex-direction: row;*/}
      {/*`}>*/}

      {/*<div css={css`*/}
      {/*flex-grow: 1;*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 100px;*/}
      {/*background: red;*/}
      {/*margin: 5px;*/}
      {/*`}>*/}
      {/*</div>*/}

      {/*<div css={css`*/}
      {/*flex-grow: 1;*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 100px;*/}
      {/*background: blue;*/}
      {/*margin: 5px;*/}
      {/*`}>*/}
      {/*</div>*/}

      {/*<div css={css`*/}
      {/*flex-grow: 1;*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 100px;*/}
      {/*background: yellow;*/}
      {/*margin: 5px;*/}
      {/*`}>*/}
      {/*</div>*/}

      {/*<div css={css`*/}
      {/*flex-grow: 1;*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 100px;*/}
      {/*background: green;*/}
      {/*margin: 5px;*/}
      {/*`}>*/}
      {/*</div>*/}

      {/*<div css={css`*/}
      {/*flex-grow: 1;*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 100px;*/}
      {/*background: black;*/}
      {/*margin: 5px;*/}
      {/*`}>*/}
      {/*</div>*/}

      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
};
