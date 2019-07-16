const productPhoto1 = {
  src: [
    {
      url: "/static/COS/product/product_1.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto1"
};

const productPhoto2 = {
  src: [
    {
      url: "/static/COS/product/product_2.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto2"
};

const productPhoto3 = {
  src: [
    {
      url: "/static/COS/product/product_3.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto3"
};

const productPhoto4 = {
  src: [
    {
      url: "/static/COS/product/product_4.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto4"
};

const productPhoto5 = {
  src: [
    {
      url: "/static/COS/product/product_5.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto5"
};

const productPhoto6 = {
  src: [
    {
      url: "/static/COS/product/product_6.jpg",
      w: 1128,
      h: 1692
    }
  ],
  alt: "productPhoto6"
};

const productPhotos = [
  productPhoto1,
  productPhoto2,
  productPhoto3,
  productPhoto4,
  productPhoto5,
  productPhoto6
];
const productPhotos2 = [
  {
    src: [
      {
        url: "/static/COS/product/product_7.jpeg",
        w: 1000,
        h: 1500
      }
    ],
    alt: ""
  }
];
const productPhotos3 = [
  {
    src: [
      {
        url: "/static/COS/product/product_8.jpeg",
        w: 1000,
        h: 1500
      }
    ],
    alt: ""
  }
];
const productPhotos4 = [
  {
    src: [
      {
        url: "/static/COS/product/product_9.jpeg",
        w: 1000,
        h: 1500
      }
    ],
    alt: ""
  }
];
const productPhotos5 = [
  {
    src: [
      {
        url: "/static/COS/product/product_10.jpeg",
        w: 1000,
        h: 1500
      }
    ],
    alt: ""
  }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sizes = ["XS", "S", "M", "L"];

const products = [
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
    images: productPhotos2,
    href: "assymetric-tie-dress",
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
    images: productPhotos3,
    href: "long-a-line-jersey-dress",
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
    images: productPhotos4,
    href: "bubble-shaped-jersey-dress",
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
    images: productPhotos5,
    href: "shaped-a-line-cotton-dress",
    variant: sizes[getRandomInt(0, 3)]
  }
];

export default products;
