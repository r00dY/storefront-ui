import React, { useState } from "react";

import { Button } from "storefront-ui/Button";
import Popup from "storefront-ui/Popup";
import StorefrontUIContext from "storefront-ui/StorefrontUIContext";
import { DropdownMenu, DropdownMenuItem } from "storefront-ui/DropdownMenu";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Separator = () => (
  <div
    css={css`
      width: 100%;
      height: 1px;
      background-color: lightgrey;
    `}
  />
);

const Header = props => (
  <div
    css={css`
      padding: 12px;
      text-transform: uppercase;
      color: lightgrey;
    `}
  >
    {props.children}
  </div>
);

const ListItem = ({ children, inverted, focused, selected }) => (
  <div
    css={css`
      padding: 8px;

      &:hover {
        background-color: lightgrey;
      }

      color: ${inverted ? "white" : "black"};
      background-color: ${inverted ? "black" : "transparent"};

      font-weight: ${selected ? 600 : 400};
    `}
  >
    {children}
  </div>
);

const ListItemAppearance = props => ({
  children: ({ focused, selected }) => (
    <ListItem {...props} focused={focused} selected={selected} />
  )
});

export default () => {
  const [fruit, setFruit] = useState(null);

  const items = [
    <Header key={"fruits"}>Fruits</Header>,
    <DropdownMenuItem
      key={"apple"}
      onClick={() => console.log("apple clicked")}
    >
      Apple
    </DropdownMenuItem>,
    <DropdownMenuItem key={"orange"}>Orange</DropdownMenuItem>,
    <DropdownMenuItem key={"peach"}>Peach</DropdownMenuItem>,
    <Header key={"veggies"}>Veggies</Header>,
    <DropdownMenuItem
      key={"carrot"}
      onClick={() => console.log("carrot clicked")}
    >
      Apple
    </DropdownMenuItem>,
    <DropdownMenuItem key={"tomato"}>Tomato</DropdownMenuItem>,
    <DropdownMenuItem key={"cucumber"}>Cucumber</DropdownMenuItem>,
    <DropdownMenuItem key={"potato"}>Potato</DropdownMenuItem>,
    <DropdownMenuItem key={"salad"}>Salad</DropdownMenuItem>,
    <Separator key={"sep1"} />,
    <DropdownMenuItem key={"wiki"} href={"https://www.wikipedia.org/"}>
      Link to Wikipedia
    </DropdownMenuItem>
  ];

  const trigger = <Button appearance={"test"}>Open dropdown</Button>;

  return (
    <div>
      <StorefrontUIContext.Provider
        value={{
          ListItem: {
            custom: ListItemAppearance
          },
          Popup: {
            flat: () => ({
              styles: `
                        border: 1px solid black;
                    `
            })
          },
          DropdownMenu: {
            crazy: () => ({
              size: "large",
              popup: "flat",
              body: content => (
                <div
                  css={css`
                    padding: 8px;
                    background-color: red;
                  `}
                >
                  {content}
                </div>
              ),
              item: "custom"
            })
          }
        }}
      >
        <p>Standard (links and buttons)</p>
        <DropdownMenu trigger={trigger}>
          <DropdownMenuItem onClick={() => console.log("apple clicked")}>
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("orange clicked")}>
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("peach clicked")}>
            Peach
          </DropdownMenuItem>
          <DropdownMenuItem href={"https://wikipedia.org"}>
            Wikipedia
          </DropdownMenuItem>
        </DropdownMenu>

        <p>
          Styling <code>DropdownMenuItem</code> via render props
        </p>
        <DropdownMenu trigger={trigger}>
          <DropdownMenuItem onClick={() => console.log("apple clicked")}>
            {({ focused }) => <ListItem>Apple</ListItem>}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("orange clicked")}>
            {({ focused }) => <ListItem>Orange</ListItem>}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("peach clicked")}>
            {({ focused }) => <ListItem>Peach</ListItem>}
          </DropdownMenuItem>
          <DropdownMenuItem href={"https://wikipedia.org"}>
            {({ focused }) => <ListItem>Wikipedia</ListItem>}
          </DropdownMenuItem>
        </DropdownMenu>

        <p>We can use registered ListItem elements</p>
        <DropdownMenu trigger={trigger}>
          <DropdownMenuItem
            onClick={() => console.log("apple clicked")}
            appearance={"custom"}
          >
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("orange clicked")}
            appearance={"custom"}
            inverted={true}
          >
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("peach clicked")}
            appearance={"custom"}
          >
            Peach
          </DropdownMenuItem>
          <DropdownMenuItem
            href={"https://wikipedia.org"}
            appearance={"custom"}
          >
            Wikipedia
          </DropdownMenuItem>
        </DropdownMenu>

        <p>
          We can add custom elements that are not items and are not clickable
        </p>
        <DropdownMenu trigger={trigger}>
          <Header key={"fruits"}>Fruits</Header>
          <DropdownMenuItem
            onClick={() => console.log("apple clicked")}
            appearance={"custom"}
          >
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("orange clicked")}
            appearance={"custom"}
          >
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("peach clicked")}
            appearance={"custom"}
          >
            Peach
          </DropdownMenuItem>
          <Header key={"veggies"}>Veggies</Header>
          <DropdownMenuItem appearance={"custom"}>Apple</DropdownMenuItem>
          <DropdownMenuItem appearance={"custom"}>Tomato</DropdownMenuItem>
          <DropdownMenuItem appearance={"custom"}>Cucumber</DropdownMenuItem>
          <DropdownMenuItem appearance={"custom"}>Potato</DropdownMenuItem>
          <Separator />
          <DropdownMenuItem
            href={"https://wikipedia.org"}
            appearance={"custom"}
          >
            Wikipedia
          </DropdownMenuItem>
        </DropdownMenu>

        <p>Custom body for dropdown (padding + background)</p>
        <DropdownMenu
          trigger={trigger}
          body={content => (
            <div
              css={css`
                padding: 8px;
                background-color: red;
              `}
            >
              {content}
            </div>
          )}
        >
          <DropdownMenuItem
            onClick={() => console.log("apple clicked")}
            appearance={"custom"}
          >
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("orange clicked")}
            appearance={"custom"}
          >
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("peach clicked")}
            appearance={"custom"}
          >
            Peach
          </DropdownMenuItem>
        </DropdownMenu>

        <p>
          Custom body for dropdown (padding + background) + custom popup (no
          shadow, border)
        </p>
        <DropdownMenu
          trigger={trigger}
          body={content => (
            <div
              css={css`
                padding: 8px;
                background-color: red;
              `}
            >
              {content}
            </div>
          )}
          popup={"flat"}
        >
          <DropdownMenuItem
            onClick={() => console.log("apple clicked")}
            appearance={"custom"}
          >
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("orange clicked")}
            appearance={"custom"}
          >
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => console.log("peach clicked")}
            appearance={"custom"}
          >
            Peach
          </DropdownMenuItem>
        </DropdownMenu>

        <p>
          You can register entire <code>DropdownMenu</code> appearance, its
          body, popup settings and default <code>DropdownMenuItem</code>{" "}
          appearance
        </p>

        <DropdownMenu trigger={trigger} appearance={"crazy"}>
          <DropdownMenuItem onClick={() => console.log("apple clicked")}>
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("orange clicked")}>
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("peach clicked")}>
            Peach
          </DropdownMenuItem>
          <DropdownMenuItem href={"https://wikipedia.org"}>
            Wikipedia
          </DropdownMenuItem>
        </DropdownMenu>

        <p>Selecting</p>

        <DropdownMenu
          trigger={
            <Button appearance={"test"}>{fruit ? fruit : "Pick fruit"}</Button>
          }
          appearance={"crazy"}
        >
          <DropdownMenuItem
            onClick={() => setFruit("apple")}
            selected={fruit === "apple"}
          >
            Apple
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFruit("orange")}
            selected={fruit === "orange"}
          >
            Orange
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setFruit("peach")}
            selected={fruit === "peach"}
          >
            Peach
          </DropdownMenuItem>
          <DropdownMenuItem href={"https://wikipedia.org"}>
            Wikipedia
          </DropdownMenuItem>
        </DropdownMenu>
      </StorefrontUIContext.Provider>
    </div>
  );
};
