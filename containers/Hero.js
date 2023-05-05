import Image from "next/image";

import Link from "next/link";
import logorev from "../public/assets/reverselogo.png";
import token from "../public/assets/tokenlogo.png";
import { SocialIcon } from 'react-social-icons';
import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "300", subsets: ["latin"] });

export default function Hero({ id }) {
  return (
    <div
      id={id}
      className="pt-32 px-20 md:py-80 md:flex text-xl justify-between md:justify-start md:items-center w-screen h-screen bg-hero1 bg-cover bg-center "
    >
      <div className="w-full h-1/2 md:h-full flex items-center md:pl-24 text-black justify-center">
        <div className={rubik.className}>
          <div className="flex flex-col mb-0 md:mb-20 text-white">
            <Image width={150} src={token}></Image>
            <div className="text-xl md:text-3xl py-8">
              the most memeable memecoin in existence. The dogs have had their
              day, it’s time for Benjamin to take reign.
            </div>
            <div className="flex space-x-4">   <SocialIcon network="twitter" fgColor="white" style={{ height: 80, width: 80 }}></SocialIcon>
            <SocialIcon network="twitter" fgColor="white" style={{ height: 80, width: 80 }}></SocialIcon>
            <SocialIcon network="twitter" fgColor="white" style={{ height: 80, width: 80 }}></SocialIcon></div>
         
          </div>
        </div>
      </div>
      <div className="w-full  md:h-full  flex items-center justify-center">
        <Image src={logorev} className="md:mb-48 w-[300px] md:w-[500px]"></Image>
      </div>
    </div>
  );
}
