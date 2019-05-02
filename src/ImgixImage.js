import ImgixClient from "imgix-core-js";

const IMGIX_DOMAIN_RATIO = "ratio-dev.imgix.net";
const IMGIX_SECRET_RATIO = "T9S4mPu4pDgCetNw";

const RESOLUTIONS = [210, 420, 768, 1024, 1400, 1600, 1920];

class ImgixImage {
  constructor(config) {
    this.config = config;

    // Init imgix client only once
    if (!ImgixImage.client) {
      ImgixImage.client = new ImgixClient({
        domains: IMGIX_DOMAIN_RATIO,
        secureURLToken: IMGIX_SECRET_RATIO
      });
    }

    this.natural = this.createCrop(config.w / config.h);
    this.square = this.createCrop(1);
    this.panoramic = this.createCrop(2.5);
    this.landscape = this.createCrop(1.4);
    this.portrait = this.createCrop(0.7);

    let naturalAspectRatio = config.w / config.h;
    let nearestAspectRatio = 1.4;
    if (naturalAspectRatio <= 1.2 && naturalAspectRatio > 0.85) {
      nearestAspectRatio = 1;
    }
    if (naturalAspectRatio < 0.85) {
      nearestAspectRatio = 0.7;
    }

    this.nearest = this.createCrop(nearestAspectRatio);

    // If you just pass image object, then let's take natural one
    this.src = this.natural.src;
    this.alt = this.natural.alt;
  }

  createCrop(ratio) {
    let images = [];

    RESOLUTIONS.forEach(res => {
      let w = res;
      let h = Math.round(res / ratio);

      let imgixUrl = ImgixImage.client.buildURL(this.config.url, {
        w: w,
        h: h,
        fit: "crop",
        auto: "compress,format"
      });

      images.push({
        url: imgixUrl,
        w: w,
        h: h
      });
    });

    return {
      alt: this.config.alt,
      src: images
    };
  }
}

export default ImgixImage;
