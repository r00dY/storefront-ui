import React from "react";
import { Button } from "../../packages/base/button";

const Button$ = React.forwardRef((props, ref) => (
  <Button {...props} forwardedRef={ref} />
));

export { Button$ };
