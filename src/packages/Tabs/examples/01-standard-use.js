import React, { useState } from "react";
import { Tabs } from "../../../../demo/theme/Tabs";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const data = [
  {
    label: "One",
    content: <div>Tab nr one</div>
  },
  {
    label: "Two",
    content: <div>Tab nr two</div>
  },
  {
    label: "Three",
    content: <div>Tab nr three</div>
  },
  {
    label: "Four",
    content: <div>Tab nr four</div>
  }
];

const Wrapper = styled.div`
  border: 1px solid lightgrey;
`;

export default () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <p>Scrollable (align=left)</p>
      <Tabs data={data} active={tab} onChange={setTab} />
    </div>
  );
};
