import Document, { Html, Head, Main, NextScript } from "next/document";

import Device from "storefront-ui/Device";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    Device.setUserAgent(ctx.req.headers["user-agent"]);

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
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
