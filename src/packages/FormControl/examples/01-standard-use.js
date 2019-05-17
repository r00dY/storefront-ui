import React, { useState } from "react";
import { FormControl } from "storefront-ui/FormControl";
import { StatefulCheckbox } from "storefront-ui/Checkbox";
import { StatefulInput } from "storefront-ui/Input";
import { StatefulTextarea } from "storefront-ui/Textarea";
import { StatefulRadioGroup, Radio } from "storefront-ui/Radio";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  return (
    <div>
      <FormControl label="Input label" caption="Input caption">
        <StatefulInput />
      </FormControl>
      <FormControl label="Textarea label" caption="Textarea caption">
        <StatefulTextarea />
      </FormControl>
      <FormControl label="Checkbox label" caption="Checkbox caption">
        <StatefulCheckbox>Checkbox control</StatefulCheckbox>
      </FormControl>
      <FormControl label="RadioGroup label" caption="RadioGroup caption">
        <StatefulRadioGroup>
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="blue">Blue</Radio>
        </StatefulRadioGroup>
      </FormControl>
    </div>
  );
};
