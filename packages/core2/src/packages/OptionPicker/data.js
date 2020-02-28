const options = [
  {
    id: "size",
    name: "Size",
    values: [
      {
        id: "38",
        name: "38"
      },
      {
        id: "39",
        name: "39"
      },
      {
        id: "40",
        name: "40"
      },
      {
        id: "41",
        name: "41"
      },
      {
        id: "42",
        name: "42"
      }
    ]
  },
  {
    id: "color",
    name: "Color",
    values: [
      {
        id: "red",
        name: "Red",
        hex: "#ff0000"
      },
      {
        id: "blue",
        name: "Blue",
        hex: "#0000ff"
      },
      {
        id: "green",
        name: "Green",
        hex: "#00ff00"
      }
    ]
  },
  {
    id: "style",
    name: "Style",
    values: [
      {
        id: "rustic",
        name: "Rustic"
      },
      {
        id: "modern",
        name: "Modern"
      }
    ]
  }
];

const products = [];
const productsPartial = [];

options[0].values.forEach((size, i) => {
  options[1].values.forEach((color, j) => {
    options[2].values.forEach((style, k) => {
      const product = {
        id: "product-" + (i * 100 + j * 10 + k),
        selectedOptions: {
          size: size.id,
          color: color.id,
          style: style.id
        }
      };

      products.push(product);

      // last option from list is never available
      if (
        i === options[0].values.length - 1 ||
        j === options[1].values.length - 1 ||
        k === options[2].values.length - 1
      ) {
        return;
      }

      productsPartial.push(product);
    });
  });
});

export { products, productsPartial, options };
