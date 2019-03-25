import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, GridItem } from "../Grid/Grid";
import { rs } from "responsive-helpers";
import SwipeableItemsContainer from "../SwipeableItemsContainer/SwipeableItemsContainer";
import ImageZoomable from "../Image/ImageZoomable";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

class ProductPhotos extends React.Component {
    constructor(props) {
        super(props);

        this.swiperRef = React.createRef();

        this._visibilityChange = this._visibilityChange.bind(this);
        this.goToPhoto = this.goToPhoto.bind(this);

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
        if (IntersectionObserver && this.props.mode === "grid") {
            this.observer = new IntersectionObserver(
                entries => {
                    this._visibilityChange(entries);
                },
                {
                    threshold: [
                        0,
                        0.1,
                        0.2,
                        0.3,
                        0.4,
                        0.5,
                        0.6,
                        0.7,
                        0.8,
                        0.9,
                        1
                    ]
                }
            );
            this.photoRefs.forEach(ref => {
                this.observer.observe(ref.current);
            });
        } else if (this.props.mode === "slider") {
            let slider = this.swiperRef.current.slider; // TODO: TEMPORARY! -> we're taking inside implementation detail of SwipeableItemsContainer (slider prop)

            slider.addEventListener("activeSlidesChange", () => {
                if (this._onActiveChange) {
                    this._onActiveChange(
                        slider.state.slides.findIndex(x => x.active)
                    );
                }
            });
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

    goToPhoto(n, animated) {
        if (this.props.mode === "grid") {
            let rect = this.photoRefs[n].current.getBoundingClientRect();

            window.scrollBy({
                top:
                    rect.top -
                    Math.max((window.innerHeight - rect.height) / 2, 0), // if bigger than window height then scroll to top of the photo; if smaller -> scroll so that it's centered in viewport
                left: 0,
                behavior: "smooth"
            });
        } else {
            let slider = this.swiperRef.current.slider; // TODO: TEMPORARY! -> we're taking inside implementation detail of SwipeableItemsContainer (slider prop)

            // if new active state is different from slider active state
            if (slider && n !== slider.state.slides.findIndex(x => x.active)) {
                slider.moveToSlide(n, animated);
            }
        }
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

        let component;

        if (this.props.mode === "grid") {
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

            component = (
                <Grid colNumber={12} gutter={gutter[0]}>
                    {items.map((item, index) => (
                        <GridItem
                            params={{ xs: 12 / this.props.gridLayout }}
                            key={index}
                        >
                            {item}
                        </GridItem>
                    ))}
                </Grid>
            );
        } else if (this.props.mode === "slider") {
            component = (
                <div style={{ position: "relative", height: "100%" }}>
                    <SwipeableItemsContainer
                        ref={this.swiperRef}
                        items={items}
                        mode={"horizontal"}
                        gutter={gutter[0]}
                        itemsInRow={1}
                        swiper={true}
                        onActiveChange={this.props.onActiveChange}
                    />
                    {this.props.children}
                </div>
            );
        }

        return (
            <div className={this.props.className} style={this.props.style}>
                {component}
            </div>
        );
    }
}

function useProductPhotos(photosRef) {
    const [active, setActiveRaw] = useState(0);

    const setActive = (n, animated) => {
        photosRef.current.goToPhoto(n, animated);
    };

    useEffect(() => {
        photosRef.current._onActiveChange = setActiveRaw;
    });

    return {
        active: active,
        setActive: setActive
    };
}

ProductPhotos.propTypes = {
    images: PropTypes.arrayOf(PropTypes.any).isRequired,
    mode: PropTypes.oneOf(["grid", "slider"]).isRequired,
    imageComponent: PropTypes.func.isRequired,
    gridLayout: PropTypes.oneOf([1, 2]),
    gutter: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.any),
        PropTypes.any
    ])
};

ProductPhotos.defaultProps = {
    mode: "grid",
    gridLayout: 1,
    gutter: 10,
    imageComponent: (image) => <ImageZoomable image={image} />
};

export default ProductPhotos;
export { useProductPhotos };
