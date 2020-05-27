import React from 'react';
import { FaSpinner, FaPlus } from 'react-icons/fa';
// import { UseQuery, useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
//import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton } from '../Main/styles';



export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newEnd: '',
            products: [],
            loading: false,
        }
    }


   handleInputchange = (e) =>  {
       this.setState({ newEnd: e.target.value });
   }

   handleSubmit = async (e) => {
       e.preventDefault();

       const token = 'pk.eyJ1IjoiYWRyaWFub21hdGlhcyIsImEiOiJja2FwOTFqeWQyYjFoMnpxaHB4b3N2ejJtIn0.CChV3PbKqDCMW6NCdYSnRQ';

       const { newEnd } = this.state;

       this.setState({ loading: true });

       //Buscar na api de geolocalização e converter lat e long para endereço

       const response = await api.get(`/${newEnd}.json?access_token=` + token);

       console.log(response)

      
       this.setState({
           newEnd: '',
           loading: false
       });
   }

   
   render(){
    const { newEnd, loading } = this.state;  

    return (          
        <Container>
              <h1>
                Zé delivery
              </h1>
              <Form onSubmit={this.handleSubmit} >
                <input 
                    type="text"
                    placeholder="Insira seu endereço e número"
                    value={newEnd}
                    onChange={this.handleInputchange}
                />

                <SubmitButton loading={loading}>
                    {loading ? (
                    <FaSpinner color="#FFF" size={14} />
                    ) : (
                    <FaPlus color="#FFF" size={14} />
                    )}
                </SubmitButton>

                {/* <List>
                {products.map((product) => (
                    <li key={product.id}>
                    <span>{product.title}</span>
                    <Link to={`/products/${encodeURIComponent(product.title)}`}>
                        Detalhes
                    </Link>
                    </li>
                ))}
                </List> */}
                
                {/* <Link to={`/products${encodeURIComponent(products.name)}`}  style={{ textDecoration: 'none', color: "#000", border: "2px solid #eee", marginLeft: "10px", background: "#eee" }}>
                    <p>prosseguir</p>
                </Link>  */}
              </Form>    
        </Container>
            
        );
    }
}

