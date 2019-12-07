import React, { useState } from "react";
import { Input } from "../../../../demo/components/Input";
import { StatefulInput } from "../../../../demo/components/Input";
import { Input$ } from "@commerce-ui/core/Input";
import { StatefulInput$ } from "@commerce-ui/core/Input";
import { Button } from "../../../../demo/components/Button";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import IconSearch from "../../../../data/svg/search.svg";

export default () => {
  let [value, setValue] = useState("");
  let [value2, setValue2] = useState("Peter Pan");

  return (
    <div>
      <div
        css={css`
          position: fixed;
          bottom: 0;
          background: black;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 100%;
          left: 0;
        `}
      >
        Coś tu jest
      </div>
      <p>Standard</p>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder={"First name"}
        value={value}
      />
      <br />
      <Input
        onChange={e => setValue2(e.target.value)}
        placeholder={"First name"}
        value={value2}
      />
      <br />
      <p>Clearable</p>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder={"First name"}
        value={value}
        clearable={true}
      />
      <p>Error</p>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder={"First name"}
        value={value}
        error={true}
      />{" "}
      <br />
      <Input
        onChange={e => setValue2(e.target.value)}
        placeholder={"First name"}
        value={value2}
        error={true}
      />
      <p>Disabled</p>
      <Input
        onChange={e => setValue(e.target.value)}
        placeholder={"First name"}
        value={value}
        disabled={true}
      />{" "}
      <br />
      <Input
        onChange={e => setValue2(e.target.value)}
        placeholder={"First name"}
        value={value2}
        disabled={true}
      />
      <p>type=number and hiding browser controls</p>
      <StatefulInput placeholder={"Number without controls"} type={"number"} />
      <br />
      <StatefulInput
        placeholder={"Number with controls"}
        type={"number"}
        hideSpinButtons={false}
      />
      <p>Before / After + stateful</p>
      <StatefulInput
        placeholder={"Search"}
        overrides={{
          After: () => (
            <div
              css={css`
                display: flex;
                justify-content: flex;
                align-items: center;
                margin-right: 8px;
              `}
            >
              <IconSearch
                css={css`
                  fill: currentColor;
                `}
              />
            </div>
          )
        }}
      />
      <p>Themed</p>
      <StatefulInput$
        placeholder={"Search"}
        overrides={{
          InputContainer: {
            style: `
                    border-color: green;
                    border-width: 2px;
                `
          }
        }}
      />
      <p>Themed as thick</p>
      <StatefulInput
        placeholder={"Search"}
        overrides={{
          InputContainer: {
            style: `
                                border-color: black;
                                border-width: 5px;
                            `
          }
        }}
      />
      <p>Form validations</p>
      <form method={"post"} action={"/"}>
        <StatefulInput type={"email"} required={true} />
        <Button type={"submit"}>Submit</Button>
      </form>
    </div>
  );
};
