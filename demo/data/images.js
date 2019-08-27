const ROOT =
  "https://ratio-assets.s3.eu-central-1.amazonaws.com/Storefront/basic";

const images = {
  landscape1: {
    src: [
      {
        url: ROOT + "/landscape1.jpg",
        w: 2844,
        h: 1600
      }
    ],
    alt: "landscape1.jpg"
  },
  landscape2: {
    src: [
      {
        url: ROOT + "/landscape2.jpg",
        w: 2667,
        h: 1000
      }
    ],
    alt: "landscape1.jpg"
  },
  landscape3: {
    src: [
      {
        url: ROOT + "/landscape3.jpg",
        w: 2667,
        h: 1000
      }
    ],
    alt: "landscape1.jpg"
  },
  landscape4: {
    src: [
      {
        url: ROOT + "/landscape4.jpg",
        w: 2667,
        h: 1000
      }
    ],
    alt: "landscape1.jpg"
  },
  landscape5: {
    src: [
      {
        url: ROOT + "/landscape5.jpg",
        w: 2667,
        h: 1000
      }
    ],
    alt: "landscape1.jpg"
  },
  categories: (() => {
    let photos = {};

    ["baby", "bath", "body", "face", "hair", "oral"].map(name => {
      photos[name] = {
        alt: name,
        src: [
          {
            url: `${ROOT}/categories/${name}.jpg`,
            w: 2667,
            h: 1000
          }
        ]
      };
    });

    return photos;
  })(),
  boxes: (() => {
    let photos = {};

    for (let i = 1; i <= 10; i++) {
      let name = `full_box_${i < 10 ? "0" : ""}${i}`;

      photos[name] = {
        alt: name,
        src: [
          {
            url: `${ROOT}/boxes/${name}.jpg`,
            w: 3613,
            h: 1400
          }
        ]
      };

      name = `half_box_${i < 10 ? "0" : ""}${i}`;

      photos[name] = {
        alt: name,
        src: [
          {
            url: `${ROOT}/boxes/${name}.jpg`,
            w: 1792,
            h: 1400
          }
        ]
      };

      name = `mobile_box_${i < 10 ? "0" : ""}${i}`;

      photos[name] = {
        alt: name,
        src: [
          {
            url: `${ROOT}/boxes/${name}.jpg`,
            w: 748,
            h: 1000
          }
        ]
      };
    }

    return photos;
  })(),
  products: [
    {
      src: [
        {
          url: ROOT + "/Airless_Bottle_Mockup_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Airless_Bottle_Mockup_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Amber_Mist_Bottle_Mockup_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Amber_Mist_Bottle_Mockup_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Baby_Oil_Bottle_Mockup_Orange_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Baby_Oil_Bottle_Mockup_Orange_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Baby_Oil_Bottle_Mockup_blue_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Baby_Oil_Bottle_Mockup_blue_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Boston_Bottle_Mockup_50ml_1-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Boston_Bottle_Mockup_50ml_1-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Bottle_with_Handle_Mockup_Dark_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Bottle_with_Handle_Mockup_Dark_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Bottle_with_Handle_Mockup_Light_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Bottle_with_Handle_Mockup_Light_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Coffee_Bag_Mockup_1-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Coffee_Bag_Mockup_1-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Coffee_Bag_Mockup_1-2.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Coffee_Bag_Mockup_1-2.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Coffee_Bag_Mockup_1-3.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Coffee_Bag_Mockup_1-3.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/EcoPaper_Sachete_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "EcoPaper_Sachete_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Foam_Bottle_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Foam_Bottle_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Frosted_Jar_Wooden_Cap_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Frosted_Jar_Wooden_Cap_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Jar_Mockup_11.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Jar_Mockup_11.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Mayonnaise_Jar_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Mayonnaise_Jar_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/OldStyle_Mustard_Jar_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "OldStyle_Mustard_Jar_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Olive_Bottle_Mockup_1ok-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Olive_Bottle_Mockup_1ok-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Olives_Jar_Mockup_1-2.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Olives_Jar_Mockup_1-2.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/PET_Bottle_100ml_Amber_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "PET_Bottle_100ml_Amber_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Paper_Bag_Eco_Paper_Mockup_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Paper_Bag_Eco_Paper_Mockup_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Peanut_Butter_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Peanut_Butter_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Round_Pet_Bottle_Color_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Round_Pet_Bottle_Color_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Sachet_Mockup_k_1-6.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Sachet_Mockup_k_1-6.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Spaghetti_Mockup_1-1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Spaghetti_Mockup_1-1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Tomato_Pasta_Jar_Mockup_1.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Tomato_Pasta_Jar_Mockup_1.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Tomato_Sauce_Bottle_Mockup_1oka.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Tomato_Sauce_Bottle_Mockup_1oka.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Virgin_Oil_Can_Mockup_1ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Virgin_Oil_Can_Mockup_1ok.jpg"
    },
    {
      src: [
        {
          url: ROOT + "/Weck_Jar_Mockup_1_ok.jpg",
          w: 1200,
          h: 1600
        }
      ],
      alt: "Weck_Jar_Mockup_1_ok.jpg"
    }
  ]
};

/**
 * Apply imgix
 */
import ImgixClient from "imgix-core-js";

const IMGIX_DOMAIN_RATIO = "ratio-dev.imgix.net";
const IMGIX_SECRET_RATIO = "T9S4mPu4pDgCetNw";

const RESOLUTIONS = [210, 420, 768, 1024, 1400, 1600, 1920];

const imgix = new ImgixClient({
  domain: IMGIX_DOMAIN_RATIO,
  secureURLToken: IMGIX_SECRET_RATIO
});

function transformToImgix(image) {
  let src = [];

  RESOLUTIONS.forEach(res => {
    let w = res;

    let imgixUrl = imgix.buildURL(image.src[0].url, {
      w: w,
      auto: "compress,format"
    });

    src.push({
      url: imgixUrl,
      w: w,
      h: (w / image.src[0].w) * image.src[0].h
    });
  });

  return {
    alt: image.alt,
    src: src
  };
}

function traverseImages(input) {
  let keys = Object.keys(input);

  keys.forEach(key => {
    if (input[key].src) {
      // is image
      input[key] = transformToImgix(input[key]);
    } else {
      traverseImages(input[key]);
    }
  });
}

traverseImages(images);

export default images;
