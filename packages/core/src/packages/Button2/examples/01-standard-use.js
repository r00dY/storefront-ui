/** @jsx jsx */

import React from "react";
import {
  ButtonRaw,
  Button,
  ThreeButtons,
  ThreeButtons2,
  ButtonSuper
} from "@commerce-ui/core/Button2";
import { Box } from "@commerce-ui/core/Box";
import { jsx } from "@commerce-ui/core";

const ButtonStyled = ({ color = "yellow", ...props }) => (
  <Button
    background={({ isHovered }) => ({
      css: { backgroundColor: color, opacity: isHovered ? 0.5 : 1 }
    })}
    content={({ children }) => ({
      css: {
        p: 2
      },
      children: <span>{children} ty chuju</span>
    })}
    {...props}
  />
);

export default () => {
  return (
    <div>
      <p>Standard button</p>
      <ButtonRaw>Raw button content</ButtonRaw>

      <p>Standard button, color overriden</p>
      <ButtonRaw
        css={{
          color: "red"
        }}
      >
        Raw button with red color text
      </ButtonRaw>

      <p>Standard button, disabled</p>
      <ButtonRaw
        css={{
          color: "red"
        }}
        disabled={true}
      >
        Raw button with red color text and disabled
      </ButtonRaw>

      <p>Standard button, onClick</p>
      <ButtonRaw
        css={{
          color: "red"
        }}
        onClick={e => {
          console.log("clicked!");
        }}
      >
        Raw button with red color text
      </ButtonRaw>

      <p>Standard button, color overriden with value from a theme</p>
      <ButtonRaw
        css={{
          color: "primary",
          background: "mono500",
          p: 10
        }}
      >
        Raw button with colors from a theme
      </ButtonRaw>

      <p>Standard button</p>
      <Button>Dupa dupa dupa</Button>

      <p>Standard button</p>
      <div
        css={{
          minWidth: "300px",
          height: "200px"
        }}
      >
        <Button fitWidth fitHeight>
          Dupa dupa dupa
        </Button>
      </div>

      <p>Styled button background</p>
      <Button
        background={{
          css: { backgroundColor: "yellow" },
          children: <div>Kurwa mać</div>
        }}
      >
        Dupa dupa dupa
      </Button>

      <p>Styled button background</p>
      <Button
        background={({ isHovered }) => ({
          css: { backgroundColor: "yellow", opacity: isHovered ? 0.5 : 1 }
        })}
        content={{
          css: {
            p: 2
          }
        }}
      >
        Dupa dupa dupa
      </Button>

      <p>Styled button custom children</p>
      <Button
        background={({ isHovered }) => ({
          css: { backgroundColor: "yellow", opacity: isHovered ? 0.5 : 1 }
        })}
        content={({ children }) => ({
          css: {
            p: 2
          },
          children: <span>{children} ty chuju</span>
        })}
      >
        Dupa dupa dupa
      </Button>

      <p>Three buttons</p>
      <ThreeButtons />

      <p>Three buttons overrides</p>
      <ThreeButtons
        button1={({ buttonProps }) => (
          <Button
            background={({ isHovered }) => ({
              css: { backgroundColor: "yellow", opacity: isHovered ? 0.5 : 1 }
            })}
            content={({ children }) => ({
              css: {
                p: 2
              },
              children: <span>{children} ty chuju</span>
            })}
            {...buttonProps}
          />
        )}
      />

      <p>Three buttons with ButtonStyled</p>
      <ThreeButtons
        button1={({ buttonProps }) => <ButtonStyled {...buttonProps} />}
      />

      {/* above syntax is bad because it's not "overrideable", we can't add extra prop contextually without changing everything */}

      <p>Three buttons 2, new API</p>
      <ThreeButtons2 />

      <p>Three buttons overrides</p>
      <ThreeButtons2
        button1={({ label }) => ({
          props: {
            background: ({ isHovered }) => ({
              css: { backgroundColor: "yellow", opacity: isHovered ? 0.5 : 1 }
            }),
            content: {
              css: {
                p: 2
              },
              children: <span>--- {label} ---</span>
            }
          }
        })}
      />

      <p>Three buttons overrides</p>
      <ThreeButtons2
        button1={({ label }) => ({
          type: ButtonStyled,
          props: {
            color: "red"
          },
          children: <span>--- {label} ---</span>
        })}
      />

      <p>ButtonSuper</p>
      <ButtonSuper startEnhancer={"[A]"} endEnhancer={"[B]"}>
        Dupa
      </ButtonSuper>
    </div>
  );
};
