import Checkmark from "@commerce-ui/core/selectables/Checkmark";

export default props => {
  return (
    <Checkmark
      {...props}
      sx={({ selected, disabled }) => ({
        bg: disabled ? "mono300" : selected ? "primary" : "transparent",
        transition: "all .1s",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "mono300",
        borderRadius: 4,
        $icon: {
          color: disabled ? "mono500" : "white"
        },
        ...props.sx
      })}
    />
  );
};
