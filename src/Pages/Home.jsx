import React, { useState, useEffect } from "react";
import './Home.css';
import { getAll } from "../Services/itemServices";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";



function Home() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll();
        setProductos(response);


      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, []);

  return (
    <div className="customDiv">
      <h1>Productos</h1>
      <Carousel style={{ width: "50%", margin: "auto" }} >
        {productos.map((producto) => (
          <Carousel.Item key={producto.id} >
            <img className="d-block" src={producto.data().imagen} alt="First slide" style={{ width: "50%" }} />
            <Carousel.Caption>
              <h3 className="h3">{producto.data().title}</h3>
              <p className="p"> {producto.data().price}</p>
              <p className="p"> {producto.data().descripcion}</p>
              <p className="p"> SKU: {producto.data().sku}</p>
              <Link to={`/detalle/${producto.id}`}>Ver Detalle</Link>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div >
  );

}


export default Home;