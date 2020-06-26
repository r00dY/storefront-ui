import React from "react";
import Box from "@commerce-ui/core2/Box";

function FormControl({
  children,
  label,
  error,
  sx,
  _controlRef,
  asFieldset = false,
  ...restProps
}) {
  const control = React.Children.only(children);

  // Normalize error field
  error = Array.isArray(error) ? error : error ? [error] : [];
  error = error.map(e => (typeof e === "string" ? { text: e } : e));

  const shouldShowLabel = !control.type.labelInside;

  let { invalid } = restProps;

  invalid = invalid || error.length > 0;

  return (
    <Box as={asFieldset ? "fieldset" : "div"} sx={sx}>
      {shouldShowLabel && (
        <Box
          sx={{
            font: "xxs_caps",
            color: "neutral700",
            mb: "s4",
            display: "block"
          }}
          as={asFieldset ? "legend" : "label"}
        >
          {label}
        </Box>
      )}
      <Box>{React.cloneElement(control, { ...restProps, invalid })}</Box>
      {error.length > 0 && (
        <Box
          sx={{
            color: "negative",
            font: "body2",
            mt: 2,
            ml: 2,
            mb: "s4"
          }}
        >
          {error.map(e => (
            <Box as={"p"} key={e.text}>
              {e.text}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default FormControl;
