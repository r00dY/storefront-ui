const images = require("./images");
const stringToHandle = require("./utils/stringToHandle");

let productImages = [
  images["Airless_Bottle_Mockup_1.jpg"],
  images["Amber_Mist_Bottle_Mockup_1.jpg"],
  images["Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg"],
  images["Baby_Oil_Bottle_Mockup_Orange_1.jpg"],
  images["Baby_Oil_Bottle_Mockup_blue_1.jpg"],
  images["Boston_Bottle_Mockup_50ml_1-1.jpg"],
  images["Bottle_with_Handle_Mockup_Dark_1.jpg"],
  images["Bottle_with_Handle_Mockup_Light_1.jpg"],
  images["Coffee_Bag_Mockup_1-1.jpg"],
  images["Coffee_Bag_Mockup_1-2.jpg"],
  images["Coffee_Bag_Mockup_1-3.jpg"],
  images["Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg"],
  images["EcoPaper_Sachete_Mockup_1ok.jpg"],
  images["Foam_Bottle_Mockup_1ok.jpg"],
  images["Frosted_Jar_Wooden_Cap_1.jpg"],
  images["Jar_Mockup_11.jpg"],
  images["Mayonnaise_Jar_Mockup_1ok.jpg"],
  images["OldStyle_Mustard_Jar_Mockup_1ok.jpg"],
  images["Olive_Bottle_Mockup_1ok-1.jpg"],
  images["Olives_Jar_Mockup_1-2.jpg"],
  images["PET_Bottle_100ml_Amber_1.jpg"],
  images["Paper_Bag_Eco_Paper_Mockup_1.jpg"],
  images["Peanut_Butter_Mockup_1ok.jpg"],
  images["Round_Pet_Bottle_Color_1.jpg"],
  images["Sachet_Mockup_k_1-6.jpg"],
  images["Spaghetti_Mockup_1-1.jpg"],
  images["Tomato_Pasta_Jar_Mockup_1.jpg"],
  images["Tomato_Sauce_Bottle_Mockup_1oka.jpg"],
  images["Virgin_Oil_Can_Mockup_1ok.jpg"],
  images["Weck_Jar_Mockup_1_ok.jpg"]
];

const products = [
  {
    id: 1,
    title: "Transparent Bottle",
    description: "A-line Dresses",
    images: [
      productImages[0],
      productImages[1],
      productImages[5],
      productImages[7]
    ],
    tags: ["sustainability"]
  },
  {
    id: 2,
    title: "Long A-line Jersey Dress",
    description: "Jersey Dresses",
    tags: [],
    images: [productImages[1], productImages[2]]
  },
  {
    id: 3,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[2], productImages[2]]
  },
  {
    id: 4,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[3], productImages[2]]
  },
  {
    id: 5,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[4], productImages[2]]
  },
  {
    id: 6,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[5], productImages[2]]
  },
  {
    id: 7,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[6], productImages[2]]
  },
  {
    id: 8,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[7], productImages[2]]
  },
  {
    id: 9,
    title: "Assymetric Tie Dress",
    description: "A-line Dresses",
    tags: ["sustainability"],
    images: [
      productImages[8],
      productImages[1],
      productImages[5],
      productImages[7]
    ]
  },

  {
    id: 10,
    title: "Long A-line Jersey Dress",
    description: "Jersey Dresses",
    images: [productImages[9], productImages[2]],
    tags: []
  },
  {
    id: 11,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[10], productImages[2]]
  },
  {
    id: 12,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[11], productImages[2]]
  },
  {
    id: 13,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[12], productImages[2]]
  },
  {
    id: 14,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[13], productImages[2]]
  },
  {
    id: 15,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[14], productImages[2]]
  },
  {
    id: 16,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[15], productImages[2]]
  },
  {
    id: 17,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[16], productImages[2]]
  },
  {
    id: 18,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[17], productImages[2]]
  },
  {
    id: 19,
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    description: "Jersey Dresses",
    tags: ["sustainability"],
    images: [productImages[18], productImages[2]]
  },
  {
    id: 20,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[19], productImages[2]]
  },
  {
    id: 21,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[20], productImages[2]]
  },
  {
    id: 22,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[21], productImages[2]]
  },
  {
    id: 23,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[22], productImages[2]]
  },
  {
    id: 24,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[23], productImages[2]]
  },
  {
    id: 25,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[24], productImages[2]]
  },
  {
    id: 26,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[25], productImages[2]]
  },
  {
    id: 27,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[26], productImages[2]]
  },
  {
    id: 28,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[27], productImages[2]]
  },
  {
    id: 29,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[28], productImages[2]]
  },
  {
    id: 30,
    title: "Shaped A-line Cotton Dress",
    description: "Evening & Occasion Dresses Very Long Description",
    tags: [],
    images: [productImages[29], productImages[2]]
  }
];

/**
 * Assign options and product variants to product
 * TODO: make it better pls
 */

products.forEach(product => {
  product.handle = stringToHandle(`${product.title}${product.id}`);
  product.availableForSale = true;
  product.createdAt = new Date();
  product.shit = "Dupa";

  let option = {
    name: "size",
    values: []
  };

  product.variants = [];

  const numOfSizes = (product.id % 9) + 1;

  for (let i = 1; i <= numOfSizes; i++) {
    const optionValue = i * 100 + "ml";
    const id = product.id * 100 + i;

    option.values.push(optionValue);

    let price = {
      amount: `${(i + 1) * 100}.00`,
      currencyCode: "USD"
    };

    let compareAtPrice = undefined;

    // For every 4th we have discount!
    if (i % 4 === 0) {
      compareAtPrice = {
        ...price
      };

      price.amount = `${(i + 1) * 100 - 50}.00`;
    }

    const variant = {
      id: id,
      availableForSale: true,
      compareAtPrice: compareAtPrice,
      price: price,
      image: null,
      product: product,
      selectedOptions: [
        {
          name: "size",
          value: optionValue
        }
      ],
      sku: `sku${id}`,
      title: product.title
    };

    product.variants.push(variant);
  }

  product.options = [option];
});

module.exports = products;
