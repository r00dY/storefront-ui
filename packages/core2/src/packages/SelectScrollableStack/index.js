import React, { useEffect } from "react";

import SelectInline, { useSelectInline } from "../SelectInline";
import ScrollableStack, { useScrollableStack } from "../ScrollableStack";
import { splitSx } from "../index";

export function useSelectScrollableStack(props = {}) {
  const { scrollableStack = {}, ...selectInlineProps } = props;

  let selectInlineController;
  let scrollableStackController;

  selectInlineController = useSelectInline(selectInlineProps);

  useEffect(
    () => {
      scrollableStackController.setFloatingElementIndex(
        selectInlineController.selectedIndex
      );
    },
    [selectInlineController.selectedIndex]
  );

  scrollableStackController = useScrollableStack({
    ...scrollableStack,
    length: props.options.length,
    initialFloatingElementIndex: selectInlineController.selectedIndex
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
    controller = useSelectScrollableStack({ ...props });
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
