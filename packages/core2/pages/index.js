import React from "react";
import Page from "../docs-utils/Page";
import { md } from "../docs-utils/docs";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const content = md`
# Introduction

\`ecommerce-ui\` is an React UI framework for building custom e-commerce storefronts in PWA (single page application) technology.

Your developers can integrate it with almost any e-commerce tech:

- Magento
- Shopify
- BigCommerce
- PrestaShop
`;

export default () => <Page>{content}</Page>;
