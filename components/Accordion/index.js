import { Accordion as Accordion_orig } from "storefront-ui/Accordion";
import { AccordionHeader } from "../AccordionHeader";

export const Accordion = props => (
  <Accordion_orig
    {...props}
    overrides={{
      Header: AccordionHeader
    }}
  />
);
