import './Item.css';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function Item({ id, title, price, quantity, amount, seller, descripcion, sku, imagen }) {

      return (
            <>
                  <Carousel.Item>
                        <img className="d-block w-100" src={imagen} alt="First slide" />
                        <Carousel.Caption>
                              <h3>{title}</h3>
                              <p> {descripcion}</p>
                              <p> {price}</p>
                              <p> {sku}</p>
                              <p> {quantity}</p>
                              <p> {amount}</p>
                              <p> {seller}</p>
                              <Link to={`/detalle/${id}`}>Ver Detalle</Link>
                        </Carousel.Caption>
                  </Carousel.Item>
            </>
      );

}

export default Item;