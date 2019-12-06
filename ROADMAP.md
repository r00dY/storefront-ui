# `commerce-ui` roadmap

`commerce-ui` is a UI framework for building e-commerce web app in React. Key advantages:

1. **Lightning fast.** Page Speed Insights result by default is exceptional without visual limitations for designers.
2. **Quick and easy to code.** Today building React web app for e-commerce is full-blown software project. It's ridiculous and we want to make this 100x more approachable.
3. **Platform-independent.** Write UI theme once, connect to any e-commerce platform.
4. **Not limiting designers.** Framework doesn't enforce how button looks or anything like this. We make it possible to make components look as creative and fresh as designer wants. However, we add limitations that assure that accessibility and UX are preserved.

The project consists of 2 parts.

#### 1. Unified Data Layer

We standardize the format of e-commerce data and how this data is retrieved from underlying platform.

For example, no matter which platform you use, Shopify, Magento or WooCommerce, `Product` looks exactly the same:

```javascript
// to do
{
  id: "1234",
  title: "Socks",
  options: ...
}
```

This allows for building a theme **without** thinking of underlying platform.

##### Extendability

Every standardized object like `Product`, `ProductVariant`, `Image` can be easily extended with custom fields so that you never lose flexibility of a custom build.

#### 2. Component Library specific for e-commerce

A component library:

1. e-commerce specific (checkout, account, product page, etc)
2. renderless, extremely visually customizable
3.

## Roadmap for Unified Data Layer

API (with mock implementation)

1. Products (format, fetching)
2. Collections (format, fetching)
3. Search
4. Checkout (cart management)
5. Checkout (personal info management, shipping and payments)
6. Account (personal info management, addresses, payment methods)
7. Images

Integrations

1. Shopify

## Roadmap for Component Library

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.
