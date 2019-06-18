import React, { Fragment } from "react";

const Producto = ({ producto }) => (
    <Fragment>
      <h1>
        {producto.name}
      </h1>
      <p>
       $ {producto.precio}
      </p>
    </Fragment>
  );

  export default Producto;
