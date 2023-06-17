import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../containers/Hero'
import About from '../../containers/About'
import Howtobuy from '../../containers/Howtobuy'
import Tokenomics from '../../containers/Tokenomics'
import Roadmap from '../../containers/Roadmap'
import Contact from '../../containers/Contact'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>BENJAMIN</title>
        <meta name="description" content="$BENJ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main
      className="flex max-w-full min-h-screen flex-col bg-cover bg-[#577C43]"
    >
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <Hero id="#home"></Hero>
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <About id="#about"></About>
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <Howtobuy id="#how"></Howtobuy>
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <Tokenomics id="#token" ></Tokenomics>
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <Roadmap id="#road"></Roadmap>
       <div className=' bg-demon w-full bg-repeat-x    bg-center h-32'></div>
       <Contact></Contact>
       <div className=' bg-demon w-full   bg-repeat-x bg-center h-32 flex justify-center items-center text-white font-black'>
       © 2023 by BENJAMIN. All rights reserved!
       </div>
    </main></>
  )
}
