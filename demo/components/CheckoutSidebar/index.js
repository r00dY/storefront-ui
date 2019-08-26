import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FormHeader } from "../../theme/FormHeader";
import data from "../../data";
import { CheckoutLineItemRowTheme1 } from "../../theme/CheckoutLineItemRow";
import { Divider } from "../../theme/Divider";
import { FormControl } from "../../theme/FormControl";
import { StatefulInput } from "../../theme/Input";
import { Button } from "../../theme/Button";
import { Ledger } from "../../theme/Ledger";

import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
//
// let products = [
//   data.products[0],
//   data.products[1],
//   data.products[2],
//   data.products[3],
//   data.products[4]
// ];

const CheckoutSidebar = props => {
  const theme = useTheme();

  return (
    <>
      <FormHeader title={"Your Bag"} />
      <div>
        {data.checkout.lineItems.slice(0, 5).map((item, index) => (
          <div
            css={css`&:not(:last-of-type) {margin-bottom: ${
              theme.spacings.s40
            }px;)`}
          >
            <CheckoutLineItemRowTheme1
              checkoutLineItem={item}
              layout={"compact"}
              mode={"default"}
            />
          </div>
        ))}
      </div>
      {!props.hideGiftCard && (
        <>
          <Divider />
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            `}
          >
            <div
              css={css`
                flex-grow: 1;
                margin-right: ${theme.spacings.s40}px;
              `}
            >
              <FormControl label={"Gift card"}>
                <StatefulInput />
              </FormControl>
            </div>
            <Button>Apply</Button>
          </div>
        </>
      )}
      <Divider />
      <Ledger
        rows={[
          {
            label: "Subtotal",
            value: "€399"
          },
          {
            label: "Shipping",
            value: "€0"
          },
          {
            label: "Total",
            isTotal: true,
            value: "€399"
          }
        ]}
      />
    </>
  );
};

export default CheckoutSidebar;
