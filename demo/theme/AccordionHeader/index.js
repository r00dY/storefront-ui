import { AccordionHeader$ } from "storefront-ui/AccordionHeader";

import IconExpandMore from "./baseline-expand_more-24px.svg";
import IconExpandLess from "./baseline-expand_less-24px.svg";
const AccordionHeader = props => (
  <AccordionHeader$
    {...props}
    overrides={{
      Title: {
        style: ({ $theme }) => `${$theme.fonts.body1.css}`
      },
      Root: {
        style: ({ $theme }) => `border-bottom: none; height: 50px; `
      },
      Toggle: ({ $open }) => ($open ? <IconExpandLess /> : <IconExpandMore />)
    }}
  />
);

export { AccordionHeader };
