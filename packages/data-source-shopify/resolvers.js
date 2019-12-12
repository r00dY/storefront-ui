const collections = require("@commerce-ui/data-mock/collections");
const checkoutData = require("@commerce-ui/data-mock/checkout");
const products = require("@commerce-ui/data-mock/products");

const { gql } = require("apollo-boost");

// TODO: this is mock so far
const getPaginationResolver = function(items) {
  items = [...items] || [];

  return {
    edges: items.map(item => ({
      cursor: "imacursor",
      node: item
    })),
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false
    }
  };
};

function getChildField(field, fieldName) {
  return field.selectionSet.selections.find(x => x.name.value === fieldName);
}

function getNodeFromEdges(field) {
  const edges = getChildField(field, "edges");
  if (!edges) {
    return;
  }

  const node = getChildField(edges, "node");
  if (!node) {
    return;
  }

  return node;
}

function getNodeFromPaginatedField(field, fieldName) {
  const connection = getChildField(field, fieldName);
  if (!connection) {
    return;
  }

  return getNodeFromEdges(connection);
}

function getProductParams(field) {
  const _fields = {};

  const productNode = getNodeFromPaginatedField(field, "variants");
  if (productNode) {
    _fields["variants"] = {};
  }

  return { _fields };
}

function getCollectionParams(field) {
  const _fields = {};

  const productNode = getNodeFromPaginatedField(field, "products");
  if (productNode) {
    _fields["products"] = getProductParams(productNode);
  }

  return { _fields };
}

const resolvers = {
  // Product: {
  //     images(parent) {
  //         return getPaginationResolver(parent.images);
  //     },
  //
  //     variants(parent) {
  //         return getPaginationResolver(parent.variants);
  //     }
  // },

  Collection: {
    // images(parent) {
    //   return getPaginationResolver(parent.images);
    // },

    products(parent) {
      return parent.products;
      // return getPaginationResolver(parent.products);
    }
  },

  QueryRoot: {
    // productByHandle(parent, args, context) {
    //     return products.find(x => x.handle === args.handle);
    // },
    //
    // products: async (parent, args) => {
    //     return getPaginationResolver(products);
    // },

    collections: async (parent, args, context, info) => {
      const { dataSources } = context;

      const collectionNode = getNodeFromEdges(info.fieldNodes[0]);
      const params = getCollectionParams(collectionNode);

      const data = await dataSources.shopify.getCollections(params);
      return data.collections;
    },

    collectionByHandle: async (parent, args, context, info) => {
      console.log(info);

      return info.mergeInfo.delegateToSchema({
        schema: context.dataSources.shopify2.shopifySchema,
        operation: "query",
        fieldName: "collectionByHandle",
        // args: {
        //   userId: parent.id,
        // },
        context,
        info
      });

      // return null;
      // const data = await dataSources.shopify.getCollectionByHandle(args.handle);
      // return data.collectionByHandle;
    }
  }
};

module.exports = resolvers;
