const formStyles = {
  $root: ({ focused, disabled, invalid }) => ({
    height: "48px",
    border: "1px solid",
    borderColor: invalid ? "red" : focused ? "mono500" : "transparent",
    borderRadius: "10px",
    bg: disabled ? "lightgrey" : "#f7f7f7"
  }),
  $input: ({ empty }) => ({
    pr: "10px",
    pl: "10px",
    font: "body2",
    pt: empty ? 0 : "16px",
    transition: "padding .2s ease-out"
  }),
  $leftEnhancersContainer: {
    $gutter: "8px",
    pl: "16px",
    font: "body2"
  },
  $rightEnhancersContainer: {
    $gutter: "8px",
    pr: "16px",
    font: "body2"
  },
  $label: ({ empty }) => ({
    top: "50%",
    transform: empty ? "translateY(-12px)" : "translateY(-18px)",
    opacity: empty ? 0 : 1,
    transition: "all .2s ease-out",
    left: "10px",
    font: "body2",
    fontSize: "13px",
    color: "mono700"
  }),
  $labelInside: true
};

export default formStyles;
