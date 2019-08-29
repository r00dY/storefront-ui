import React, { useState } from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import { rslin } from "responsive-helpers";

import CollectionPage from "./collection";

const CategoryPage = props => <CollectionPage isCategory />;

CategoryPage.tabbar = 1;

export default CategoryPage;
