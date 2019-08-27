import React from "react";
import { ApolloConsumer, Query } from "react-apollo";
import Product from "./mockComponents/Product";
import { getProductQuery, productFragmentQuery } from "./graphql/queries";
import addVariantToCart from "../actions/addVariantToCart";
import { useQuery } from "react-apollo-hooks";
import { getProductsQuery } from "../graphql/queries";

class ProductComponent extends React.Component {
  render() {
    const { data, error, loading } = useQuery(
      getProductsQuery(selectedFilters)
    );

    return (
      <ApolloConsumer>
        {client => {
          const cachedElement = client.readFragment({
            fragment: productFragmentQuery,
            id: `Product:${this.props.router.query.id}`
          });

          return (
            <Query
              query={getProductQuery}
              variables={{ id: this.props.router.query.id }}
            >
              {({ loading, error, data }) => {
                if (loading) {
                  return cachedElement ? (
                    <Product
                      addVariantToCart={() => {}}
                      key={cachedElement.id.toString()}
                      product={cachedElement}
                    />
                  ) : (
                    "Loading..."
                  );
                }
                if (error) return `Error! ${error.message}`;

                return (
                  <Product
                    addVariantToCart={(id, quantity) =>
                      addVariantToCart(
                        client,
                        id,
                        quantity,
                        this.props.checkoutId
                      ).then(data => alert("Product added to cart."))
                    }
                    key={data.node.id.toString()}
                    product={data.node}
                  />
                );
              }}
            </Query>
          );
        }}
      </ApolloConsumer>
    );
  }
}

export default ProductComponent;
