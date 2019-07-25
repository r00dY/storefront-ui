import images from "./images";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sizes = ["XS", "S", "M", "L"];

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
    images: [images[0], images[1], images[5], images[7]],
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
    images: [images[1], images[2]],
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
    images: [images[2], images[2]],
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
    images: [images[3], images[2]],
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
    images: [images[4], images[2]],
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
    images: [images[5], images[2]],
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
    images: [images[6], images[2]],
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
    images: [images[7], images[2]],
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
    images: [images[8], images[1], images[5], images[7]],
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
    images: [images[9], images[2]],
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
    images: [images[10], images[2]],
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
    images: [images[11], images[2]],
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
    images: [images[12], images[2]],
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
    images: [images[13], images[2]],
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
    images: [images[14], images[2]],
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
    images: [images[15], images[2]],
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
    images: [images[16], images[2]],
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
    images: [images[17], images[2]],
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
    images: [images[18], images[2]],
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
    images: [images[19], images[2]],
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
    images: [images[20], images[2]],
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
    images: [images[21], images[2]],
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
    images: [images[22], images[2]],
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
    images: [images[23], images[2]],
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
    images: [images[24], images[2]],
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
    images: [images[25], images[2]],
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
    images: [images[26], images[2]],
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
    images: [images[27], images[2]],
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
    images: [images[28], images[2]],
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
    images: [images[29], images[2]],
    href: "/product",
    variant: sizes[getRandomInt(0, 3)]
  }
];

export default products;
