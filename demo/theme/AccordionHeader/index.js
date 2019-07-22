import { AccordionHeader$ } from "storefront-ui/AccordionHeader";

const AccordionHeader = props => (
  <AccordionHeader$
    {...props}
    overrides={{
      Title: {
        style: ({ $theme }) => `${$theme.fonts.body1.css}`
      },
      Root: {
        style: ({ $theme }) =>
          ` border-top: 1px solid ${
            $theme.colors.mono300.css
          }; border-bottom: none; height: 30px;`
      }
    }}
  />
);

export { AccordionHeader };
