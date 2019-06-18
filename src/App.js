import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';

function App() {
  const date = new Date().getFullYear();
  return (
   <Fragment>
     <Header  
     title="Tienda virtual"
     />
    <ListaProductos />
     <Footer 
     date={date} text="Este es el pie de pagina" 
     />
   </Fragment>
  );
}

export default App;

