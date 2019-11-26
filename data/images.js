const catLandscape = {
  name: "natural",
  aspectRatio: 1.786,
  srcset: [
    {
      url: "/static/cat/cat_420.png",
      w: 420,
      h: 236
    },
    {
      url: "/static/cat/cat_768.png",
      w: 768,
      h: 430
    },
    {
      url: "/static/cat/cat_1024.png",
      w: 1024,
      h: 534
    },
    {
      url: "/static/cat/cat_1280.png",
      w: 1280,
      h: 717
    },
    {
      url: "/static/cat/cat_1600.png",
      w: 1600,
      h: 896
    },
    {
      url: "/static/cat/cat_1920.png",
      w: 1920,
      h: 1075
    }
  ]
};

const catPortrait = {
  name: "portrait",
  aspectRatio: 0.95611578,
  srcset: [
    {
      url: "/static/cat/cat_p420.png",
      w: 420,
      h: 489
    },
    {
      url: "/static/cat/cat_p768.png",
      w: 768,
      h: 894
    },
    {
      url: "/static/cat/cat_p920.png",
      w: 1024,
      h: 1071
    }
  ]
};

const catImage = {
  id: 1234,
  altText: "Sweet kitty",
  originalSrc: "/static/cat/cat_1920.png",
  variants: [catLandscape, catPortrait]
};

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

export {
  catLandscape,
  catPortrait,
  catImage,
  productPhotos,
  productPhotos2,
  productPhotos3,
  productPhotos4,
  productPhotos5
};
