import withApollo from 'next-with-apollo';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
 
const App = ({ Component, pageProps, apollo }) => (
  <ApolloProvider client={apollo}>
    <Component {...pageProps} />
  </ApolloProvider>
);
 
export default withApollo(({ initialState }) => {
  return new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache().restore(initialState || {})
  });
})(App);