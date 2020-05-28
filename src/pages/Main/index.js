import React, { Fragment } from 'react';
//import { FaSpinner, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton } from '../Main/styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default class Main extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            newEnds:  '',
            products: [],
            loading: false,
        }
    }


   handleInputchange = (e) =>  {
       this.setState({ newEnd: e.target.value });
   }

   //Função que faz chamada com a api MAPBOX e mostra os dados no console log
   //Api MAPBOX de Geocoder direta, onde faz a conversão de endereço (texto) para coordenadas 
   handleSubmit = async (e) => {
       e.preventDefault();

       const token = 'pk.eyJ1IjoiYWRyaWFub21hdGlhcyIsImEiOiJja2FwOTFqeWQyYjFoMnpxaHB4b3N2ejJtIn0.CChV3PbKqDCMW6NCdYSnRQ';

       const { newEnd } = this.state;

       this.setState({ loading: true });

       const response = await api.get(`/${newEnd}.json?access_token=` + token);

       console.log(response.data.features)
      
       this.setState({
           newEnd: '',
           loading: false
       });
   }

   
   render(){
    const { newEnd, loading } = this.state;  

    return (  
           <Fragment> 
            <Header />       
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


                    <Link  type='submit'  to={`/products/${newEnd}`} 
                    
                        style={{ textDecoration: 'none', 
                                    color: "#FFF", 
                                    border: "2px solid #eee", 
                                    marginLeft: "10px", 
                                    background: "#eee" ,
                                    borderRadius: "4px",
                                    backgroundColor: "#2A5078",
                                    fontSize: "12px",
                                    padding: "5px"
                                }}
                                >

                        <p>Acessar Produtos</p>
                    </Link> 

                    {/* Botão que faz a requisição da api MAPBOX

                    <SubmitButton loading={loading}>
                        {loading ? (
                        <FaSpinner color="#FFF" size={14} />
                        ) : (
                        <FaPlus color="#FFF" size={14} />
                        )}
                    </SubmitButton> */}

                </Form>    
             </Container>
             <Footer />
        </Fragment>
         
        );
    }
}

