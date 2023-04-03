import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../Services/itemServices";
import '../Components/Item.css';
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Detalle() {

  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [descripcion, setDescripcion] = useState({});
  const [comprar, setComprar] = useState(false);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  useEffect(() => {

    const detalleProducto = async () => {
      try {
        const producto = await getById(id);
        setProducto(producto);

      } catch (e) {
        console.log(e);
      }
    };
    detalleProducto();
  }, [id]);


  if (comprar) {
    return (<div>Gracias por su compra!</div>);
  } else {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>
              {producto.descripcion}
            </Card.Text>
            <Card.Text>
              Precio: {producto.price}
            </Card.Text>
            <Card.Text>
              SKU: {producto.sku}
            </Card.Text>
            <div className="boton">
              <Button variant="primary" onClick={() => setComprar(true)}>Comprar</Button>
              <div className="boton">
                <Button variant="primary" onClick={() => navigate(`/editarProducto/${id}`)}>Editar producto</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }

}

export default Detalle;