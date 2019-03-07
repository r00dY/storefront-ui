import React from "react";
import "./MenuBarCOS.scss";
// import PropTypes from "prop-types";
import InlineSVG from "svg-inline-react";
import Logo from "../../svg/logo_cos.svg";
import Search from "../../svg/outline-search-24px.svg";

// import LazyAssetWrapper from "../LazyAssetWrapper/LazyAssetWrapper";

import Container from "../../core-main/Container/Container";

class MenuBarCOS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolledDown: false
        };
    }

    handleScroll() {
        if (this.state.isScrolledDown === false && window.scrollY > 80) {
            this.setState({
                isScrolledDown: true
            });
        } else {
            if (this.state.isScrolledDown && window.scrollY <= 80) {
                this.setState({
                    isScrolledDown: false
                });
            }
        }
    }
    componentDidMount() {
        // window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        // window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        let _classes = ["MenuBarCOS"];

        if (this.state.isScrolledDown) {
            _classes.push("MenuBarCOS--isScrolledDown");
        }

        return (
            <div className={_classes.join(" ")}>
                <Container layout={this.props.layout}>
                    <div className="MenuBarCOS__inner">
                        <div className="MenuBarCOS__innerLeft">
                            <div className="MenuBarCOS__logo">
                                <a href="#">
                                    <InlineSVG src={Logo} raw />
                                </a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">Women</a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">Men</a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">Kids and Baby</a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">Gifts</a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">COS × HAY</a>
                            </div>
                            <div className="MenuBarCOS__link">
                                <a href="#">Explore</a>
                            </div>
                        </div>
                        <div className="MenuBarCOS__innerRight">
                            <button
                                type={"button"}
                                className={"MenuBarCOS__button"}
                            >
                                <InlineSVG src={Search} raw />
                            </button>
                            <button
                                type={"button"}
                                className={"MenuBarCOS__button"}
                            >
                                Sign in
                            </button>
                            <button
                                type={"button"}
                                className={"MenuBarCOS__button"}
                            >
                                Shipping to: Poland
                            </button>
                            <button
                                type={"button"}
                                className={
                                    "MenuBarCOS__button MenuBarCOS__button--myBag"
                                }
                            >
                                My Bag
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

// MenuBar.propTypes = {
// };

export default MenuBarCOS;
