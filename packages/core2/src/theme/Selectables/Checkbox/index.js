import Checkbox from "@commerce-ui/core/selectables/Checkbox";
import Checkmark from "../Checkmark";

export default props => {
  return (
    <Checkbox
      {...props}
      sx={({ selected, disabled }) => ({
        $checkmark: <Checkmark />,
        $labelContainer: {
          pl: 8
        },
        $label: {
          font: "body",
          pt: 2
        },
        $description: {
          font: "body2",
          color: "mono700"
        },
        ...props.sx
      })}
    />
  );
};
