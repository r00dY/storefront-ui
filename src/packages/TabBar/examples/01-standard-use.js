import React, { useState } from "react";
import { TabBar } from "../../../../demo/components/TabBar";
import { Button } from "../../../../demo/components/Button";
import { TabBar$ } from "@commerce-ui/core/TabBar";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const options = [
  {
    label: "One",
    panel: <div>Panel one</div>
  },
  {
    label: "Two",
    panel: <div>Panel two</div>
  },
  {
    label: "Three",
    panel: <div>Panel three</div>
  },
  {
    label: "Four",
    panel: <div>Panel four</div>
  },
  {
    label: "Five",
    panel: <div>Panel five</div>
  },
  {
    label: "Six",
    panel: <div>Panel six</div>
  },
  {
    label: "Seven",
    panel: <div>Panel seven</div>
  },
  {
    label: "Eight",
    panel: <div>Panel eight</div>
  },
  {
    label: "Nine",
    panel: <div>Panel nine</div>
  },
  {
    label: "Ten",
    panel: <div>Panel ten</div>
  },
  {
    label: "Eleven",
    panel: <div>Panel eleven</div>
  },
  {
    label: "Twelve",
    panel: <div>Panel twelve</div>
  }
];

const options2 = options.slice(0, 5);

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

      <p>With panels</p>
      <Wrapper>
        <TabBar
          scrollable={false}
          {...props2}
          align={"fit"}
          showPanels={true}
        />
      </Wrapper>

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
