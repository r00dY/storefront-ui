import React, { useContext } from "react";

import { Input as InputBase } from "baseui/input";
// import {FormControl as FormControlBase} from "baseui/form-control";

import { Grid, GridItem } from "storefront-ui/Grid";

import InputRaw from "../Input";
import FormControl from "../FormControl";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styledEmotion from "@emotion/styled";

import { ThemeProvider } from "../../base/styles/index";
import { LightTheme } from "../../base/themes/index.js";
import { styled } from "../../base/styles";

console.log(LightTheme);

import { Input } from "../../base/input";
import { StatefulInput } from "../../base/input";

const Test = styled("h1", ({ $theme }) => ({
  color: $theme.colors.primary500,
  paddingTop: "10px",
  padding: "30px",
  border: "1px solid black"
}));

const Test2 = styledEmotion.div`
  font-size: 20px;
  border: 1px solid black;
  padding-top: 50px;
  padding: 20px;
`;

export default class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <ThemeProvider theme={LightTheme}>
        <div>
          <h1>Base</h1>
          <Test $style={{ paddingTop: "50px" }}>Themed text</Test>
          <Test2
            css={css`
              padding-top: 50px;
            `}
          >
            Hej
          </Test2>
          <p>Standard</p>
          Standard placeholder: <Input placeholder={"First name"} />
          <br />
          Standard value: <Input placeholder={"First name"} value={"dupa"} />
          <p>Error</p>
          Standard placeholder:{" "}
          <Input placeholder={"First name"} error={true} />
          <br />
          Standard value:{" "}
          <Input placeholder={"First name"} value={"dupa"} error={true} />
          <p>Disabled</p>
          Standard placeholder:{" "}
          <Input placeholder={"First name"} disabled={true} />
          <br />
          Standard value:{" "}
          <Input placeholder={"First name"} value={"dupa"} disabled={true} />
          <br />
          <p>Overrides</p>
          <Input
            placeholder={"First name"}
            value={"dupa"}
            overrides={{
              InputContainer: {
                style: ({ $isFocused }) => ({
                  boxShadow: "none",
                  borderColor: $isFocused ? "coral" : "green"
                })
              }
            }}
          />
          <br />
          <Input
            placeholder={"First name"}
            value={"dupa"}
            overrides={{
              InputContainer: {
                style: `
                    box-shadow: none;
                    border-color: orange;
                    padding-top: 10px;
                  `
              }
            }}
          />
          <br />
          <h2>Base orignal</h2>
          <InputBase
            placeholder={"First name"}
            value={"dupa"}
            overrides={{
              InputContainer: {
                style: ({ $isFocused }) => ({
                  boxShadow: "none",
                  borderColor: $isFocused ? "coral" : "green"
                })
              },
              Root: {
                style: {
                  padding: "30px"
                }
              }
            }}
          />
          {/*<h1>Base</h1>*/}
          {/*<p>Standard</p>*/}
          {/*<div>*/}
          {/*<FormControlBase label={"First name"} caption={"siema"} overrides={{*/}
          {/*Label: {*/}
          {/*style: {*/}
          {/*color: "blue",*/}
          {/*}*/}
          {/*}*/}
          {/*}}>*/}
          {/*<Input placeholder={"First name"}/>*/}
          {/*</FormControlBase>*/}
          {/*<Input placeholder={"First name"} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<p>Disabled</p>*/}
          {/*<div>*/}
          {/*<Input placeholder={"First name"} disabled={true} /><br/>*/}
          {/*<Input placeholder={"First name"} disabled={true} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<p>Error</p>*/}
          {/*<div>*/}
          {/*<Input placeholder={"First name"} error={true} /><br/>*/}
          {/*<Input placeholder={"First name"} error={true} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<h2>Nasz</h2>*/}
          {/*<p>Standard</p>*/}
          {/*<div>*/}
          {/*<InputRaw placeholder={"First name"}/><br/>*/}
          {/*<InputRaw placeholder={"First name"} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<p>Disabled</p>*/}
          {/*<div>*/}
          {/*<InputRaw placeholder={"First name"} disabled={true}/><br/>*/}
          {/*<InputRaw placeholder={"First name"} disabled={true} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<p>Error</p>*/}
          {/*<div>*/}
          {/*<InputRaw placeholder={"First name"} error={true}/><br/>*/}
          {/*<InputRaw placeholder={"First name"} error={true} value={"Andrzej"}/>*/}
          {/*</div>*/}
          {/*<br/>*/}
          {/*<br/>*/}
          {/*<h2>FormControl</h2>*/}
          {/*<Grid colNumber={12} css={css`width: 700px;`}>*/}
          {/*<GridItem params={6}>*/}
          {/*<FormControl label={"First name"} caption={"This is your beautiful lovely first name"}>*/}
          {/*<InputRaw placeholder={"Joe"}/>*/}
          {/*</FormControl>*/}
          {/*</GridItem>*/}
          {/*<GridItem params={6}>*/}
          {/*<FormControl label={"Last name"}>*/}
          {/*<InputRaw placeholder={"Doe"}/>*/}
          {/*</FormControl>*/}
          {/*</GridItem>*/}
          {/*<GridItem params={12} css={css`margin-top: 16px;`}>*/}
          {/*<FormControl label={"Street"}>*/}
          {/*<InputRaw placeholder={"Słonecznikowa"}/>*/}
          {/*</FormControl>*/}
          {/*</GridItem>*/}
          {/*</Grid>*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<br />*/}
          {/*<InputRaw*/}
          {/*placeholder={"some text"}*/}
          {/*error={true}*/}
          {/*styles={{*/}
          {/*Input: {*/}
          {/*// styles and props only*/}
          {/*styles: ({error, dupa = 10}) => css`*/}
          {/*border: 1px solid ${error ? "red" : "black"};*/}
          {/*color: ${error ? "red" : "black"};*/}
          {/*font-size: ${dupa}px;*/}
          {/*`*/}
          {/*},*/}
          {/*Root: {*/}
          {/*// component (input) or styles+props*/}
          {/*styles: css`*/}
          {/*background-color: blue;*/}
          {/*padding: 20px;*/}
          {/*`,*/}
          {/*}*/}
          {/*}}*/}
          {/*dupa={40}*/}
          {/*/>*/}
          {/*<InputRaw*/}
          {/*placeholder={"some text"}*/}
          {/*type={"text"}*/}
          {/*styles={{*/}
          {/*Input: {*/}
          {/*// styles and props only*/}
          {/*styles: ({error}) => css`*/}
          {/*border: 1px solid ${error ? "red" : "black"};*/}
          {/*color: ${error ? "red" : "black"};*/}
          {/*`*/}
          {/*},*/}
          {/*Root: {*/}
          {/*// component (input) or styles+props*/}
          {/*component: ({}, input) => (*/}
          {/*<div>*/}
          {/*<div>*/}
          {/*<div>{input}</div>*/}
          {/*</div>*/}
          {/*</div>*/}
          {/*)*/}
          {/*}*/}
          {/*}}*/}
          {/*/>*/}
        </div>
      </ThemeProvider>
    );
  }
}
