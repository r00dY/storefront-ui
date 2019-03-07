import React from "react";
import "./MenuBarNike.scss";
// import PropTypes from "prop-types";
import InlineSVG from "svg-inline-react";
import Logo from "../../svg/logo_nike.svg";
import Search from "../../svg/outline-search-24px.svg";

// import LazyAssetWrapper from "../LazyAssetWrapper/LazyAssetWrapper";

class MenuBarNike extends React.Component {
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
            console.log("true");
        } else {
            if (this.state.isScrolledDown && window.scrollY <= 80) {
                console.log("false");

                this.setState({
                    isScrolledDown: false
                });
            }
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        let _classes = ["MenuBarNike"];

        if (this.state.isScrolledDown) {
            _classes.push("MenuBarNike--isScrolledDown");
        }

        return (
            <div className={_classes.join(" ")}>
                <div className="MenuBarNike__inner">
                    <div className="MenuBarNike__innerLeft">
                        <div className="MenuBarNike__logo">
                            <a href="#">
                                <InlineSVG src={Logo} raw />
                            </a>
                        </div>
                    </div>
                    <div className="MenuBarNike__innerCenter">
                        <div className="MenuBarNike__link">
                            <a href="#">Men</a>
                        </div>
                        <div className="MenuBarNike__link">
                            <a href="#">Women</a>
                        </div>
                        <div className="MenuBarNike__link">
                            <a href="#">Kids</a>
                        </div>
                        <div className="MenuBarNike__link">
                            <a href="#">Customize</a>
                        </div>
                        <div className="MenuBarNike__link">
                            <a href="#">Gifts</a>
                        </div>
                    </div>
                    <div className="MenuBarNike__innerRight">
                        <button
                            type={"button"}
                            className={"MenuBarNike__button"}
                        >
                            <InlineSVG src={Search} raw /> Search
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

// MenuBarNike.propTypes = {
// };

export default MenuBarNike;
