import React from "react";
import PropTypes from "prop-types";
import "./AgileGrid.scss";

class AgileGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gridStyle: {},
            gridClasses: []
        };
        this.windowResizeListener = () => {
            this.setLayout();
        };
    }

    setLayout() {
        this.props.breakpoints.map((breakpoint, index) => {
            if (
                (window.innerWidth >= breakpoint.min &&
                    this.props.breakpoints[index + 1] === undefined) ||
                (window.innerWidth >= breakpoint.min &&
                    window.innerWidth < this.props.breakpoints[index + 1].min)
            ) {
                if (this.state.activeBreakpointIndex === index) {
                    return;
                }
                this.setState({
                    activeBreakpointIndex: index
                });

                let _gridClasses = ["AgileGrid"];

                switch (breakpoint.mode) {
                    case "slider":
                        _gridClasses.push("AgileGrid--isSlider");
                        if (breakpoint.snap) {
                            _gridClasses.push(
                                `AgileGrid--${breakpoint.snap}Snap`
                            );
                        }
                        if (breakpoint.includeGridMargins) {
                            _gridClasses.push(`AgileGrid--includeGridMargins`);
                        }
                        this.setState({
                            gridStyle: breakpoint.gridStyle,
                            gridClasses: _gridClasses.join(" ")
                        });
                        break;

                    case "grid":
                        _gridClasses.push("AgileGrid--isGrid");
                        if (breakpoint.visibleItems !== undefined) {
                            _gridClasses.push(
                                `AgileGrid--visibleItems${
                                    breakpoint.visibleItems
                                }`
                            );
                        }
                        this.setState({
                            gridStyle: breakpoint.gridStyle,
                            gridClasses: _gridClasses.join(" ")
                        });
                        break;
                }
            }
        });
    }

    componentDidMount() {
        this.setLayout();
        window.addEventListener("resize", this.windowResizeListener);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.windowResizeListener);
    }

    render() {
        return (
            <div
                className={this.state.gridClasses}
                style={this.state.gridStyle}
            >
                {this.props.children.map((item, index) => {
                    return (
                        <div className={"AgileGrid__item"} key={index}>
                            {item}
                        </div>
                    );
                })}
            </div>
        );
    }
}

AgileGrid.testOptions = {
    breakpoints: {
        mode: ["slider", "grid"]
    }
};

AgileGrid.propTypes = {
    children: PropTypes.array,
    breakpoints: PropTypes.array
};

export default AgileGrid;
