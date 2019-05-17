import React, { useState } from "react";
import { StatefulTextarea as Textarea } from "storefront-ui/Textarea";
import { useTheme } from "storefront-ui/Theme";

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
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        value={value}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
      />
      <p>Error</p>
      <Textarea
        onChange={e => setValue(e.target.value)}
        placeholder={"Notes"}
        value={value}
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
        value={value}
        disabled={true}
      />{" "}
      <br />
      <Textarea
        onChange={e => setValue2(e.target.value)}
        placeholder={"Notes"}
        value={value2}
        disabled={true}
      />
    </div>
  );
};
