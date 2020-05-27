import React, { Fragment } from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import apolloClient from '../services/apollo';

function App() {

  return (
    <Fragment>
     <BrowserRouter>
        <ApolloProvider client={apolloClient}>
          <div className="App">
            <GlobalStyle />
            <Routes />
          </div>
        </ApolloProvider>
      </BrowserRouter>
    </Fragment>  
  );
}

export default App;