import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ItemsListContainerStyled } from "./styled-components";

import { getOverrides } from "../base/helpers/overrides";

const ItemsList$ = props => {
  const [open, setOpen] = useState(props.openAtInit);

  const {
    items,
    overrides: {
      ListItem: ListItem,
      ItemsListContainer: ItemsListContainerOverride
    },
    onChange,
    value,
    ...restProps
  } = props;

  const [ItemsListContainer, itemListContainerProps] = getOverrides(
    ItemsListContainerOverride,
    ItemsListContainerStyled
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

  return (
    <div>
      <ItemsListContainer {...itemListContainerProps} tabIndex={0}>
        {items.map(item => {
          return (
            <div onClick={() => onItemClick(item)} key={item.id}>
              <ListItem
                focused={false}
                selected={value.includes(item)}
                item={item}
              />
            </div>
          );
        })}
      </ItemsListContainer>
    </div>
  );
};

ItemsList$.defaultProps = {
  overrides: {},
  value: []
};

ItemsList$.propTypes = {
  children: PropTypes.any,
  value: PropTypes.array
};

export default ItemsList$;
