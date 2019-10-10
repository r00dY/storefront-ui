import { connectHits } from "react-instantsearch-core";
import { css } from "@emotion/core";
import { ProductCardTheme1 } from "../theme/ProductCard";
import { Grid, GridItem } from "storefront-ui/Grid";

const Hits = props => {
  return props.hits.map(hit => {
    return (
      <GridItem
        params={{ xs: 12, md: 8, lg: 8, xl: 6 }}
        key={hit.id}
        css={css`
          opacity: ${props.isLoading ? 0.3 : 1};
          transition: opacity 0.15s;
        `}
      >
        <ProductCardTheme1
          product={{
            ...hit,
            images: [{ src: [{ w: 300, h: 500, url: hit.image }], alt: "" }],
            price: { currencyCode: "PLN", amount: hit.price }
          }}
        />
      </GridItem>
    );
  });
};

const CustomHits = connectHits(Hits);

export default CustomHits;
