import PropTypes from "prop-types";
import React, { useState } from "react";
import { ItemListContainerStyled } from "./styled-components";
import { ToggleContainerStyled } from "./styled-components";

import { getOverrides } from "../base/helpers/overrides";

const ItemListAccordion$ = props => {
  const [open, setOpen] = useState(props.openAtInit);

  const {
    items,
    overrides: {
      ToggleButton: ToggleButton,
      ListItem: ListItem,
      ItemListContainer: ItemListContainerOverride,
      ToggleContainer: ToggleContainerOverride
    },
    onChange,
    value,
    ...restProps
  } = props;

  const onClick = () => {
    setOpen(!open);
  };

  let minAmountToShowAccordion =
    props.minAmountToShowAccordion || props.amountOfAlwaysVisible + 1;

  let itemsVisible = [];
  let itemsInAccordion = [];

  if (items.length < minAmountToShowAccordion) {
    itemsVisible = items;
  } else {
    itemsVisible = items.slice(0, props.amountOfAlwaysVisible);
    itemsInAccordion = items.slice(props.amountOfAlwaysVisible);
  }

  const [ItemListContainer, itemListContainerProps] = getOverrides(
    ItemListContainerOverride,
    ItemListContainerStyled
  );
  const [ToggleContainer, toggleContainerProps] = getOverrides(
    ToggleContainerOverride,
    ToggleContainerStyled
  );

  const onItemClick = item => {
    if (onChange) {
      if (value.includes(item)) {
        onChange(value.filter(x => x !== item));
      } else {
        onChange([...value, item]);
      }
    }
  };

  const renderItems = items => (
    <>
      {items.map(item => {
        return (
          <div onClick={() => onItemClick(item)}>
            <ListItem
              key={item.id}
              focused={false}
              selected={value.includes(item)}
              item={item}
            />
          </div>
        );
      })}
    </>
  );

  return (
    <div className={props.className} style={props.style}>
      <ItemListContainer {...itemListContainerProps} tabIndex={0}>
        {renderItems(itemsVisible)}
        {open && renderItems(itemsInAccordion)}
      </ItemListContainer>

      <ToggleContainer {...toggleContainerProps}>
        {itemsInAccordion.length > 0 && (
          <ToggleButton open={open} onClick={onClick} />
        )}
      </ToggleContainer>
    </div>
  );
};

ItemListAccordion$.defaultProps = {
  openAtInit: false,
  amountOfAlwaysVisible: 5,
  overrides: {},
  value: []
};

ItemListAccordion$.propTypes = {
  openAtInit: PropTypes.bool,
  amountOfAlwaysVisible: PropTypes.number.isRequired, // might be higher if `minAmountToShowAccordion` is higher
  minAmountToShowAccordion: PropTypes.number,
  children: PropTypes.any,
  value: PropTypes.array
};

export default ItemListAccordion$;
