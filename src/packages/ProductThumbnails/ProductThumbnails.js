import React from "react";
import SwipeableItemsContainer from "../SwipeableItemsContainer/SwipeableItemsContainer";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { rs } from "responsive-helpers";

const ThumbsVerticalAutoheightItem = styled.div`
  &:not(:last-child) {
    ${props => rs(props.gutter).css("margin-bottom")}
  }
`;

class ProductThumbnails extends React.Component {
  constructor(props) {
    super(props);

    this.swiperRef = React.createRef();
    this._onClick = this._onClick.bind(this);
  }

  _onClick(n) {
    if (this.props.onClick) {
      this.props.onClick(n);
    }
  }

  render() {
    let items = this.props.images.map((image, index) => (
      <div
        key={index}
        onClick={() => this._onClick(index)}
        style={{ cursor: "pointer" }}
      >
        {this.props.thumbnailComponent(
          image,
          this.props.active === index,
          index
        )}
      </div>
    ));

    if (this.props.mode === "vertical-autoheight") {
      return (
        <div style={{ position: "relative" }}>
          {items.map((item, index) => (
            <ThumbsVerticalAutoheightItem
              key={index}
              gutter={this.props.gutter}
            >
              {item}
            </ThumbsVerticalAutoheightItem>
          ))}
        </div>
      );
    }

    return (
      <SwipeableItemsContainer
        ref={this.swiperRef}
        items={items}
        mode={this.props.mode}
        gutter={this.props.gutter}
        itemsInRow={this.props.itemsInRow}
        itemSize={this.props.itemSize}
        swiper={this.props.mode === "horizontal"}
      />
    );
  }
}

ProductThumbnails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
  mode: PropTypes.oneOf(["horizontal", "vertical", "vertical-autoheight"])
    .isRequired,
  thumbnailComponent: PropTypes.func.isRequired,
  gutter: PropTypes.any,
  active: PropTypes.number,
  onClick: PropTypes.func
};

ProductThumbnails.defaultProps = {
  gutter: 0
};

export default ProductThumbnails;
