import Steps from "../components/Steps";
import token from "../public/assets/tokenlogo.png";
import wallet from "../public/assets/wallet.png";
import eth from "../public/assets/eth.png";
import uniswap from "../public/assets/uniswap.png"
import swap from "../public/assets/swap2.png"

import Image from "next/image";

import logorev from "../public/assets/reverselogo.png";


import { Righteous } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });

export default function Howtobuy({id}){
    return (
        <div  className="w-screen flex flex-col justify-center items-center ">
            <div className={righteous.className}>
            <div id={id} className="w-full flex items-center justify-center font-outline-1 text-white text-[60px] md:text-[80px] py-12">how to buy</div></div>
            <Steps  src={wallet} title="create a wallet" sub="download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."></Steps>
            <Steps src={eth} title="get some eth" sub="have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet." ></Steps>
            <Steps src={uniswap} title="go to uniswap" sub="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign."></Steps>
            <Steps src={swap} title="switch eth for $benj" sub="switch eth for $benj. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."></Steps>
            
            <div className="md:flex w-full items-center p-8 justify-center space-x-8">
           
            <Image src={logorev}></Image>
            </div>
        </div>
    )
}