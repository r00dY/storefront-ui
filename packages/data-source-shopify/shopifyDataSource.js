new ApolloClient({
  connectToDevTools: process.browser,
  link: new HttpLink({
    uri: "http://localhost:4000" // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
  clientState: { defaults: {}, resolvers: {} }
});
