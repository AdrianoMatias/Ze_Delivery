import React, { Component, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Container from './Container';
import Header from './Header';
import Footer from './Footer';
import { List } from '../pages/Product/styles';


class ProductList extends Component {

    renderProductlist = () => (
         <List>
            { this.props.products.poc.products.map(product => (
             <section key={product.title}>
                <div className="item">{product.title}</div>
                <div className="item">{product.productVariants[0].price}</div>
                  
                <button className="btnRemove">Remover</button>
                <button>Adicionar</button>
             </section>
            )
          )
            }
        </List>      
       )
  
    render() {
      const { products } = this.props;
      
      return (
        <Fragment>  
          <Header />
          <Container> 
            { products.loading 
              ? <p>Carregando...</p>
              : this.renderProductlist()
            }
          </Container>
          <Footer />
        </Fragment> 
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