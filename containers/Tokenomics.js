import { Righteous, Rubik } from "next/font/google";
import Steps from "../components/Steps";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "300", subsets: ["latin"] });
import Image from "next/image";
import chart from "../public/assets/chart.png";

export default function Tokenomics({id}) {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-24 ">
      <div className={righteous.className}>
        <div id={id}className="font-outline-1 w-full flex items-center justify-center text-white text-[54px] md:text-[60px] lg:text-[80px] pb-12">
          tokenomics
        </div>
        <div>
          <div  className="lg:flex w-full px-0 md:px-16  justify-between items-center md:space-x-8">
            <div className={righteous.className}>
            
                <div className="text-white  font-outline-1 text-4xl text-center">
                  Token Supply: <br></br>420,690,000,000,000
                </div>
                <div className="md:flex shadow-2xl max-w-[1500px] shadow-[#ffffff4D]  bg-[#2B3E21] my-4 p-4 border-2 rounded-tr-2xl rounded-bl-2xl border-white">
                  <div className="flex flex-col text-white ">
                    <div className={rubik.className}>
                      <div className="text-2xl pb-8">
                        No Taxes, No Bullshit. It’s that simple. 93.1% of the
                        tokens were sent to the liquidity pool, LP tokens were
                        burnt, and contract is renounced. The remaining 6.9% of
                        the supply is being held in a multi-sig wallet only to
                        be used as tokens for future centralized exchange
                        listings, bridges, and liquidity pools. This wallet is
                        easily trackable with the ENS name “pepecexwallet.eth”
                      </div>
                    </div>

                  </div>
                </div>
            
            </div>
            <div className="w-full flex justify-center   items-center lg:justify-start">
             <Image src={chart} className="w-[300px] flex-shrink-0 lg:w-[900px]"></Image>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
