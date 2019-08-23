import {
  productPhotos2,
  productPhotos3,
  productPhotos4,
  productPhotos5
} from "../data/images";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const sizes = ["XS", "S", "M", "L"];

const products = [
  {
    title: "Assymetric Tie Dress",
    price: {
      amount: 9900,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 6900,
      currencyCode: "EUR"
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
    href: "assymetric-tie-dress"
  },
  {
    title: "Long A-line Jersey Dress",
    price: {
      amount: 9900,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    images: productPhotos3,
    href: "long-a-line-jersey-dress"
  },
  {
    title: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: {
      amount: 129000,
      currencyCode: "EUR"
    },
    description: "Jersey Dresses",
    badges: [
      {
        label: "Sustainability",
        type: "feature"
      }
    ],
    images: productPhotos4,
    href: "bubble-shaped-jersey-dress"
  },
  {
    title: "Shaped A-line Cotton Dress",
    price: {
      amount: 879900,
      currencyCode: "EUR"
    },
    priceDiscount: {
      amount: 699900,
      currencyCode: "EUR"
    },
    description: "Evening & Occasion Dresses Very Long Description",
    badges: [
      {
        label: "-20%",
        type: "discount"
      }
    ],
    images: productPhotos5,
    href: "shaped-a-line-cotton-dress"
  }
];

export default products;
