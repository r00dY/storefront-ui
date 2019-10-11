import React from "react";
import { Button } from "../base/button";

const Button$ = React.forwardRef((props, ref) => (
  <Button {...props} forwardedRef={ref} />
));

export { Button$ };
