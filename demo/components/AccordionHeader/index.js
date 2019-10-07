import { AccordionHeader$ } from "@commerce-ui/core/AccordionHeader";

import IconExpandMore from "../../svg/expand_more.svg";
import IconExpandLess from "../../svg/expand_less.svg";

const AccordionHeader = props => (
  <AccordionHeader$
    {...props}
    overrides={{
      Title: {
        style: ({ $theme }) => `${$theme.fonts.body1.css} flex-grow: 1;`
      },
      Root: {
        style: ({ $theme }) => `
        border-bottom: none;
         height: 50px;
         padding: 0;
         &:hover { color: ${$theme.colors.mono600.css};
         transition: all 150ms;
         }`
      },
      Toggle: ({ $open }) => ($open ? <IconExpandLess /> : <IconExpandMore />)
    }}
  />
);

export { AccordionHeader };
