import Document, { Html, Head, Main, NextScript } from "next/document";
// import { Provider as StyletronProvider } from "styletron-react";
// import { styletron } from "../styletron";

import Device from "../src/packages_old/Device";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (ctx.req) {
      // in case of browser environment, do not call this
      Device.setUserAgent(ctx.req.headers["user-agent"]);
    }

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };

    // const page = props.renderPage(App => props => (
    //   <StyletronProvider value={styletron}>
    //     <App {...props} />
    //   </StyletronProvider>
    // ));
    // // const stylesheets = styletron.getStylesheets() || [];
    // return { ...page, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/global.css" />
          <link rel="stylesheet" type="text/css" href="/static/prism.css" />

          {/*{this.props.stylesheets.map((sheet, i) => (*/}
          {/*<style*/}
          {/*className="_styletron_hydrate_"*/}
          {/*dangerouslySetInnerHTML={{ __html: sheet.css }}*/}
          {/*media={sheet.attrs.media}*/}
          {/*data-hydrate={sheet.attrs["data-hydrate"]}*/}
          {/*key={i}*/}
          {/*/>*/}
          {/*))}*/}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
