import { TabBar$ } from "storefront-ui/TabBar";

import React, { useEffect } from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "storefront-ui/Theme";

import IconHome from "../../svg/home.svg";
import IconMenu from "../../svg/menu.svg";
import IconFavs from "../../svg/heart.svg";
import IconBasket from "../../svg/cart.svg";
import IconProfile from "../../svg/account.svg";

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
                background: white;
                border-top: 1px solid ${theme.colors.mono200.css};
            `
        },
        Tab: ({ tabData, active }) => (
          <div
            css={css`
              height: 50px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: ${active
                ? theme.colors.primary.css
                : theme.colors.mono600.css};
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
                ${theme.fonts.caption2.css}
              `}
            >
              {tabData.label}
            </div>
          </div>
        ),
        Line: {
          style: `height: 2px; background: ${theme.colors.primary.css};`
        }
      }}
      gutter={5}
      {...props}
    />
  );
};
