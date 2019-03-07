const RandomImage = new function() {
    // let _this = this;

    const portraits = [
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_1.jpg",
            w: 750,
            h: 975,
            alt: "editorial_portrait_1"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_2.jpg",
            w: 750,
            h: 887,
            alt: "editorial_portrait_2"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_3.jpg",
            w: 750,
            h: 887,
            alt: "editorial_portrait_3"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_4.jpg",
            w: 600,
            h: 880,
            alt: "editorial_portrait_4"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_5.jpg",
            w: 750,
            h: 887,
            alt: "editorial_portrait_5"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_portrait_6.jpg",
            w: 750,
            h: 1040,
            alt: "editorial_portrait_6"
        }
    ];
    const landscapes = [
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_1.jpg",
            w: 1920,
            h: 1200,
            alt: "editorial_landscape_1"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_2.jpg",
            w: 1920,
            h: 1200,
            alt: "editorial_landscape_2"
        },
        {
            source: "imgix-ratio",
            path:
                "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/editorial_landscape_3.jpg",
            w: 1920,
            h: 1200,
            alt: "editorial_landscape_3"
        }
    ];

    function getRandomNumber(_max) {
        let _min = 0;
        let random = Math.floor(Math.random() * (_max - _min)) + _min;
        return random;
    }

    this.getPortrait = function() {
        return portraits[getRandomNumber(portraits.length)];
    };
    this.getLandscape = function() {
        return landscapes[getRandomNumber(landscapes.length)];
    };
}();

export default RandomImage;
