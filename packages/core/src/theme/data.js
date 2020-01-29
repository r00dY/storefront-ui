const ringOptions = [
  {
    name: "Style",
    values: [
      {
        name: "Heritage"
      },
      {
        name: "Balance"
      }
    ]
  },
  {
    name: "Color",
    values: [
      {
        name: "Triumph Mustard",
        color: "#9F8F37"
      },
      {
        name: "Soft mineral",
        color: "#8EB0B1"
      },
      {
        name: "Sand light",
        color: "#EFEEE9"
      },
      {
        name: "Graphite",
        color: "#55544F"
      },
      {
        name: "Lava red",
        color: "#C24225"
      },
      {
        name: "Sand",
        color: "#DAD5C1"
      },
      {
        name: "Green",
        color: "#6CAD85"
      },
      {
        name: "Granite",
        color: "#8E8D8B"
      },
      {
        name: "Coal",
        color: "#312D2A"
      },
      {
        name: "Navy",
        color: "#3D5476"
      }
    ]
  },
  {
    name: "Size",
    values: [
      {
        name: "US 8"
      },
      {
        name: "US 9"
      },
      {
        name: "US 10"
      },
      {
        name: "US 11"
      },
      {
        name: "US 12"
      }
    ]
  }
];

const variants = [];

ringOptions[0].values.forEach((style, i1) => {
  ringOptions[1].values.forEach((color, i2) => {
    // if (color.name === "Stealth" && style.name === "Balance") {
    //   return;
    // }
    //
    // if (color.name === "Diamond" && style.name === "Heritage") {
    //   return;
    // }

    ringOptions[2].values.forEach((size, i3) => {
      variants.push({
        price: 100 + 50 * i1 + 10 * i2 + i3 * 1,
        discountPrice:
          i2 % 3 === 0 ? 100 + 50 * i1 + 10 * i2 + i3 * 1 - 40 : undefined,
        selectedOptions: {
          Style: style.name,
          Color: color.name,
          Size: size.name
        }
      });
    });
  });
});

const product = {
  handle: "ring",
  options: ringOptions,
  variants: variants
};

export default product;
