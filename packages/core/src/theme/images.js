const catLandscape = {
  name: "natural",
  aspectRatio: 1.786,
  srcset: [
    {
      url: "/cat/cat_420.png",
      w: 420,
      h: 236
    },
    {
      url: "/cat/cat_768.png",
      w: 768,
      h: 430
    },
    {
      url: "/cat/cat_1024.png",
      w: 1024,
      h: 534
    },
    {
      url: "/cat/cat_1280.png",
      w: 1280,
      h: 717
    },
    {
      url: "/cat/cat_1600.png",
      w: 1600,
      h: 896
    },
    {
      url: "/cat/cat_1920.png",
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
      url: "/cat/cat_p420.png",
      w: 420,
      h: 489
    },
    {
      url: "/cat/cat_p768.png",
      w: 768,
      h: 894
    },
    {
      url: "/cat/cat_p920.png",
      w: 1024,
      h: 1071
    }
  ]
};

const catImage = {
  id: 1234,
  altText: "Sweet kitty",
  originalSrc: "/cat/cat_1920.png",
  variants: [catLandscape, catPortrait]
};

export { catImage };
