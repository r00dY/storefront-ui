import images from "./images";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sizes = ["XS", "S", "M", "L"];

let productImages = images.products;

const products = [
  {
    name: "Transparent Bottle",
    price: {
      regular: "99",
      discount: "69",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "A-line Dresses",
    badges: [
      {
        label: "-30%",
        type: "discount"
      },
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [
      productImages[0],
      productImages[1],
      productImages[5],
      productImages[7]
    ],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },

  {
    name: "Long A-line Jersey Dress",
    price: {
      regular: "99",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    images: [productImages[1], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[2], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[3], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[4], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[5], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[6], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[7], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Assymetric Tie Dress",
    price: {
      regular: "99",
      discount: "69",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "A-line Dresses",
    badges: [
      {
        label: "-30%",
        type: "discount"
      },
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [
      productImages[8],
      productImages[1],
      productImages[5],
      productImages[7]
    ],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },

  {
    name: "Long A-line Jersey Dress",
    price: {
      regular: "99",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    images: [productImages[9], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[10], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[11], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[12], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[13], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[14], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[15], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[16], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[17], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      regular: "129",
      discount: null,
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[18], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[19], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[20], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[21], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[22], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[23], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[24], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[25], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[26], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[27], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[28], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  },
  {
    name: "Shaped A-line Cotton Dress",
    price: {
      regular: "99",
      discount: "79",
      currency: {
        code: "EUR",
        symbol: "€"
      }
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[29], productImages[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  }
];

export default products;
