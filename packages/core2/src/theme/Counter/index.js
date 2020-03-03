/** @jsx jsx */
import Counter$ from "@commerce-ui/core/Counter";
import { jsx, splitSx } from "@commerce-ui/core";
import { Button$ } from "@commerce-ui/core/Button";
import ButtonMinimal from "../Button/ButtonMinimal";

const Counter = props => {
  const [css, customSx] = splitSx(props.sx);

  return (
    <Counter$
      {...props}
      sx={{
        ...css,
        $root: ({ focused }) => ({
          border: "1px solid black",
          borderColor: focused ? "black" : "mono300"
        }),
        $buttonIncrease: {
          __type: ButtonMinimal,
          width: "44px",
          height: "44px",
          $foreground: {
            fontSize: "20px",
            lineHeight: 1,
            textAlign: "center"
          }
        },
        $buttonDecrease: {
          __type: ButtonMinimal,
          width: "44px",
          height: "44px",
          $foreground: {
            fontSize: "20px",
            lineHeight: 1,
            textAlign: "center"
          }
        },
        $input: {
          font: "body",
          width: "44px"
        },
        $select: {
          $control: {
            font: "body"
          }
        }
      }}
    />
  );
};

export default Counter;
