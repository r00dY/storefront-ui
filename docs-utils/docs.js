import Markdown from "react-markdown";
import React from "react";
import Prism from "prismjs";

/** @jsx jsx */
import {css, jsx} from "@emotion/core";

function Container(props) {
    return <div css={css`
        position: relative;
        max-width: 700px;
        margin-left: 5vw;
    `}>
        {props.children}
    </div>
}

class CodeBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return <Container>
            <div style={{maxHeight: "600px", overflow: "auto"}}>
                <pre style={{margin: 0}}><code className="language-javascript">{this.props.code}</code></pre>
            </div>
        </Container>
    }
}

function Example(props) {
    let component = React.createElement(props.component);

    return <div style={{backgroundColor: "rgb(245, 245, 245)", padding: 0, margin: 0, paddingBottom: "20px"}}>
        { props.fullWidth ? <div style={{padding: "20px 0"}}>{component}</div> : <Container><div style={{padding: "20px 0"}}>{component}</div></Container> }
        { props.code && <CodeBlock code={props.code}/>}
    </div>
}

function md(strings, ...keys) {
    let jsxArray = [];

    strings.forEach((string, index) => {

        jsxArray.push(<Container key={`s${index}`}><Markdown>{string}</Markdown></Container>);

        if (keys[index]) {
            jsxArray.push(<div key={`k${index}`}>{keys[index]}</div>)
        }

    });

    return <div>
        {jsxArray}
    </div>
}

export {
    md,
    Container,
    CodeBlock,
    Example
}
