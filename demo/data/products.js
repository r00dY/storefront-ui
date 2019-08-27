import images from "./images";
import randomInt from "../utils/randomInt";

let productImages = images.products;

const products = [
  {
    id: 1,
    title: "Transparent Bottle",
    description: "A-line Dresses",
    price: {
      amount: 99,
      currencyCode: "PLN"
    },
    images: [
      productImages[0],
      productImages[1],
      productImages[5],
      productImages[7]
    ],
    href: "/product",
    badges: [
      {
        label: "-30%",
        type: "discount"
      },
      {
        label: "Sustainability",
        type: "feature"
      }
    ]
  },
  {
    id: 2,
    title: "Long A-line Jersey Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    images: [productImages[1], productImages[2]],
    href: "/product"
  },
  {
    id: 3,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[2], productImages[2]],
    href: "/product"
  },
  {
    id: 4,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[3], productImages[2]],
    href: "/product"
  },
  {
    id: 5,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[4], productImages[2]],
    href: "/product"
  },
  {
    id: 6,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[5], productImages[2]],
    href: "/product"
  },
  {
    id: 7,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[6], productImages[2]],
    href: "/product"
  },
  {
    id: 8,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[7], productImages[2]],
    href: "/product"
  },
  {
    id: 9,
    title: "Assymetric Tie Dress",
    price: {
      amount: 99,
      currencyCode: "PLN"
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
    href: "/product"
  },

  {
    id: 10,
    title: "Long A-line Jersey Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    images: [productImages[9], productImages[2]],
    href: "/product"
  },
  {
    id: 11,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[10], productImages[2]],
    href: "/product"
  },
  {
    id: 12,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[11], productImages[2]],
    href: "/product"
  },
  {
    id: 13,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[12], productImages[2]],
    href: "/product"
  },
  {
    id: 14,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[13], productImages[2]],
    href: "/product"
  },
  {
    id: 15,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[14], productImages[2]],
    href: "/product"
  },
  {
    id: 16,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[15], productImages[2]],
    href: "/product"
  },
  {
    id: 17,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[16], productImages[2]],
    href: "/product"
  },
  {
    id: 18,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[17], productImages[2]],
    href: "/product"
  },
  {
    id: 19,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: [productImages[18], productImages[2]],
    href: "/product"
  },
  {
    id: 20,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[19], productImages[2]],
    href: "/product"
  },
  {
    id: 21,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[20], productImages[2]],
    href: "/product"
  },
  {
    id: 22,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[21], productImages[2]],
    href: "/product"
  },
  {
    id: 23,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[22], productImages[2]],
    href: "/product"
  },
  {
    id: 24,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[23], productImages[2]],
    href: "/product"
  },
  {
    id: 25,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[24], productImages[2]],
    href: "/product"
  },
  {
    id: 26,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[25], productImages[2]],
    href: "/product"
  },
  {
    id: 27,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[26], productImages[2]],
    href: "/product"
  },
  {
    id: 28,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[27], productImages[2]],
    href: "/product"
  },
  {
    id: 29,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[28], productImages[2]],
    href: "/product"
  },
  {
    id: 30,
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 99,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: [productImages[29], productImages[2]],
    href: "/product"
  }
];

/**
 * Assign random options to products
 */

products.forEach(product => {
  let option = {
    name: "size",
    values: []
  };

  const numOfSizes = randomInt(2, 10);

  for (let i = 1; i <= numOfSizes; i++) {
    option.values.push(i * 100 + "ml");
  }

  product.options = [option];
});

export default products;
