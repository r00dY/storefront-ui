import React, { useState } from "react";

import Box from "../Box";

export function useAccordion(props = {}) {
  let { sections, oneAtATime = false } = props;

  // Hook uncontrolled right now

  const [isOpen, setOpen] = useState(
    sections.map(s => s.isOpenAtInit || false)
  );

  const newSections = sections.map((section, index) => {
    const open = () => {
      let newIsOpen = [...isOpen];
      //
      // if (oneAtATime) {
      //     newIsOpen = new Array(sections.length).fill(false);
      // }

      newIsOpen[index] = true;
      setOpen(newIsOpen);
    };
    const close = () => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = false;
      setOpen(newIsOpen);
    };
    const toggle = () => {
      if (isOpen[index]) {
        close();
      } else {
        open();
      }
    };

    return {
      open,
      close,
      toggle,
      buttonProps: {
        onClick: (...args) => {
          toggle();
          if (sections.onClick) {
            onClick(...args);
          }
        },
        selected: isOpen[index]
      },
      showHideProps: {
        isOpen: isOpen[index]
      }
    };
  });

  return {
    sections: newSections
  };
}

function AccordionSection(props) {}

export function Accordion(props) {
  let { children, controller, ...restProps } = props;

  children = React.Children.toArray(children);

  let sections = [];

  children.forEach((child, index) => {
    if (child.type === AccordionSection) {
      const grandChildren = React.Children.toArray(child.props.children);

      sections.push({
        button: grandChildren[0],
        showHide: grandChildren[1],
        headerAs: child.props.headerAs || "h6",
        props: child.props
      });
    }
  });

  if (!controller) {
    controller = useAccordion({
      sections: sections.map(section => ({
        ...section.props
      })),
      ...props
    });
  }

  let i = 0;

  return (
    <Box {...restProps}>
      {children.map(child => {
        if (child.type === AccordionSection) {
          const section = sections[i];
          const sectionController = controller.sections[i];
          i++;

          return (
            <Box {...section.props}>
              <Box as={section.headerAs}>
                {React.cloneElement(
                  section.button,
                  sectionController.buttonProps
                )}
              </Box>
              {React.cloneElement(
                section.showHide,
                sectionController.showHideProps
              )}
            </Box>
          );
        }

        return child;
      })}
    </Box>
  );
}

Accordion.Section = AccordionSection;

export default Accordion;
