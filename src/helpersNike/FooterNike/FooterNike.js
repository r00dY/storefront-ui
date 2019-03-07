import React from "react";
import "./FooterNike.scss";
// import PropTypes from "prop-types";
import InlineSVG from "svg-inline-react";
import ExpandLess from "../../svg/outline-expand_less-24px.svg";
import animateScrollTo from "animated-scroll-to";

// import LazyAssetWrapper from "../LazyAssetWrapper/LazyAssetWrapper";

class FooterNike extends React.Component {
    scrollTop() {
        console.log("go");
        let newScrollOffset = 0;
        //
        const options = {
            // element: ,
            speed: 3000
            // horizontal: true
        };

        animateScrollTo(newScrollOffset, options);
    }
    render() {
        return (
            <div className={"FooterNike"}>
                <div className="container">
                    <div className="FooterNike__scrollerWrapper">
                        <button
                            type={"button"}
                            className="FooterNike__scroller"
                            onClick={this.scrollTop}
                        >
                            <span>Back to top </span>
                            <InlineSVG src={ExpandLess} raw />
                        </button>
                    </div>
                </div>
                <div className="FooterNike__bottom">
                    <div className={"container "}>
                        <div className="row">
                            <div className="FooterNike__col">
                                <div className="FooterNike__link">
                                    <a href="#">About Nike</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Customer Service</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Delivery Information</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Returns & Refunds</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Product Care</a>
                                </div>
                            </div>
                            <div className="FooterNike__col">
                                <div className="FooterNike__link">
                                    <a href="#">Store Locator</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Careers</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Press</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                            <div className="FooterNike__col">
                                <div className="FooterNike__link">
                                    <a href="#">Facebook</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Pinterest</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Intstagram</a>
                                </div>
                                <div className="FooterNike__link">
                                    <a href="#">Spotify</a>
                                </div>
                            </div>
                            <div className="FooterNike__col FooterNike__col--last">
                                <div className="FooterNike__link">
                                    <a href="#">Subscribe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// FooterNike.propTypes = {
// };

export default FooterNike;
