import { createTheme } from "storefront-ui/Theme";
import Layout from "storefront-ui/Layout";

const theme = createTheme({
  layout: new Layout({
    container: "90vw",
    gutter: 20,
    colNumber: 24
  }),
  borders: {
    useRoundedCorners: false
  }
});

export default theme;
