import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Detalle from "../Pages/Detalle";
import Registro from "../Pages/Registro";
import Login from "../Pages/Login";
import NuevoProducto from "../Pages/NuevoProducto";
import EditarProducto from "../Pages/EditarProducto";
import AuthProvider from "../Context/AuthContext";
import NavBar from "../Components/NavBar";


function Index() {
  return (
   
   <AuthProvider>
     <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>}/> 
        <Route path="/detalle/:id" element={<Detalle />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Login />} />
        <Route path="/crearProducto" element={<NuevoProducto />} />
        <Route path="/editarProducto/:id" element={<EditarProducto />} />
      </Routes>
      </AuthProvider>
   
  );
}

export default Index;


