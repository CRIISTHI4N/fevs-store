import { createContext, useEffect, useState } from "react";

export const UsuarioContext = createContext();


export const UsuarioProvider = ({ children }) => {

    const [showNavOptions, setShowNavOptions] = useState(false);
    const [clothesMen, setClothesMen] = useState(false);
    const [clothesWomen, setClothesWomen] = useState(false);
    const [clothesChil, setClothesChil] = useState(true);
    const [carrito, setCarrito] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem('prendas')) ?? [] : []);

    const changeCarrito = (prenda) => {

        if (Object.keys(carrito).length > 0) {

            carrito.map(c => {

                if (c.id === prenda.id) {
                    setCarrito([...carrito])
                    return
                } else {
                    setCarrito([...carrito, prenda])
                }
            })

        } else {
            setCarrito([...carrito, prenda])
        }
    }

    useEffect(() => {
        localStorage.setItem('prendas', JSON.stringify(carrito));
    }, [carrito])

    const changeNavOpt = () => {
        setShowNavOptions(!showNavOptions)
    }

    return (
        <UsuarioContext.Provider
            value={{
                showNavOptions,
                clothesMen,
                clothesWomen,
                clothesChil,
                carrito,
                setShowNavOptions,
                changeNavOpt,
                changeCarrito,
                setCarrito
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;