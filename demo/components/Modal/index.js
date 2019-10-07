import React from "react";
import { Modal$ } from "storefront-ui/Modal";
import { ModalHeader } from "../ModalHeader";

export const Modal = props => {
  const { header, footer } = props;

  let headerOverride;

  if (typeof header === "string") {
    headerOverride = ({ close }) => (
      <ModalHeader title={header} onRequestClose={close} />
    );
  } else if (typeof header === "function") {
    headerOverride = header;
  }

  return (
    <Modal$
      overrides={{
        Header: headerOverride,
        Footer: footer
      }}
      {...props}
    />
  );
};
