import { Layout } from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useUsuario } from "@/hooks/useUsuario"

export default function Mujeres() {

    const { clothesWomen } = useUsuario()

    return (
        <Layout>

            <div className="mt-[115px]">
                <h2 className="mx-[5%] text-2xl my-10">Mujeres</h2>

                {clothesWomen ?

                    <main className='mx-[5%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                        <div className="group">
                            <Image
                                className='block w-full group-hover:brightness-50'
                                src={'/img/conjunto.jpg'}
                                alt='conjunto_uno'
                                width={1000}
                                height={1000}
                            />

                            <div className='w-full py-5 font-medium'>
                                <p className='text-xl text-stone-900'>Camiseta Deportiva 1</p>
                                <p className='text-lg'>$ 20.52</p>

                                <Link
                                    className='inline-block text-md mt-4 text-white bg-stone-900 py-2 px-5 rounded-full hover:bg-stone-950'
                                    href={`/prenda/${5}`}
                                >
                                    Ver
                                </Link>
                            </div>
                        </div>
                        <div className="group">
                            <Image
                                className='block w-full group-hover:brightness-50'
                                src={'/img/conjunto.jpg'}
                                alt='conjunto_uno'
                                width={1000}
                                height={1000}
                            />

                            <div className='w-full py-5 font-medium'>
                                <p className='text-xl text-stone-900'>Camiseta Deportiva 1</p>
                                <p className='text-lg'>$ 20.52</p>

                                <Link
                                    className='inline-block text-md mt-4 text-white bg-stone-900 py-2 px-5 rounded-full hover:bg-stone-950'
                                    href={`/prenda/${5}`}
                                >
                                    Ver
                                </Link>
                            </div>
                        </div>

                    </main>

                    :
                    <p className="text-center text-2xl">Sin elementos aún</p>
                }
            </div>

        </Layout>
    )
}

