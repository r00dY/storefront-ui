import React, { useState } from "react";
import { FormControl } from "../../../../components/FormControl";
import { StatefulCheckbox } from "../../../../components/Checkbox";
import { StatefulInput } from "../../../../components/Input";
import { StatefulTextarea } from "../../../../components/Textarea";
import { StatefulRadioGroup, Radio } from "../../../../components/Radio";

import { FormControl$ } from "storefront-ui/FormControl";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default () => {
  const FormControlStyled = props => (
    <FormControl$
      {...props}
      overrides={{
        Label: {
          style: ({ $theme }) => `
                            ${$theme.fonts.h6.css}
                            color: ${$theme.colors.primary700.css};
                        `
        }
      }}
    />
  );

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

      <p>Themed</p>

      <FormControlStyled label="Input label" caption="Input caption">
        <StatefulInput />
      </FormControlStyled>
      <FormControlStyled label="Textarea label" caption="Textarea caption">
        <StatefulTextarea />
      </FormControlStyled>
      <FormControlStyled label="Checkbox label" caption="Checkbox caption">
        <StatefulCheckbox>Checkbox control</StatefulCheckbox>
      </FormControlStyled>
      <FormControlStyled label="RadioGroup label" caption="RadioGroup caption">
        <StatefulRadioGroup>
          <Radio value="red">Red</Radio>
          <Radio value="green">Green</Radio>
          <Radio value="blue">Blue</Radio>
        </StatefulRadioGroup>
      </FormControlStyled>

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
