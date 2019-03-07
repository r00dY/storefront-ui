import React from "react";
import "./Footer.scss";
import InlineSVG from "svg-inline-react";
import ExpandLess from "../../svg/outline-expand_less-24px.svg";
import animateScrollTo from "animated-scroll-to";

console.log(ExpandLess);

// import LazyAssetWrapper from "../LazyAssetWrapper/LazyAssetWrapper";

class Footer extends React.Component {
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
            <div className={"Footer"}>
                <div className="container">
                    <div className="Footer__scrollerWrapper">
                        <button
                            type={"button"}
                            className="Footer__scroller"
                            onClick={this.scrollTop}
                        >
                            <span>Back to top </span>
                            <InlineSVG src={ExpandLess} raw />
                        </button>
                    </div>
                    <div className="Footer__rule" />
                    <div className="row">
                        <div className="Footer__col">
                            <div className="Footer__link">
                                <a href="#">About COS</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Customer Service</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Delivery Information</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Returns & Refunds</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Product Care</a>
                            </div>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__link">
                                <a href="#">Store Locator</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Careers</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Press</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                        <div className="Footer__col">
                            <div className="Footer__link">
                                <a href="#">Facebook</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Pinterest</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Intstagram</a>
                            </div>
                            <div className="Footer__link">
                                <a href="#">Spotify</a>
                            </div>
                        </div>
                        <div className="Footer__col Footer__col--last">
                            <div className="Footer__link">
                                <a href="#">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Footer.propTypes = {
// };

export default Footer;
