import Image from 'next/image'
import { Inter } from 'next/font/google'
import Pastilla1 from "./pastilla1"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Inicio de sesion</h1>
      <Pastilla1 />
    </>
  )
}
