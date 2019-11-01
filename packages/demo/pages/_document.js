import "../global-config";

import Document, { Html, Head, Main, NextScript } from "next/document";

import Device from "@commerce-ui/core/Device";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    if (ctx.req) {
      Device.setUserAgent(ctx.req.headers["user-agent"]);
    }

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/normalize.css" />
          <link rel="stylesheet" type="text/css" href="/static/global.css" />
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
