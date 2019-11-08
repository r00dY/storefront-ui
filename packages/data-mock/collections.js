const images = require("./images");
const products = require("./products");
const stringToHandle = require("./utils/stringToHandle");

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
  handle: stringToHandle(title),
  title: title,
  image: images["landscape" + ((index % 4) + 2)],
  products: [],
  tags: ["featured-in-homepage"]
}));

collections.push({
  id: "123",
  handle: "homepage-slider",
  title: "Homepage slider",
  image: null,
  products: Array.from(Array(12).keys()).map(i => products[i]),
  tags: []
});

module.exports = collections;
