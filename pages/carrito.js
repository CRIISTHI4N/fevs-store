import { Layout } from "@/components/Layout"
import Image from "next/image"
import { useUsuario } from "@/hooks/useUsuario"
import Link from "next/link";

export default function Carrito() {

    const { setCarrito, carrito } = useUsuario();

    const purchase = carrito.map(c => c?.router);

    const eliminarPoducto = (id, router) => {
        const carritoActualizado = carrito.filter(c => c.id !== id);
        setCarrito(carritoActualizado);

        localStorage.setItem(`${router}`, false);
    }

    return (
        <Layout>
            <main className="mx-[5%] mt-[115px]">
                <h2 className="text-2xl my-10 font-medium">Mi carrito de compras</h2>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                    <div className="flex flex-col gap-8 order-2 md:order-1">
                        {
                            carrito.map(c => (
                                <div
                                    className="flex flex-col lg:flex-row gap-3 lg:gap-7"
                                    key={c?.id}
                                >
                                    <Image
                                        className="rounded-sm object-cover aspect-square"
                                        src={`/prendas/${c?.src}`}
                                        alt={`${c?.router}`}
                                        width={200}
                                        height={200}
                                    />

                                    <div className="flex flex-col justify-between items-start">

                                        <div>
                                            <p className="text-2xl">{c?.name}</p>
                                            <p className="text-xl">$ {c?.price}.00</p>
                                        </div>


                                        <button
                                            className="flex gap-2 bg-red-600 py-2 px-5 rounded-full text-white mt-5 lg:mt-0"
                                            onClick={() => eliminarPoducto(c?.id, c?.router)}
                                        >

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                            Eliminar
                                        </button>
                                    </div>

                                </div>
                            ))
                        }



                    </div>


                    <div className="order-1 md:order-2 md:ml-7 lg:ml-0">
                        <h3 className="text-2xl">Detalles de la compra</h3>
                        <p className="text-xl">
                            Total:
                            $ {carrito.reduce((total, c) => total + c?.price, 0)}.00
                        </p>

                        <Link
                            href={`https://api.whatsapp.com/send?phone=593991068664&text=Hola,%20quisiera%20adquirir%20las%20siguientes%20prendas:%20${purchase}.%20Total:%20${carrito.reduce((total, c) => total + c?.price, 0)}.00`}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="inline-block text-xl mt-4 text-white bg-stone-900 py-2 px-5 rounded-full"
                        >
                            Comprar
                        </Link>
                    </div>
                </div>


            </main>
        </Layout>
    )
}
