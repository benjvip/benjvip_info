import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../containers/Hero'
import About from '../../containers/About'
import Howtobuy from '../../containers/Howtobuy'
import Tokenomics from '../../containers/Tokenomics'
import Roadmap from '../../containers/Roadmap'
import Contact from '../../containers/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className="flex  min-h-screen flex-col bg-cover bg-[#577C43]"
    >
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <Hero></Hero>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <About></About>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <Howtobuy></Howtobuy>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <Tokenomics></Tokenomics>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <Roadmap></Roadmap>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-8'></div>
       <Contact></Contact>
       <div className=' bg-dolar w-screen   bg-cover bg-center h-12 flex justify-center items-center text-white font-black'>
       © 2023 by BENJAMIN. All rights reserved!
       </div>
    </main>
  )
}