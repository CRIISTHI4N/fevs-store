import { useEffect, useState } from "react"
import { Layout } from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { prendas } from "@/data/clothes"
import { useUsuario } from "@/hooks/useUsuario"

export default function Prenda() {

    let prenda;
    const router = useRouter();

    prendas.map(p => {

        if (p.router === router.asPath.substring(8)) {
            prenda = p
            return;
        }
    })

    const [like, setLike] = useState(false);
    const [shop, setShop] = useState(typeof window !== "undefined" ? JSON.parse(localStorage.getItem(`${prenda?.router}`)) : false);
    const [showImage, setShowImage] = useState('');

    const { carrito, setCarrito, changeCarrito } = useUsuario()

    const changeLike = (id) => {
        setLike(!like);
    }

    const changeShp = () => {
        setShop(!shop);
    }

    useEffect(() => {
        if (shop) {

            localStorage.setItem(`${prenda?.router}`, true)
            changeCarrito(prenda);

        } else {
            localStorage.setItem(`${prenda?.router}`, false)

            const carritoActualizado = carrito.filter(c => c.id !== prenda?.id)
            setCarrito(carritoActualizado);

        }

    }, [shop])

    useEffect(() => {
        setShop(JSON.parse(localStorage.getItem(`${prenda?.router}`)))
    }, [router])


    // useEffect(() => {
    //     if (like) {
    //         localStorage.setItem('like', like)

    //     } else {

    //         localStorage.setItem('like', like)
    //     }
    // }, [like])

    return (
        <Layout>

            {
                prenda?.id ?
                    <div className="mx-[10%] mt-[115px] xl:mx-[20%] grid grid-cols-1 xl:grid-cols-2 xl:w-[65%] gap-5">
                        <div className="flex flex-col lg:flex-row lg:items-start gap-7">

                            <div className="flex gap-4 lg:flex-col w-20">

                                {prenda?.galery.map(p => (

                                    < Image
                                        key={p?.img}
                                        className="rounded-sm object-cover aspect-square hover:cursor-pointer"
                                        src={`/prendas/${p?.img}`}
                                        alt={p?.img}
                                        width={150}
                                        height={100}
                                        data-set-sr={p?.img}
                                        onClick={(e) => setShowImage(e.target.dataset.setSr)}
                                    />
                                ))}
                            </div>


                            <Image
                                className="w-[80%] rounded-sm object-cover aspect-square"
                                src={`${showImage ? `/prendas/${showImage}` : `/prendas/${prenda?.src}`}`}
                                alt={prenda?.router}
                                width={500}
                                height={500}
                            />
                        </div>

                        <div>
                            <h2 className="text-2xl text-stone-900 font-medium">{prenda?.name}</h2>
                            <p className="text-xl">$ {prenda?.price}.00</p>

                            <p className="text-md my-5">Talla: {prenda?.size}</p>

                            <div className="flex items-start gap-3 flex-col">
                                <button
                                    className="text-black bg-white py-2 px-5 rounded-full border border-stone-900 flex items-center hover:bg-slate-300"
                                    onClick={() => changeShp()}
                                >
                                    {shop &&
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    }

                                    {shop ? 'Agregado' : 'Agregrar al carrito'}


                                </button>

                                {/* <button
                                        className="flex gap-3 text-white bg-stone-900 py-2 px-5 rounded-full"
                                        onClick={() => changeLike(prenda.id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={`${like ? 'red' : 'none'}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${like ? 'text-[red]' : 'text-white'}`}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        Fovaritos
                                    </button> */}
                            </div>


                            {/* <h2 className="text-2xl mt-5">Descripción</h2> */}

                            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias vero, aperiam laborum voluptatem, velit et voluptas doloribus accusantium nobis ab delectus placeat iure, culpa rem quisquam ullam asperiores. Odit, quaerat?</p> */}

                        </div>
                    </div>
                    :
                    <div className="mx-[10%] mt-[115px] xl:mx-[20%] xl:w-[65%]">
                        <p
                            className="text-2xl text-center py-12"
                        >
                            No existe esta prenda
                        </p>
                    </div>

            }

            <div className="mx-[5%]">
                <h2 className="text-2xl py-7">También podría gustarte</h2>

                <div
                    className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'
                >

                    <div className='relative'>
                        <Image
                            className='w-full rounded-sm object-cover aspect-square'
                            src={'/prendas/prenda_7.jpg'}
                            alt='prenda_7'
                            width={1000}
                            height={1000}
                        />

                        <div className='absolute w-full p-10 bottom-0 text-white font-medium'>

                            <p
                                className='text-xl'
                                style={{
                                    textShadow: '2px 2px black'
                                }}
                            >
                                Playw woven tops
                            </p>
                            <p
                                className='text-lg'
                                style={{
                                    textShadow: '2px 2px black'
                                }}
                            >
                                $ 20.00
                            </p>

                            <Link
                                href={'/prenda/prenda_7'}
                                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
                            >
                                Ver
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image
                            className='w-full rounded-sm object-cover aspect-square'
                            src={'/prendas/prenda_8.jpg'}
                            alt='prenda_8'
                            width={1000}
                            height={1000}
                        />

                        <div className='absolute w-full p-10 bottom-0 text-white font-medium'>

                            <p
                                className='text-xl'
                                style={{
                                    textShadow: '2px 2px black'
                                }}
                            >
                                Boys woven tops
                            </p>
                            <p
                                className='text-lg'
                                style={{
                                    textShadow: '2px 2px black'
                                }}
                            >
                                $ 20.00
                            </p>

                            <Link
                                href={'/prenda/prenda_8'}
                                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
                            >
                                Ver
                            </Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image
                            className='w-full rounded-sm object-cover aspect-square'
                            src={'/prendas/prenda_9.jpg'}
                            alt='prenda_9'
                            width={1000}
                            height={1000}
                        />

                        <div className='absolute w-full p-10 bottom-0 text-white font-medium'>

                            <p
                                className='text-xl'
                                style={{
                                    textShadow: '2px 2px black'
                                }}>
                                Playw woven tops
                            </p>
                            <p
                                className='text-lg'
                                style={{
                                    textShadow: '2px 2px black'
                                }}>
                                $ 20.00
                            </p>

                            <Link
                                href={'/prenda/prenda_9'}
                                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
                            >
                                Ver
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
