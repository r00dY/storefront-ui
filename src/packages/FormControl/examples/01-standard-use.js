import React, { useState } from "react";
import { FormControl } from "storefront-ui/FormControl";
import { StatefulCheckbox } from "storefront-ui/Checkbox";
import { StatefulInput } from "storefront-ui/Input";
import { StatefulTextarea } from "storefront-ui/Textarea";
import { StatefulRadioGroup, Radio } from "storefront-ui/Radio";

import { ThemeProvider } from "storefront-ui/Theme";

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

      <ThemeProvider
        theme={{
          FormControl: {
            default: {
              overrides: {
                Label: {
                  style: ({ $theme }) => `
                                    ${$theme.fonts.h6.css}
                                    color: ${$theme.colors.primary700.css};
                                `
                }
              }
            }
          }
        }}
      >
        <p>Themed</p>

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
      </ThemeProvider>
      {/*<br/>*/}
      {/*<br/>*/}

      {/*<div css={css`*/}
      {/*position: relative;*/}
      {/*width: 200px;*/}
      {/*height: 50px;*/}
      {/*background-color: red;*/}
      {/*`}>*/}
      {/*<select id={"dupa"} css={css`*/}
      {/*appearance: none;*/}
      {/*border: none;*/}
      {/*outline: none;*/}
      {/*background-color: transparent;*/}
      {/*width: 100%;*/}
      {/*height: 100%;*/}
      {/*padding-left: 12px;*/}
      {/*`} required={false}>*/}
      {/*<option disabled>Zwierzątko</option>*/}
      {/*<option>Pies</option>*/}
      {/*<option>Kot</option>*/}
      {/*<option>Ryba</option>*/}
      {/*<option>Świnia</option>*/}
      {/*<option>Świnka morska</option>*/}
      {/*</select>*/}
      {/*</div>*/}
    </div>
  );
};
