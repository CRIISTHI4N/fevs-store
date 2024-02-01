import { Layout } from "@/components/Layout"
import Image from "next/image"

export default function Favoritos() {
    return (
        <Layout>
            <main className="mx-[5%] mt-[115px]">
                <h2 className="text-2xl my-10">Favoritos</h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col lg:flex-row gap-3 lg:gap-7">
                        <Image
                            className="rounded-sm object-cover aspect-square"
                            src={'/prendas/prenda_1.jpg'}
                            alt='conjunto_uno'
                            width={200}
                            height={200}
                        />

                        <div className="flex flex-col justify-between items-start">

                            <div>
                                <p className="text-2xl">Camisa Apolo</p>
                                <p className="text-xl">$ 25.32</p>
                            </div>


                            <div className="flex flex-col gap-2 lg:gap-3 mt-5 lg:mt-0">
                                <button className=" border border-stone-900 py-2 px-5 rounded-full text-black">
                                    Ver
                                </button>

                                <button className="flex gap-2 bg-red-600 py-2 px-5 rounded-full text-white">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    Eliminar
                                </button>
                            </div>

                        </div>

                    </div>


                </div>




            </main>
        </Layout>
    )
}
