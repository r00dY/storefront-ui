import images from "./images";

const collections = [
  "Bars",
  "Candy",
  "Chips & Pretzels",
  "Cookies",
  "Crackers & Crisps",
  "Fruit & Vegetable Snacks",
  "Jerky",
  "Popcorn & Puffs"
].map((collection, index) => ({
  title: collection,
  description: "Lorem ipsum dolor sit amet",
  image: images["landscape" + ((index % 4) + 2)],
  handle: "someHandle"
}));

export default collections;
