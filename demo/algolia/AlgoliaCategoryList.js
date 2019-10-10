import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import React from "react";
import CategoryCardCompact from "../theme/CategoryCardCompact";
import { Grid, GridItem } from "storefront-ui/Grid";

const CategoryList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
  createURL,
  categoryData
}) => {
  return items.map((item, index) => {
    const currentCategory = categoryData.find(
      category => category.title === item.label
    );
    return (
      <GridItem key={index} params={{ xs: 12, sm: 8, lg: 4 }}>
        <CategoryCardCompact
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
          image={{
            alt: name,
            src: [
              {
                url: currentCategory.image.src,
                w: 2667,
                h: 1000
              }
            ]
          }}
          text={currentCategory.title}
        />
      </GridItem>
    );
  });
};

const AlgoliaCategoryList = connectRefinementList(CategoryList);

export default AlgoliaCategoryList;
