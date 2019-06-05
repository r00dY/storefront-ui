import { Accordion$ } from "storefront-ui/Accordion";
import { AccordionHeader } from "../AccordionHeader";

export const Accordion = props => (
  <Accordion$
    {...props}
    overrides={{
      Header: AccordionHeader
    }}
  />
);
