import firebase from "../Config/firebase";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";

function Registro() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: "onChange" });
    const navigate = useNavigate();
    const onSubmit = async (data) => {

        try {
            const authentication = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
            if (authentication.user.uid) {
                const doc = await firebase.firestore().collection("users").add({ nombre: data.nombre, apellido: data.apellido, id: authentication.user.uid });
                doc && navigate("/");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <FormControl type="text" {...register("nombre", { required: true })}></FormControl>
                    <Form.Text className="text-muted">{errors.nombre && <span>Nombre es obligatorio</span>}</Form.Text>

                    <Form.Label>Apellido</Form.Label>
                    <FormControl type="text" {...register("apellido", { required: true })}></FormControl>
                    <Form.Text className="text-muted">{errors.apellido && <span>Apellido es obligatorio</span>}</Form.Text>

                    <Form.Label>Email</Form.Label>
                    <FormControl type="text" {...register("email", { required: true })}></FormControl>
                    <Form.Text className="text-muted">{errors.email && <span>Email es obligatorio</span>}</Form.Text>

                    <Form.Label>Password</Form.Label>
                    <FormControl type="password" {...register("password", { required: true, minLength: 8 })}></FormControl>
                    <Form.Text className="text-muted">
                        {errors.password && <span>Password es obligatorio</span>}
                        {errors.password?.type === "minLength" && <span>Minimo 8 caracteres</span>}
                    </Form.Text>
                    <Button variant="primary" type="submit">Registro</Button>
                </Form.Group>
            </Form>
        </>
    );

}


export default Registro;