import { Accordion$ } from "@commerce-ui/core/Accordion";
import { AccordionHeader } from "../AccordionHeader";

export const Accordion = props => (
  <Accordion$
    {...props}
    overrides={{
      Header: AccordionHeader
    }}
  />
);
