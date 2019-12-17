# `commerce-ui` roadmap

`commerce-ui` is a UI framework for building e-commerce web app in React. Key advantages:

1. **Lightning fast.** Page Speed Insights result by default is exceptional without visual limitations for designers.
2. **Quick and easy to code.** Today building React web app for e-commerce is full-blown software project. It's ridiculous and we want to make this 100x more approachable.
3. **Platform-independent.** Write UI theme once, connect to any e-commerce platform.
4. **Not limiting designers.** Framework doesn't enforce how button looks or anything like this. We make it possible to make components look as creative and fresh as designer wants. However, we add limitations that assure that accessibility and UX are preserved.
5. **Accessible.**

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

For now we're keeping Shopify and Mock integrations.

#### Image

✅ simple format with `width`, `height`, `originalSrc` and `altText`.

Images might have variants like panoramic, square etc. For now, this is taken care of on the fly by imgix or similar 3rd party services. However, the future is that content editor can manually correct specific image variant (like square) so that it looks good. In such case variants should come from backend, not be calculated live in frontend.

Todo:

- extend `Image` schema to allow for getting manual crops and variants from CMS

#### Product

✅ simple format of `Product` from Shopify ready.

#### Collection

✅ simple format of `Collection` from Shopify ready.

#### Search

Todo:

- think about extending the schema format so that it takes care of everything that Algolia takes care of (hits, highlights etc)
- unified search syntax aka search syntax from Shopify, searching by mutliple criteria

#### Checkout

Todo:

- build a schema for how `CheckoutLineItem` and `Checkout` objects look like.

##### Hook

We must build a hook `useCheckout` that allows for modifying and reading `Checkout` easily.

It should make it super trivial to:

- add / remove items from cart
- batch modify cart (remove all items, add multiple items at once)
- manage optimistic updates and keep checkout local state and server state so that we can go optimistic or not without banging our head on the wall
- manage for updates (shipping address, shipping method, payment).
- partial validations. It should be possible to partially update `Checkout` object and validate only the fields that are available in the query.

#### Order

`Order` object.

#### Account

Account related objects

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
