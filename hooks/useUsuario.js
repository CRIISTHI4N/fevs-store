import { useContext } from "react";
import UsuarioContext from "@/context/usuarioContext";

export const useUsuario = () => {
    return useContext(UsuarioContext);
}