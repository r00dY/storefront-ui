import React from "react";
import PropTypes from "prop-types";
import "./Unwrapper.scss";

class Unwrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };
        this.hide = this.hide.bind(this);
    }

    hide() {
        this.setState({
            isHidden: true
        });
    }

    render() {
        if (!this.state.isHidden) {
            let homeUrl =
                process.env.NODE_ENV === "production"
                    ? "/storybook-static/"
                    : "/";
            return (
                <div className="Unwrapper">
                    <a
                        href={`iframe.html?selectedKind=${
                            this.props.componentName
                        }&selectedStory=${this.props.storyName}`}
                        className={"Unwrapper__go"}
                    >
                        unwrap story
                    </a>
                    <a href={homeUrl} className={"Unwrapper__home"}>
                        home
                    </a>
                    <button
                        className={"Unwrapper__hide"}
                        onClick={this.hide.bind(this)}
                    >
                        hide
                    </button>
                </div>
            );
        } else {
            return null;
        }
    }
}
Unwrapper.propTypes = {
    componentName: PropTypes.string.isRequired,
    storyName: PropTypes.string.isRequired
};

export default Unwrapper;
