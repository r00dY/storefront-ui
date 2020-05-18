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

options[0].values.forEach((size, i) => {
  options[1].values.forEach((color, j) => {
    options[2].values.forEach((style, k) => {
      products.push({
        id: "product-" + (i * 100 + j * 10 + k),
        selectedOptions: {
          size: size.id,
          color: color.id,
          style: style.id
        }
      });
    });
  });
});

const filters = [
  {
    id: "sort",
    label: "Sort",
    type: "select",
    options: [
      {
        id: "price-asc",
        label: "Price (high to low)"
      },
      {
        id: "price-desc",
        label: "Price (low to high)"
      },
      {
        id: "newest",
        label: "Newest"
      },
      {
        id: "most-popular",
        label: "Most popular"
      }
    ]
  },
  {
    id: "brand",
    label: "Brand",
    type: "multiselect",
    options: [
      {
        id: "nike",
        label: "Nike",
        amount: 46
      },
      {
        id: "adidas",
        label: "Adidas",
        amount: 21
      },
      {
        id: "puma",
        label: "Puma",
        amount: 12
      },
      {
        id: "under-armour",
        label: "Under Armour",
        amount: 0
      },
      {
        id: "asics",
        label: "ASICS",
        amount: 12
      },
      {
        id: "new-balance",
        label: "New Balance",
        amount: 54
      },
      {
        id: "sketchers",
        label: "Sketchers",
        amount: 32
      },
      {
        id: "fila",
        label: "Fila",
        amount: 75
      },
      {
        id: "bata",
        label: "Bata",
        amount: 2
      }
    ]
  },
  {
    id: "color",
    label: "Color",
    type: "select",
    options: [
      {
        id: "white",
        label: "white",
        amount: 46,
        data: {
          hex: "#ffffff"
        }
      },
      {
        id: "grey",
        label: "grey",
        amount: 21,
        data: {
          hex: "#E5E5E7"
        }
      },
      {
        id: "black",
        label: "black",
        amount: 12,
        data: {
          hex: "#000000"
        }
      },
      {
        id: "blue",
        label: "blue",
        amount: 0,
        data: {
          hex: "#295F9A"
        }
      },
      {
        id: "olive",
        label: "olive",
        amount: 12,
        data: {
          hex: "#62664D"
        }
      },
      {
        id: "beige",
        label: "beige",
        amount: 54,
        data: {
          hex: "#BBB09E"
        }
      },
      {
        id: "orange",
        label: "orange",
        amount: 32,
        data: {
          hex: "#D8922C"
        }
      },
      {
        id: "red",
        label: "red",
        amount: 75,
        data: {
          hex: "#C52E35"
        }
      },
      {
        id: "pink",
        label: "pink",
        amount: 2,
        data: {
          hex: "#F1D4CF"
        }
      },
      {
        id: "purple",
        label: "purple",
        amount: 2,
        data: {
          hex: "#4F3B75"
        }
      },
      {
        id: "brown",
        label: "brown",
        amount: 2,
        data: {
          hex: "#9C673B"
        }
      },
      {
        id: "honey",
        label: "honey",
        amount: 2,
        data: {
          hex: "#ECB91E"
        }
      }
    ]
  },
  {
    id: "price",
    label: "Price",
    type: "range",
    min: 0,
    max: 1999
  },
  {
    id: "radius",
    label: "Radius (cm)",
    type: "range",
    min: 15,
    max: 49
  },
  {
    id: "width",
    label: "Width",
    type: "select",
    options: [
      {
        id: "wide",
        label: "Wide",
        amount: 46
      },
      {
        id: "standard",
        label: "Standard",
        amount: 21
      },
      {
        id: "narrow",
        label: "Narrow",
        amount: 12
      }
    ]
  }
];

export { products, options, filters };
