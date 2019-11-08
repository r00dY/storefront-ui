const ImgixClient = require("imgix-core-js");

const IMGIX_DOMAIN_RATIO = "ratio-dev.imgix.net";
const IMGIX_SECRET_RATIO = "T9S4mPu4pDgCetNw";

const ROOT =
  "https://ratio-assets.s3.eu-central-1.amazonaws.com/Storefront/basic";

const imgix = new ImgixClient({
  domain: IMGIX_DOMAIN_RATIO,
  secureURLToken: IMGIX_SECRET_RATIO
});

const boxImages = (() => {
  let photos = [];

  for (let i = 1; i <= 10; i++) {
    let name = `full_box_${i < 10 ? "0" : ""}${i}`;

    photos.push({
      alt: name,
      path: `boxes/${name}.jpg`,
      w: 3613,
      h: 1400
    });

    name = `half_box_${i < 10 ? "0" : ""}${i}`;

    photos.push({
      alt: name,
      path: `boxes/${name}.jpg`,
      w: 1792,
      h: 1400
    });

    name = `mobile_box_${i < 10 ? "0" : ""}${i}`;

    photos.push({
      alt: name,
      path: `boxes/${name}.jpg`,
      w: 748,
      h: 1000
    });
  }

  return photos;
})();

const images = [
  {
    path: "landscape1.jpg",
    w: 2844,
    h: 1600,
    alt: "landscape1.jpg"
  },
  {
    path: "landscape2.jpg",
    w: 2667,
    h: 1000,
    alt: "landscape1.jpg"
  },
  {
    path: "landscape3.jpg",
    w: 2667,
    h: 1000,
    alt: "landscape1.jpg"
  },
  {
    path: "landscape4.jpg",
    w: 2667,
    h: 1000,
    alt: "landscape1.jpg"
  },
  {
    path: "landscape5.jpg",
    w: 2667,
    h: 1000,
    alt: "landscape1.jpg"
  },
  ...["baby", "bath", "body", "face", "hair", "oral"].map(name => ({
    alt: name,
    path: `categories/${name}.jpg`,
    w: 2667,
    h: 1000
  })),
  ...boxImages,
  {
    path: "Airless_Bottle_Mockup_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Airless_Bottle_Mockup_1.jpg"
  },
  {
    path: "Amber_Mist_Bottle_Mockup_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Amber_Mist_Bottle_Mockup_1.jpg"
  },
  {
    path: "Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg"
  },
  {
    path: "Baby_Oil_Bottle_Mockup_Orange_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Baby_Oil_Bottle_Mockup_Orange_1.jpg"
  },
  {
    path: "Baby_Oil_Bottle_Mockup_blue_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Baby_Oil_Bottle_Mockup_blue_1.jpg"
  },
  {
    path: "Boston_Bottle_Mockup_50ml_1-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Boston_Bottle_Mockup_50ml_1-1.jpg"
  },
  {
    path: "Bottle_with_Handle_Mockup_Dark_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Bottle_with_Handle_Mockup_Dark_1.jpg"
  },
  {
    path: "Bottle_with_Handle_Mockup_Light_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Bottle_with_Handle_Mockup_Light_1.jpg"
  },
  {
    path: "Coffee_Bag_Mockup_1-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Coffee_Bag_Mockup_1-1.jpg"
  },
  {
    path: "Coffee_Bag_Mockup_1-2.jpg",
    w: 1200,
    h: 1600,
    alt: "Coffee_Bag_Mockup_1-2.jpg"
  },
  {
    path: "Coffee_Bag_Mockup_1-3.jpg",
    w: 1200,
    h: 1600,
    alt: "Coffee_Bag_Mockup_1-3.jpg"
  },
  {
    path: "Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg"
  },
  {
    path: "EcoPaper_Sachete_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "EcoPaper_Sachete_Mockup_1ok.jpg"
  },
  {
    path: "Foam_Bottle_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "Foam_Bottle_Mockup_1ok.jpg"
  },
  {
    path: "Frosted_Jar_Wooden_Cap_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Frosted_Jar_Wooden_Cap_1.jpg"
  },
  {
    path: "Jar_Mockup_11.jpg",
    w: 1200,
    h: 1600,
    alt: "Jar_Mockup_11.jpg"
  },
  {
    path: "Mayonnaise_Jar_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "Mayonnaise_Jar_Mockup_1ok.jpg"
  },
  {
    path: "OldStyle_Mustard_Jar_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "OldStyle_Mustard_Jar_Mockup_1ok.jpg"
  },
  {
    path: "Olive_Bottle_Mockup_1ok-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Olive_Bottle_Mockup_1ok-1.jpg"
  },
  {
    path: "Olives_Jar_Mockup_1-2.jpg",
    w: 1200,
    h: 1600,
    alt: "Olives_Jar_Mockup_1-2.jpg"
  },
  {
    path: "PET_Bottle_100ml_Amber_1.jpg",
    w: 1200,
    h: 1600,
    alt: "PET_Bottle_100ml_Amber_1.jpg"
  },
  {
    path: "Paper_Bag_Eco_Paper_Mockup_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Paper_Bag_Eco_Paper_Mockup_1.jpg"
  },
  {
    path: "Peanut_Butter_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "Peanut_Butter_Mockup_1ok.jpg"
  },
  {
    path: "Round_Pet_Bottle_Color_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Round_Pet_Bottle_Color_1.jpg"
  },
  {
    path: "Sachet_Mockup_k_1-6.jpg",
    w: 1200,
    h: 1600,
    alt: "Sachet_Mockup_k_1-6.jpg"
  },
  {
    path: "Spaghetti_Mockup_1-1.jpg",
    w: 1200,
    h: 1600,
    alt: "Spaghetti_Mockup_1-1.jpg"
  },
  {
    path: "Tomato_Pasta_Jar_Mockup_1.jpg",
    w: 1200,
    h: 1600,
    alt: "Tomato_Pasta_Jar_Mockup_1.jpg"
  },
  {
    path: "Tomato_Sauce_Bottle_Mockup_1oka.jpg",
    w: 1200,
    h: 1600,
    alt: "Tomato_Sauce_Bottle_Mockup_1oka.jpg"
  },
  {
    path: "Virgin_Oil_Can_Mockup_1ok.jpg",
    w: 1200,
    h: 1600,
    alt: "Virgin_Oil_Can_Mockup_1ok.jpg"
  },
  {
    path: "Weck_Jar_Mockup_1_ok.jpg",
    w: 1200,
    h: 1600,
    alt: "Weck_Jar_Mockup_1_ok.jpg"
  }
];

const RESOLUTIONS = [210, 420, 768, 1024, 1366, 1600, 1920];

function createImageVariant(name, aspectRatio, originalUrl) {
  return {
    name,
    aspectRatio,
    srcset: RESOLUTIONS.map(width => ({
      src: imgix.buildURL(originalUrl, {
        w: width,
        h: width / aspectRatio,
        auto: "compress,format",
        fit: "crop"
      }),
      width: width
    }))
  };
}

function createImage(image, id) {
  let originalSrc = ROOT + "/" + image.path;

  return {
    id: image.path,
    originalSrc: originalSrc,
    altText: image.alt,
    variants: [
      createImageVariant("natural", image.w / image.h, originalSrc),
      createImageVariant("square", 1, originalSrc)
    ]
  };
}

let imagesMap = {};

images.forEach((image, i) => {
  let originalSrc = ROOT + "/" + image.path;

  imagesMap[image.path] = {
    id: i,
    originalSrc: originalSrc,
    altText: image.alt,
    variants: [
      createImageVariant("natural", image.w / image.h, originalSrc),
      createImageVariant("square", 1, originalSrc)
    ]
  };
});

module.exports = imagesMap;
