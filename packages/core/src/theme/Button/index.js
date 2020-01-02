import Button$ from "@commerce-ui/core/Button2";

const Button = props => (
  <Button$
    {...props}
    overrides={{
      content: ({ disabled }) => ({
        css: {
          p: 3,
          overflow: "hidden",
          // whiteSpace: "nowrap",
          // textOverflow: "ellipsis",
          // maxWidth: "400px",
          color: disabled ? "mono500" : "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      }),
      background: ({ isHovered, disabled }) => ({
        css: {
          bg: disabled ? "mono300" : "mono200",
          opacity: isHovered ? 0.75 : 1,
          transition: "opacity .1s"
        }
      })
    }}
  />
);

export default Button;
