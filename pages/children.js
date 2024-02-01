import { Layout } from "@/components/Layout"
import Image from "next/image"
import Link from "next/link"
import { useUsuario } from "@/hooks/useUsuario"
import { prendas } from "@/data/clothes"

export default function Children() {

    const { clothesChil } = useUsuario();

    return (
        <Layout>
            <div className="mt-[115px]">

                <h2 className="mx-[5%] text-2xl my-10">Niños</h2>

                {clothesChil ?
                    <main className='mx-[5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7'>


                        {
                            prendas.map(p => (
                                <div
                                    key={p.id}
                                >
                                    <Image
                                        className='block w-full rounded-sm object-cover aspect-square'
                                        src={`/prendas/${p.src}`}
                                        alt={`conjunto_${p.id}`}
                                        width={1000}
                                        height={1000}
                                    />

                                    <div className='w-full py-5 font-medium'>
                                        <p className='text-xl text-stone-900'>{p.name}</p>
                                        <p className='text-lg'>$ {p.price}.00</p>

                                        <Link
                                            className='inline-block text-md mt-4 text-white bg-stone-900 py-2 px-5 rounded-full hover:bg-stone-800'
                                            href={`/prenda/${p.router}`}
                                        >
                                            Ver
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }

                    </main>

                    :
                    <p className="text-center text-2xl">Sin elementos aún</p>
                }


            </div>
        </Layout>
    )
}
