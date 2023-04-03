import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getById, updateProduct } from "../Services/itemServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";

function EditarProducto() {

    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        const request = async () => {
            try {
                const producto = await getById(id);

                setValue("title", producto.title);
                setValue("price", producto.price);
                setValue("descripcion", producto.descripcion);
                setValue("quantity", producto.quantity);
                setValue("amount", producto.amount);
                setValue("seller", producto.seller);
                setValue("sku", producto.sku);
                setValue("imagen", producto.imagen);

            } catch (e) {
                console.log(e);
            }
        };
        request();
    }, [id]);

    const onSubmit = async (data) => {

        try {
            const update = updateProduct(id, data);
            update && navigate("/home");

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

                    <Form.Label>Cantidad de cuotas</Form.Label>
                    <FormControl type="text" {...register("amount")}></FormControl>

                    <Form.Label>Vendedor</Form.Label>
                    <FormControl type="text" {...register("seller")}></FormControl>

                    <Form.Label>Descripción</Form.Label>
                    <FormControl type="text" {...register("descripcion")}></FormControl>

                    <Form.Label>SKU</Form.Label>
                    <FormControl type="text" {...register("sku")}></FormControl>

                    <Form.Label>Imagen</Form.Label>
                    <FormControl type="text" {...register("imagen")}></FormControl>

                    <Button variant="primary" type="submit">Guardar</Button>
                </Form.Group>
            </Form>
        </>
    );

}


export default EditarProducto;