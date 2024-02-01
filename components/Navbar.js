import Image from "next/image"
import Link from "next/link"
import { useUsuario } from "@/hooks/useUsuario"

export const Navbar = () => {

    const { showNavOptions, changeNavOpt, } = useUsuario();

    return (
        <>
            <nav
                className='fixed z-10 w-full bg-stone-900 text-white px-6 sm:px-12 flex items-center justify-between top-0'
            >

                <div
                    className='flex items-center gap-9'
                >
                    <Link href="/">
                        <Image
                            className="rounded-full"
                            src={'/img/favicon.jpg'}
                            alt='logo'
                            width={40}
                            height={40}
                        />
                    </Link>


                    <ul
                        className={`fixed ${showNavOptions ? 'left-[calc(100%-45%)] lg:left-0' : 'left-[100%] lg:left-0'} top-[72px] bg-stone-900 w-[45%] h-screen flex flex-col pl-10 lg:relative lg:flex-row lg:gap-12 lg:h-auto lg:top-auto lg:right-auto lg:w-auto lg:pl-0 transition-all duration-200`}
                    >
                        <li> <Link href="/mujeres" className="block lg:border-b-4 lg:border-b-stone-900 lg:hover:border-b-4 lg:hover:border-b-white py-6" >Mujeres</Link></li>
                        <li> <Link href="/hombres" className="block lg:border-b-4 lg:border-b-stone-900 lg:hover:border-b-4 lg:hover:border-b-white py-6">Hombres</Link> </li>
                        <li> <Link href="/children" className="block lg:border-b-4 lg:border-b-stone-900 lg:hover:border-b-4 lg:hover:border-b-white py-6">Niños</Link></li>
                    </ul>
                </div>

                <div className='py-6 flex gap-9'>

                    {/* <Link
                        href={'/favoritos'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </Link> */}

                    <Link
                        href={'/carrito'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </Link>

                    <button
                        className="lg:hidden"
                        onClick={() => changeNavOpt()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>



                </div>
            </nav>
        </>

    )
}
