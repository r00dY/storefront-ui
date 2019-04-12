const filtersData = [
    {
        id: "brand",
        name: "Brand",
        type: "select",
        options: [
            {
                id: "nike",
                name: "Nike",
                amount: 46,
                selected: false
            },
            {
                id: "adidas",
                name: "Adidas",
                amount: 21,
                selected: false
            },
            {
                id: "puma",
                name: "Puma",
                amount: 12,
                selected: true
            },
            {
                id: "under-armour",
                name: "Under Armour",
                amount: 0,
                selected: true
            },
            {
                id: "asics",
                name: "ASICS",
                amount: 12,
                selected: false
            },
            {
                id: "new-balance",
                name: "New Balance",
                amount: 54,
                selected: false
            },
            {
                id: "sketchers",
                name: "Sketchers",
                amount: 32,
                selected: false
            },
            {
                id: "fila",
                name: "Fila",
                amount: 75,
                selected: false
            },
            {
                id: "bata",
                name: "Bata",
                amount: 2,
                selected: false
            }

        ]
    },
    {
        id: "color",
        name: "Color",
        type: "select",
        options: [
            {
                id: "white",
                name: "white",
                amount: 46,
                selected: false,
                data: {
                    hex: "#ffffff"
                }
            },
            {
                id: "grey",
                name: "grey",
                amount: 21,
                selected: false,
                data: {
                    hex: "#E5E5E7"
                }
            },
            {
                id: "black",
                name: "black",
                amount: 12,
                selected: false,
                data: {
                    hex: "#000000"
                }
            },
            {
                id: "blue",
                name: "blue",
                amount: 0,
                selected: false,
                data: {
                    hex: "#295F9A"
                }
            },
            {
                id: "olive",
                name: "olive",
                amount: 12,
                selected: false,
                data: {
                    hex: "#62664D"
                }
            },
            {
                id: "beige",
                name: "beige",
                amount: 54,
                selected: false,
                data: {
                    hex: "#BBB09E"
                }
            },
            {
                id: "orange",
                name: "orange",
                amount: 32,
                selected: false,
                data: {
                    hex: "#D8922C"
                }
            },
            {
                id: "red",
                name: "red",
                amount: 75,
                selected: true,
                data: {
                    hex: "#C52E35"
                }
            },
            {
                id: "pink",
                name: "pink",
                amount: 2,
                selected: false,
                data: {
                    hex: "#F1D4CF"
                }
            },
            {
                id: "purple",
                name: "purple",
                amount: 2,
                selected: false,
                data: {
                    hex: "#4F3B75"
                }
            },
            {
                id: "brown",
                name: "brown",
                amount: 2,
                selected: false,
                data: {
                    hex: "#9C673B"
                }
            },
            {
                id: "honey",
                name: "honey",
                amount: 2,
                selected: false,
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
        options: [
            {
                id: "wide",
                name: "Wide",
                amount: 46,
                selected: false
            },
            {
                id: "standard",
                name: "Standard",
                amount: 21,
                selected: false
            },
            {
                id: "narrow",
                name: "Narrow",
                amount: 12,
                selected: false
            }
        ]
    },
];

export default filtersData;
