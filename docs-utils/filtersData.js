const filtersData = [
  {
    id: "brand",
    name: "Brand",
    type: "select",
    items: [
      {
        id: "nike",
        name: "Nike",
        amount: 46
      },
      {
        id: "adidas",
        name: "Adidas",
        amount: 21
      },
      {
        id: "puma",
        name: "Puma",
        amount: 12
      },
      {
        id: "under-armour",
        name: "Under Armour",
        amount: 0
      },
      {
        id: "asics",
        name: "ASICS",
        amount: 12
      },
      {
        id: "new-balance",
        name: "New Balance",
        amount: 54
      },
      {
        id: "sketchers",
        name: "Sketchers",
        amount: 32
      },
      {
        id: "fila",
        name: "Fila",
        amount: 75
      },
      {
        id: "bata",
        name: "Bata",
        amount: 2
      }
    ]
  },
  {
    id: "color",
    name: "Color",
    type: "select",
    items: [
      {
        id: "white",
        name: "white",
        amount: 46,
        data: {
          hex: "#ffffff"
        }
      },
      {
        id: "grey",
        name: "grey",
        amount: 21,
        data: {
          hex: "#E5E5E7"
        }
      },
      {
        id: "black",
        name: "black",
        amount: 12,
        data: {
          hex: "#000000"
        }
      },
      {
        id: "blue",
        name: "blue",
        amount: 0,
        data: {
          hex: "#295F9A"
        }
      },
      {
        id: "olive",
        name: "olive",
        amount: 12,
        data: {
          hex: "#62664D"
        }
      },
      {
        id: "beige",
        name: "beige",
        amount: 54,
        data: {
          hex: "#BBB09E"
        }
      },
      {
        id: "orange",
        name: "orange",
        amount: 32,
        data: {
          hex: "#D8922C"
        }
      },
      {
        id: "red",
        name: "red",
        amount: 75,
        data: {
          hex: "#C52E35"
        }
      },
      {
        id: "pink",
        name: "pink",
        amount: 2,
        data: {
          hex: "#F1D4CF"
        }
      },
      {
        id: "purple",
        name: "purple",
        amount: 2,
        data: {
          hex: "#4F3B75"
        }
      },
      {
        id: "brown",
        name: "brown",
        amount: 2,
        data: {
          hex: "#9C673B"
        }
      },
      {
        id: "honey",
        name: "honey",
        amount: 2,
        data: {
          hex: "#ECB91E"
        }
      }
    ]
  },
  {
    id: "price",
    name: "Price",
    type: "range",
    from: null,
    to: 500
  },
  {
    id: "radius",
    name: "Radius (cm)",
    type: "range",
    from: 12,
    to: null
  },
  {
    id: "width",
    name: "Width",
    type: "select",
    items: [
      {
        id: "wide",
        name: "Wide",
        amount: 46
      },
      {
        id: "standard",
        name: "Standard",
        amount: 21
      },
      {
        id: "narrow",
        name: "Narrow",
        amount: 12
      }
    ]
  }
];

export default filtersData;
