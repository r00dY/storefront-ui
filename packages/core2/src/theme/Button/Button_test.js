import { ButtonText$ } from "@commerce-ui/core/Button";
import Spinner from "../Spinner";
import { jsx, splitSx } from "@commerce-ui/core";

const styles = {
  standard: {
    $css: {
      minHeight: "50px"
    },

    $foreground: {
      pl: 3,
      pr: 3,
      pt: 2,
      pb: 2,
      font: "body2"
    }
  },
  large: {
    $css: {
      minHeight: "60px"
    },
    $foreground: {
      pl: 4,
      pr: 4,
      pt: 2,
      pb: 2,
      font: "body"
    }
  }
};

const Button = props => {
  return (
    <ButtonText$
      {...props}
      sx={{
        minHeight: "50px",
        ...props.sx,

        $foreground: ({ disabled }) => ({
          pl: 3,
          pr: 3,
          pt: 2,
          pb: 2,
          font: "body2",
          color: disabled ? "mono500" : "black",
          textAlign: "center"
        }),
        $background: ({ isHovered, disabled }) => ({
          bg: disabled ? "mono300" : "mono200",
          opacity: isHovered ? 0.75 : 1,
          transition: "opacity .1s",
          borderRadius: 6
        }),
        $loader: <Spinner />,
        $startEnhancerContainer: {
          mr: 2
        },
        $endEnhancerContainer: {
          ml: 2
        }
      }}
    />
  );
};

const test = () => {
  return (
    <>
      <Counter
        sx={{
          $buttonAdd: (
            <ButtonIconSmall size="small">
              <IconPlus />
            </ButtonIconSmall>
          ),
          $buttonSubtract: (
            <ButtonIconSmall size="small">
              <IconMinus />
            </ButtonIconSmall>
          )
          // ...remaining config
        }}
        value={quantity}
        onChange={val => {
          setQuantity(val);
        }}
      />

      <Counter value={quantity} onChange={setQuantity}>
        <Box>
          <Text>Heading</Text>
          <ButtonIconSmall slot={"button-add"}>
            <IconPlus />
          </ButtonIconSmall>
        </Box>
        <Box>
          <Box>
            <ButtonIconSmall slot={"button-subtract"}>
              <IconPlus />
            </ButtonIconSmall>
          </Box>
        </Box>
      </Counter>
    </>
  );
};

export default Button;
