import React from "react";
import { storiesOf } from "@storybook/react";
import VideoBox from "./VideoBox";

const VideoBox1 = (
    <VideoBox
        videoSrc={
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/product/product_video_1.mp4"
        }
    />
);
const VideoBox2 = (
    <VideoBox
        videoSrc={
            "https://s3.eu-central-1.amazonaws.com/ratio-assets/Storefront/nike/video.mp4"
        }
    />
);
storiesOf("VideoBox", module).add("default", () => VideoBox1);
storiesOf("VideoBox", module).add("default2", () => VideoBox2);
export { VideoBox1, VideoBox2 };
