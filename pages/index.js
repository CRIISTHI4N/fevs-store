import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/Layout'

export default function Home() {


  return (
    <Layout >
      <div
        className='relative h-screen w-full bg-cover bg-no-repeat overflow-hidden mt-[71px]'
        style={{
          backgroundImage: `url('/img/wellcome1.jpg')`,
          backgroundRepeat: 'noRpeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}
      >

        <p
          className='hidden sm:block sm:absolute text-5xl border-2 border-red-900 p-5 top-[10%] left-[10%] tracking-wider leading-relaxed drop-shadow-2xl text-red-900 font-medium'
          style={{
            textShadow: '1px 1px 3px #DB7575',
            boxShadow: '1px 1px 3px #DB7575'
          }}
        >
          Tu ropa <br /> Americana <br /> al mejor <br /> precio!
        </p>

      </div>

      <main className='mx-[5%]'>

        <h2 className='py-7 text-2xl'>Novedades</h2>

        <div
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'
        >

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_1.jpg'}
              alt='prenda_1'
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
                Dress
              </p>

              <Link
                href={'/prenda/prenda_1'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_2.jpg'}
              alt='prenda_2'
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
                Sleep 4 PC PJs
              </p>

              <Link
                href={'/prenda/prenda_2'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_3.jpg'}
              alt='prenda_3'
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
                Boy Knit Tops
              </p>

              <Link
                href={'/prenda/prenda_3'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>

        </div>


        <h2 className='py-7 text-2xl'>Lo más vendido</h2>

        <div
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'
        >

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_4.jpg'}
              alt='prenda_4'
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
                Sleep 4 PC PJs
              </p>

              <Link
                href={'/prenda/prenda_4'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_5.jpg'}
              alt='prenda_5'
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
                Outer Jackets
              </p>

              <Link
                href={'/prenda/prenda_5'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>

          <div className='relative'>
            <Image
              className='w-full rounded-sm object-cover aspect-square'
              src={'/prendas/prenda_6.jpg'}
              alt='prenda_6'
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
                Playw Layering
              </p>

              <Link
                href={'/prenda/prenda_6'}
                className='inline-block text-xl mt-5 text-black bg-white py-2 px-5 rounded-full'
              >
                Ver
              </Link>
            </div>
          </div>


        </div>

      </main>

    </Layout>
  )
}
