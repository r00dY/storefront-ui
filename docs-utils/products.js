import {
  productPhotos2,
  productPhotos3,
  productPhotos4,
  productPhotos5
} from "../data/images";

const products = [
  {
    name: "Assymetric Tie Dress",
    price: " \u20ac99",
    discountPrice: " \u20ac69",
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
    name: "Long A-line Jersey Dress",
    price: " \u20ac69",
    description: "Jersey Dresses",
    images: productPhotos3,
    href: "long-a-line-jersey-dress"
  },
  {
    name: "Bubble-shaped Jersey Dress Very Long Product Name",
    price: " \u20ac129",
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
    name: "Shaped A-line Cotton Dress",
    price: " \u20ac99",
    discountPrice: " \u20ac79",
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
