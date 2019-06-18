import React, { Component, Fragment } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
  //STATE
  state = {
    productos: [
      {
        id: 1,
        name: "Camisa ReacjJS",
        precio: 30
      },
      {
        id: 2,
        name: "Camisa Vuejs",
        precio: 40
      },
      {
        id: 3,
        name: "Camisa Angular",
        precio: 50
      },
      {
        id: 4,
        name: "Camisa Django",
        precio: 60
      }
    ],
    totalCarrito: 500
  };

  //Elementos de React
  componentDidMount() {
    //   Esta listo
    console.log(1);
  }
  componentWillMount() {
    //   Antes que este listo
    console.log(2);
  }
  componentWillUpdate() {
    //   Se actualizo
    console.log(3);
  }
  componentWillUnmount() {
    //   Se fue
    console.log(4);
  }
  //Elementos Propios


  //RENDER
  render() {
    console.log(5);
    const { productos } = this.state;

    return (
      <Fragment>
        <h1>Lista de productos</h1>
        {productos.map(productos => (
          <Producto key={productos.id} producto={productos} />
        ))}
      </Fragment>
    );
  }
}

export default ListaProductos;
