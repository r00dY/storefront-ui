import { Image$ } from "@commerce-ui/core/Image";
import { ImageZoomable$ } from "@commerce-ui/core/Image";

export const Image = Image$;
export const ImageZoomable = props => (
  <ImageZoomable$
    overrides={{
      Image: Image
    }}
    {...props}
  />
);
