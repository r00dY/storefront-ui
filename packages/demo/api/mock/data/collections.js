import images from "./images";
import products from "./products";

const collections = [
  "Bars",
  "Candy",
  "Chips & Pretzels",
  "Cookies",
  "Crackers & Crisps",
  "Fruit & Vegetable Snacks",
  "Jerky",
  "Popcorn & Puffs"
].map((title, index) => ({
  id: index,
  handle: title.toLowerCase().replace(/ /g, "-"),
  title: title,
  image: images["landscape" + ((index % 4) + 2)],
  products: []
}));

collections.push({
  id: "123",
  handle: "homepage-slider",
  title: "Homepage slider",
  image: null,
  products: Array.from(Array(12).keys()).map(i => products[i])
});

export default collections;
