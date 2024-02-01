import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { useUsuario } from "@/hooks/useUsuario"

export const Layout = ({ children }) => {

    const { clothesMen } = useUsuario()

    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen justify-between">

                <div>
                    {children}
                </div>

                <Footer />
            </div >

        </>
    )
}
