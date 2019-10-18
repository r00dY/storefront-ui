import React, { useState } from "react";

import { getOverrides } from "../base/helpers/overrides";

import {
  ContainerStyled,
  ItemContainerStyled,
  ItemStyled,
  LabelStyled
} from "./styled-components";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * TODO: ariaLabel, ariaLabelledBy
 *
 * Things to consider
 * 1. Shopfiy (checkout) and apple picker use <fieldset> and <legend> for this component. However, what if it's a part of fieldset itself?
 * 2. role=radiogroup is used by Uber. But not sure how it behaves when another radio shows up "below".
 *
 */

function RadioGroup2(props) {
  const { label, name, items, disabled, onChange, value, overrides } = props;

  const {
    RadioMark,
    Container: ContainerOverride,
    ItemContainer: ItemContainerOverride,
    Item: ItemOverride,
    Label: LabelOverride
  } = overrides;

  const [focused, setFocused] = useState(false);

  const sharedProps = {
    focused,
    disabled
  };

  const [Container, containerProps] = getOverrides(
    ContainerOverride,
    ContainerStyled
  );
  const [ItemContainer, itemContainerProps] = getOverrides(
    ItemContainerOverride,
    ItemContainerStyled
  );
  const [Item, itemProps] = getOverrides(ItemOverride, ItemStyled);
  const [Label, labelProps] = getOverrides(LabelOverride, LabelStyled);

  const radioItems = items.map((item, i) => {
    const checked = value === item.value;

    // RadioMark
    let radioMark;
    if (RadioMark) {
      radioMark = <RadioMark {...sharedProps} checked={checked} />;
    }

    const itemSharedProps = {
      ...sharedProps,
      checked,
      item,
      index: i,
      lastIndex: items.length - 1
    };

    const label = (
      <Label {...itemSharedProps} {...labelProps}>
        {item.label}
      </Label>
    );

    return (
      <ItemContainer
        key={item.value}
        {...itemContainerProps}
        {...itemSharedProps}
      >
        <input
          css={css`
            opacity: 0;
            width: 0;
            overflow: hidden;
            margin: 0;
            padding: 0;
            position: absolute;
          `}
          type={"radio"}
          name={name}
          value={item.value}
          checked={checked}
          onChange={e => {
            onChange(e.target.value, e);
          }}
          onBlur={() => setFocused(false)}
          onFocus={() => setFocused(true)}
        />

        <Item
          {...itemSharedProps}
          {...itemProps}
          label={label}
          radioMark={radioMark}
        />
      </ItemContainer>
    );
  });

  return (
    <div>
      <fieldset
        css={css`
          border: none;
          padding: 0;
          margin: 0;
        `}
      >
        <legend>{label}</legend>
        <Container {...containerProps} {...sharedProps} items={radioItems} />
        {/*aria-labelledby={label} role="radiogroup"*/}
      </fieldset>
    </div>
  );
}

RadioGroup2.defaultProps = {
  overrides: {}
};

// class StatelessRadioGroup extends React.Component<PropsT, StatelessStateT> {
//     static defaultProps: DefaultPropsT = {
//         name: "",
//         value: "",
//         disabled: false,
//         autoFocus: false,
//         labelPlacement: "right",
//         align: "vertical",
//         isError: false,
//         required: false,
//         onChange: () => {},
//         onMouseEnter: () => {},
//         onMouseLeave: () => {},
//         onFocus: () => {},
//         onBlur: () => {},
//         overrides: {}
//     };
//
//     render() {
//         const { overrides = {} } = this.props;
//         const [RadioGroupRoot, radioGroupRootProps] = getOverrides(
//             overrides.RadioGroupRoot,
//             StyledRadioGroupRoot
//         );
//
//         if (__DEV__) {
//             if (this.props.ariaLabel || this.props.ariaLabelledBy) {
//                 // eslint-disable-next-line no-console
//                 console.error(`The props ariaLabel and ariaLabelledBy will be deprecated in the next major
//           version update. Please use aria-label and aria-labelledby instead.
//         `);
//             }
//
//             const overrideKeys = Object.keys(overrides);
//             if (overrideKeys.length && !overrideKeys.includes("RadioGroupRoot")) {
//                 // eslint-disable-next-line no-console
//                 console.warn(`All overrides beside 'RadioGroupRoot' will be deprecated in the next major version update.
//           Pass other overrides to the 'Radio' children instead.
//         `);
//             }
//         }
//
//         return (
//             <RadioGroupRoot
//                 role="radiogroup"
//                 aria-label={this.props.ariaLabel || this.props["aria-label"]}
//                 aria-labelledby={
//                     this.props.ariaLabelledBy || this.props["aria-labelledby"]
//                 }
//                 $align={this.props.align}
//                 $disabled={this.props.disabled}
//                 $isError={this.props.isError}
//                 $required={this.props.required}
//                 {...radioGroupRootProps}
//             >
//                 {React.Children.map(this.props.children, child => {
//                     if (!React.isValidElement(child)) {
//                         return null;
//                     }
//
//                     return React.cloneElement(child, {
//                         autoFocus: this.props.autoFocus,
//                         checked: this.props.value === child.props.value,
//                         disabled: this.props.disabled || child.props.disabled,
//                         isError: this.props.isError,
//                         labelPlacement: this.props.labelPlacement,
//                         name: this.props.name,
//                         onBlur: this.props.onBlur,
//                         onChange: this.props.onChange,
//                         onFocus: this.props.onFocus,
//                         onMouseEnter: this.props.onMouseEnter,
//                         onMouseLeave: this.props.onMouseLeave,
//                         // will need to remove overrides pass-through on next major version
//                         overrides: { ...this.props.overrides, ...child.props.overrides }
//                     });
//                 })}
//             </RadioGroupRoot>
//         );
//     }
// }

export default RadioGroup2;
