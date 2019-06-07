import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { ItemListContainerStyled } from "./styled-components";

import { getOverrides } from "../base/helpers/overrides";

const ItemList$ = props => {
  const [open, setOpen] = useState(props.openAtInit);

  const {
    items,
    overrides: {
      ListItem: ListItem,
      ItemListContainer: ItemListContainerOverride
    },
    onChange,
    value,
    ...restProps
  } = props;

  const [ItemListContainer, itemListContainerProps] = getOverrides(
    ItemListContainerOverride,
    ItemListContainerStyled
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
      <ItemListContainer {...itemListContainerProps} tabIndex={0}>
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
      </ItemListContainer>
    </div>
  );
};

ItemList$.defaultProps = {
  overrides: {},
  value: []
};

ItemList$.propTypes = {
  children: PropTypes.any,
  value: PropTypes.array
};

export default ItemList$;
