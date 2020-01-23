/** @jsx jsx */
import React, { useState, useEffect, useRef } from "react";
import { jsx, rs } from "@commerce-ui/core";
import Menu, { useMenu, MenuButton } from "@commerce-ui/core/Menu";

import Button from "../Button/Button";
import Color from "../Selectables/Color";

const colors = [
  { color: "red", value: "red" },
  { color: "blue", value: "blue" },
  { color: "yellow", value: "yellow" },
  { color: "green", value: "green" },
  { color: "magenta", value: "magenta" },
  { color: "purple", value: "purple" }
];

const MenuWithButton = ({ children, options, ...restProps }) => {
  const { buttonProps, menuProps } = useMenu({ options });

  return (
    <div>
      <Button {...buttonProps}>open</Button>

      <Menu {...menuProps} {...restProps}>
        {params => (
          <div sx={{ border: "1px solid black", bg: "white", p: 2 }}>
            {children(params)}
          </div>
        )}
      </Menu>
    </div>
  );
};

export const unstyled = () => (
  <div>
    <MenuWithButton
      config={{
        xs: {
          mode: "slide-from-bottom",
          height: "auto"
        },
        md: {
          anchored: true
        }
      }}
      options={[
        { color: "red", value: "red" },
        { color: "blue", value: "blue" },
        { color: "yellow", value: "yellow" },
        { color: "green", value: "green" },
        { color: "magenta", value: "magenta" },
        { color: "purple", value: "purple" }
      ]}
    >
      {({ anchored, options }) => (
        <>
          {options.map(option => (
            <div sx={{ mb: 1 }} key={option.color}>
              <Color
                {...option.itemProps}
                color={option.color}
                label={option.color}
              />
            </div>
          ))}
        </>
      )}
    </MenuWithButton>

    <br />
    <br />

    <MenuButton
      button={<Button>open</Button>}
      menu={
        <Menu
          config={{
            xs: {
              mode: "slide-from-bottom",
              height: "auto"
            },
            md: {
              anchored: true
            }
          }}
        >
          {({ anchored, options }) => (
            <>
              {options.map(option => (
                <div sx={{ mb: 1 }} key={option.color}>
                  <Color
                    {...option.itemProps}
                    color={option.color}
                    label={option.color}
                  />
                </div>
              ))}
            </>
          )}
        </Menu>
      }
      options={colors}
    />
  </div>
);

export default {
  title: "Menu"
};
