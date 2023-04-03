import { useForm } from "react-hook-form";
import firebase from "../Config/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl } from "react-bootstrap";

function Login() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { handleLogin } = useAuthContext();

  const onSubmit = async (data) => {
    try {
      const respLogin = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
      if (respLogin) {
        handleLogin();
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <FormControl type="text" {...register("email", { required: true })}></FormControl>
          <Form.Text className="text-muted">{errors.email && <span>Email es obligatorio</span>}</Form.Text>

          <Form.Label>Password</Form.Label>
          <FormControl type="password" {...register("password", { required: true })}></FormControl>
          <Form.Text className="text-muted">{errors.password && <span>Password es obligatorio</span>}</Form.Text>

          <Button variant="primary" type="submit">Ingresar</Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default Login;