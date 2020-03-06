import React from "react";

import SelectInline, { useSelectInline } from "../SelectInline";
import ScrollableStack, { useScrollableStack } from "../ScrollableStack";
import { createElement, getElementSpec, splitSx } from "../index";

const defaults = {
  scrollableStack: ({ children }) => ({
    __type: ScrollableStack,
    __children: children
  })
};

export function useSelectScrollableStack(props = {}) {
  const { scrollableStack = {}, ...selectInlineProps } = props;

  let selectInlineController;
  let scrollableStackController;

  selectInlineController = useSelectInline({
    ...selectInlineProps,
    onChange: (...args) => {
      // TODO: run snap!!!
      // scrollableStackController.scrollTo(0);

      if (selectInlineProps.onChange) {
        selectInlineProps.onChange(...args);
      }
    }
  });

  scrollableStackController = useScrollableStack({
    ...scrollableStack
  });

  return {
    ...selectInlineController,
    scrollableStack: scrollableStackController
  };
}

function SelectScrollableStack(props) {
  let { sx, controller, ...restProps } = props;

  const [css, customSx] = splitSx(sx);

  if (!controller) {
    controller = useSelectScrollableStack(props);
  }

  const selectInlineController = { ...controller };
  delete selectInlineController.scrollableStack;

  const scrollableStackController = controller.scrollableStack;

  return (
    <SelectInline
      {...restProps}
      controller={selectInlineController}
      sx={{
        ...css,
        ...customSx,
        $optionsContainer: {
          __type: ScrollableStack,
          __props: {
            controller: scrollableStackController
          },
          ...customSx.$scrollableStack
        }
      }}
    />
  );
}

export default SelectScrollableStack;
