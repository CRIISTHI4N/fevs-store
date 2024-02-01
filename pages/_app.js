import '@/styles/globals.css'
import { UsuarioProvider } from '@/context/usuarioContext'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  return paginaLista ? (
    <UsuarioProvider>
      <div className={` ${inter.className}`}>
        <Component {...pageProps} />
      </div>
    </UsuarioProvider>
  ) : null;

}
