import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Grid, GridItem } from "../Grid";
import { rs, RangeMap } from "responsive-helpers";
import { ImageZoomable } from "../Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

/**
 * TODO: Hook should be separate and work with any refs, should be independent of ImageMosaic
 * TODO: ImageMosaic should be a simple component with forwardRef
 * TODO: useImageMosaic should simply connect above two AND work like useSwipeableItemsContainer works.
 *
 * actually there's a lot of logic in doing just
 *
 * const ref = useRef(null);
 * const [active, setActive] = useActiveElementInViewport(ref);
 *
 * and then assigning ref to <ImageMosaic ref={ref} ... />
 *
 * useActiveElementInViewport would work with ImageMosaic or any array of refs or any other component from our system. Maybe API is a bit complicated but more versatile. To decide this later.
 *
 */

class ImageMosaic extends React.Component {
  constructor(props) {
    super(props);

    this._visibilityChange = this._visibilityChange.bind(this);
    this.scrollToImage = this.scrollToImage.bind(this);

    this.intersectionEntries = [];
    this.state = {
      active: 0
    };

    this.photoRefs = [];
    for (let i = 0; i < this.props.images.length; i++) {
      this.photoRefs[i] = React.createRef();
      this.intersectionEntries[i] = null;
    }
  }

  componentDidMount() {
    if (IntersectionObserver) {
      this.observer = new IntersectionObserver(
        entries => {
          this._visibilityChange(entries);
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }
      );
      this.photoRefs.forEach(ref => {
        this.observer.observe(ref.current);
      });
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  _visibilityChange(entries) {
    entries.forEach(entry => {
      this.intersectionEntries[entry.target.dataset.photoId] = entry;
    });

    let maxIntersectionRatio = 0;
    let activeIndex;
    this.intersectionEntries.forEach((entry, index) => {
      if (!entry) {
        return;
      }

      if (entry.intersectionRatio > maxIntersectionRatio) {
        maxIntersectionRatio = entry.intersectionRatio;
        activeIndex = index;
      }
    });

    if (activeIndex !== this.state.active) {
      this.setState({
        active: activeIndex
      });

      if (this._onActiveChange) {
        this._onActiveChange(activeIndex);
      }
    }
  }

  scrollToImage(n) {
    let rect = this.photoRefs[n].current.getBoundingClientRect();

    window.scrollBy({
      top: rect.top - Math.max((window.innerHeight - rect.height) / 2, 0), // if bigger than window height then scroll to top of the photo; if smaller -> scroll so that it's centered in viewport
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    let gutter;
    if (Array.isArray(this.props.gutter)) {
      gutter = [rs(this.props.gutter[0]), rs(this.props.gutter[1])];
    } else {
      gutter = [rs(this.props.gutter), rs(this.props.gutter)];
    }

    let items = this.props.images.map((image, index) =>
      this.props.imageComponent(image, this.state.active === index, index)
    );

    items = items.map((item, index) => (
      <div
        ref={this.photoRefs[index]}
        data-photo-id={index}
        css={css`
          ${gutter[1].css("margin-bottom")}
        `}
      >
        {item}
      </div>
    ));

    let layoutRangeMap = new RangeMap(this.props.layout);
    let params = {};

    layoutRangeMap.forEach((val, range) => {
      params[range.from] = 12 / val;
    });

    let component = (
      <Grid colNumber={12} gutter={gutter[0]}>
        {items.map((item, index) => (
          <GridItem params={params} key={index}>
            {item}
          </GridItem>
        ))}
      </Grid>
    );

    return (
      <div className={this.props.className} style={this.props.style}>
        {component}
      </div>
    );
  }
}

function useImageMosaic() {
  const ref = useRef(null);
  const [active, setActiveRaw] = useState(0);

  const setActive = (n, animated) => {
    if (ref.current) {
      ref.current.scrollToImage(n, animated);
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current._onActiveChange = setActiveRaw;
    }
  });

  return {
    ref: ref,
    active: active,
    setActive: setActive
  };
}

ImageMosaic.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
  imageComponent: PropTypes.func.isRequired,
  layout: PropTypes.any,
  gutter: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any])
};

ImageMosaic.defaultProps = {
  layout: 1,
  gutter: 10,
  imageComponent: image => <ImageZoomable image={image} />
};

export default ImageMosaic;
export { useImageMosaic };
