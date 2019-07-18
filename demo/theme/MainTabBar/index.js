import { TabBar$ } from "storefront-ui/TabBar";

import React, { useEffect } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import IconHome from "./outline-home-24px.svg";
import IconMenu from "./outline-list-24px.svg";
import IconFavs from "./outline-favorite-24px.svg";
import IconBasket from "./outline-shopping_basket-24px.svg";
import IconProfile from "./outline-account_circle-24px.svg";

export default props => {
  const theme = useTheme();
  useEffect(() => {
    console.log("mount MainTabBar");
  }, []);

  return (
    <TabBar$
      overrides={{
        Root: {
          style: `
                background: #fafafa;
            `
        },
        Tab: ({ tabData, focus }) => (
          <div
            css={css`
              height: 50px;
              &:hover {
                background: lightgrey;
              }
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;

              ${focus ? "background: lightgrey;" : ""}
            `}
          >
            <div>
              {tabData.icon === "home" && <IconHome />}
              {tabData.icon === "menu" && <IconMenu />}
              {tabData.icon === "favs" && <IconFavs />}
              {tabData.icon === "basket" && <IconBasket />}
              {tabData.icon === "profile" && <IconProfile />}
            </div>
            <div
              css={css`
                ${theme.fonts.caption.css}
              `}
            >
              {tabData.label}
            </div>
          </div>
        ),
        Line: {
          style: `height: 3px;`
        }
      }}
      gutter={5}
      {...props}
    />
  );
};
