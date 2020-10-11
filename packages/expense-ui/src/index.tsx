import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

const rootElement = document.querySelector('#root');

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, rootElement);