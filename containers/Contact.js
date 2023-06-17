import logo from "../public/assets/logoimg.png";
import name from "../public/assets/benjlogo.png";
import Image from "next/image";
import { SocialIcon } from 'react-social-icons';

import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "400", subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="w-screen flex flex-col justify-center items-center pb-24 ">
      <div className={righteous.className}>
        <div className="font-outline-1 w-full flex items-center justify-center text-white text-[80px] py-12">
          contact
        </div>

        <div className="flex justify-center items-center">
          <Image width={80} src={logo} className="mb-4" />
          <Image src={name} height={50} />
        </div>
        <div className=" w-full justify-center items-center flex space-x-8 pt-8">
        <SocialIcon url="https://t.me/benjportal" network="telegram" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
        <SocialIcon url="https://twitter.com/benjcoineth" network="twitter" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>

        <SocialIcon network="discord" bgColor="white" style={{ height: 100, width: 100 }}></SocialIcon>
</div>
<div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-white w-3/4 font-outline-0 text-2xl py-8">
          $benj coin has no association with anyone. This token is simply paying homage to a meme we all love and recognize.
          </div>
        </div>
      </div>
      <div className={rubik.className}>
        <div className="w-full flex justify-center text-center">
          <div className="text-white w-3/4 font-outline-0 text-2xl py-8">
          $BENJ is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
