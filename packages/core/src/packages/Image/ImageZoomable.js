import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

import { AbstractZoomer } from "simpleswiper";

class ImageZoomable extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.itemRef = React.createRef();
    this.itemCopyRef = React.createRef();

    this._onClick = this._onClick.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onMouseEnter = this._onMouseEnter.bind(this);

    this.state = {
      isZooming: false
    };
  }

  componentDidMount() {
    this._containerSize = {
      width: this.containerRef.current.clientWidth,
      height: this.containerRef.current.clientHeight
    };

    if (this.props.mode === "natural" || this.props.mode === "cover") {
      this._itemSize = {
        width: this._containerSize.width,
        height: this._containerSize.height
      };
    } else if (this.props.mode === "contain") {
      // calculate container for contain.
    }

    let zoom = this.props.zoom;

    this._maxMovementRange = {
      x: this._itemSize.width * (zoom - 1),
      y: this._itemSize.height * (zoom - 1)
    };

    // Touch
    this.zoomer = new AbstractZoomer();

    this.zoomer.addEventListener("move", coords => {
      this.itemRef.current.style.transform = `translateX(${
        coords.x
      }px) translateY(${coords.y}px) scale(${coords.scale})`;
    });

    this.zoomer.containerSize = {
      width: this.containerRef.current.clientWidth,
      height: this.containerRef.current.clientHeight
    };

    if (this.props.mode === "natural" || this.props.mode === "cover") {
      this.zoomer.itemSize = {
        width: this.zoomer.containerSize.width,
        height: this.zoomer.containerSize.height
      };
    }
  }

  _calculateTransforms() {
    let zoom = this.props.zoom;

    return {
      transformX:
        (-(this._mouseRelativeCoords.x - 0.5) * this._maxMovementRange.x) /
        zoom,
      transformY:
        (-(this._mouseRelativeCoords.y - 0.5) * this._maxMovementRange.y) /
        zoom,
      scale: zoom
    };
  }

  _disableClickZoom() {
    this.setState({
      isDisappearing: true
    });

    this.disappearTimeout = setTimeout(() => {
      this.setState({
        isZooming: false,
        isDisappearing: false
      });
    }, 200);
  }

  _onClick() {
    if (!this.state.isZooming) {
      clearTimeout(this.disappearTimeout);

      this.setState({
        isZooming: true,
        isDisappearing: false,
        ...this._calculateTransforms()
      });
    } else {
      this._disableClickZoom();
    }
  }

  _onMouseMove(e) {
    this._mouseRelativeCoords = {
      x: e.nativeEvent.offsetX / this._itemSize.width,
      y: e.nativeEvent.offsetY / this._itemSize.height
    };

    if (this.state.isZooming) {
      this.setState({
        ...this._calculateTransforms()
      });
    }
  }

  _onMouseEnter() {
    clearTimeout(this.leaveTimeout);
  }

  _onMouseLeave() {
    this.leaveTimeout = setTimeout(() => {
      this._disableClickZoom();
    }, 200);
  }

  render() {
    const { Image } = this.props.overrides;

    let transform = `scale(${this.state.scale}) translate(${
      this.state.transformX
    }px, ${this.state.transformY}px)`;

    return (
      <div style={this.props.style} className={this.props.className}>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            cursor: this.state.isZooming ? "zoom-out" : "zoom-in"
          }}
          ref={this.containerRef}
          onClick={this._onClick}
          onMouseMove={this._onMouseMove}
          onMouseLeave={this._onMouseLeave}
          onMouseEnter={this._onMouseEnter}
        >
          <div
            ref={this.itemRef}
            style={{
              transformOrigin: "50% 50%",
              transition: "none",
              height: "100%",
              width: "100%"
            }}
          >
            <div style={{ opacity: 1, height: "100%" }}>
              <Image style={{ height: "100%" }} {...this.props} />
            </div>
          </div>

          {this.state.isZooming && (
            <div
              ref={this.itemCopyRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                transformOrigin: "50% 50%",
                transition: "opacity .2s",
                opacity: this.state.isDisappearing ? 0 : 1,
                transform: transform,
                pointerEvents: "none"
              }}
            >
              <Image
                {...this.props}
                load={true}
                autoload={false}
                animationTime={0}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

ImageZoomable.defaultProps = {
  ...Image.defaultProps,
  overrides: {},
  zoom: 2
};

ImageZoomable.propTypes = {
  ...Image.propTypes,
  overrides: {},
  zoom: PropTypes.number.isRequired
};

export default ImageZoomable;
