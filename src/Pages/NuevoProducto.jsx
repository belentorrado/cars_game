import firebase from "../Config/firebase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";

function NuevoProducto() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        try {
            const newProduct = await firebase.firestore().collection("products").add(data);
            newProduct && navigate("/home");

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <FormControl type="text" {...register("title", { required: true })}></FormControl>
                    <Form.Text className="text-muted">{errors.title && <span>Nombre es obligatorio</span>}</Form.Text>

                    <Form.Label>Precio</Form.Label>
                    <FormControl type="text" {...register("price", { required: true })}></FormControl>
                    <Form.Text className="text-muted">{errors.price && <span>Precio es obligatorio</span>}</Form.Text>

                    <Form.Label>Cantidad de cuotas</Form.Label>
                    <FormControl type="text" {...register("quantity")}></FormControl>

                    <Form.Label>Cuota</Form.Label>
                    <FormControl type="text" {...register("amount")}></FormControl>

                    <Form.Label>Vendedor</Form.Label>
                    <FormControl type="text" {...register("seller")}></FormControl>

                    <Form.Label>Descripción</Form.Label>
                    <FormControl type="text" {...register("descripcion")}></FormControl>

                    <Form.Label>SKU</Form.Label>
                    <FormControl type="text" {...register("sku")}></FormControl>

                    <Form.Label>Imagen</Form.Label>
                    <FormControl type="text" {...register("imagen")}></FormControl>

                    <Button variant="primary" type="submit">Crear</Button>
                </Form.Group>
            </Form>
        </>
    );

}


export default NuevoProducto;