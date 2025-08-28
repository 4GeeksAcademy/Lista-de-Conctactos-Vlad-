import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";


function AddUser() {
const {store, dispatch} =useGlobalReducer()
const {nombre} = useParams()


console.log(nombre)

return (
    <div>
        <p>Probando {nombre}</p>
    </div>
)

}

export default AddUser