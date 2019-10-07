import React, { useState } from "react";
import { StatefulTextarea as Textarea } from "../../../../demo/components/Textarea";
import { StatefulTextarea$ } from "storefront-ui/Textarea";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  let [value, setValue] = useState("");
  let [value2, setValue2] = useState(
    "This is beautifulest design system ever!"
  );

  return (
    <div>
      <p>Standard</p>
      <Textarea onChange={e => setValue(e.target.value)} placeholder={"Notes"}>
        {value}
      </Textarea>
      <br />
      <Textarea
        initialState={{ value: value2 }}
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
      />
      <p>Error</p>
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        initialState={{ value: value2 }}
        error={true}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
        error={true}
      />
      <p>Disabled</p>
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        initialState={{ value: value2 }}
        disabled={true}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
        disabled={true}
      />
      <p>Overrides</p>
      <StatefulTextarea$
        placeholder={"Search"}
        overrides={{
          Input: {
            style: `
                                border-color: green;
                                border-width: 2px;
                            `
          }
        }}
      />
    </div>
  );
};
