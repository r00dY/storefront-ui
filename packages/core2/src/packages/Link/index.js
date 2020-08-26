import React from "react";
import Button from "../Button";

let Link = React.forwardRef((props, ref) => (
  <Button {...props} ref={ref} forceLink={true} />
));

Link.styled = config => {
  const LinkComponent = Button.styled({
    ...config,
    __minimalLinkStyling: true
  });

  LinkComponent.defaultProps = {
    forceLink: true
  };

  return LinkComponent;
};

const LinkRaw = Link.styled({
  sx: {}
});

export default Link;
export { LinkRaw };

//
// export default React.forwardRef((props, ref) => (
//   <Button {...props} forceLink={true} __minimalLinkStyling={true} ref={ref} />
// ));
