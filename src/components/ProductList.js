import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Container from '../components/Container';
import { List  } from '../pages/Product/styles';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEnd: {}
    };
  }
  
    renderProductlist = () => (
         <List>
            { this.props.products.poc.products.map(product => (
             <li key={product.id}>
                <p>{product.title}</p>
                <button>Remover</button>
             <button>Adicionar</button>
             </li>
            )
          )
            }
        </List>      
       )
  
    render() {
       const { products } = this.props;
      
      return (
        <Container> 
         { products.loading 
          ? <p>Carregando...</p>
          : this.renderProductlist()
        }
        </Container>
      );
    }
  }
  
  const ProductQuery = gql`
  query {
      poc(id:532) {
       id,
        products {
          title,
          productVariants {
            price
          }
        }
      }
    }
  `;
  
  export default graphql(ProductQuery, {
      name: 'products'
  })(ProductList);