import Button$ from "@commerce-ui/core/Button";

const Button2 = props => (
  <Button$
    {...props}
    sx={{
      $background: ({ isHovered }) => ({
        bg: "coral",
        opacity: isHovered ? 0.85 : 1,
        transition: "opacity .3s"
      }),
      $body: {
        font: "body",
        color: "white",
        p: 3
      },
      ...props.sx
    }}
  />
);

// export default Button$.create({
//     minWidth: "200px",
//     height: "50px",
//
//     $background: ({ isHovered }) => ({
//         bg: "coral",
//         opacity: isHovered ? 0.85 : 1,
//         transition: "opacity .3s"
//     }),
//     $body: {
//         font: "body",
//         color: "white",
//         p: 2
//     }
// });

export default Button2;
