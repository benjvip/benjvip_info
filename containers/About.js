import Image from "next/image";
import logo from "../public/assets/logoimg.png";
import hat from "../public/assets/hat.png";
import { motion } from "framer-motion";
import { Righteous, Rubik } from "next/font/google";
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const rubik = Rubik({ weight: "300", subsets: ["latin"] });

export default function About({ id }) {
  return (
    <div className=" pb-12 px-12  flex text-xl  justify-center  items-center w-full h-full  ">
      <div className="w-full h-full lg:flex items-center md:pr-16 justify-center ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className="w-1/2' flex justify-center "
        >
          <Image
            src={hat}
            className="md:min-w-[600px] w-[500px] py-12 "
          ></Image>
        </motion.div>
        <div id={id} className={righteous.className}>
          <div className="w-full items-center justify-center">
            <div className="text-2xl md:text-4xl w-full lg:text-[80px] text-white  ">
              about
            </div>

            <div className={rubik.className}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {
                    scale: 0.6,
                    opacity:0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
                viewport={{ once: true }}
                className="w-full  text-lg md:text-2xl lg:text-md text-white px-12 md:px-0 pt-8"
              >
                Benjamin is tired of watching everyone play hot potato with the
                endless derivative ShibaCumGMElonKishuTurboAss FlokiMoon Inu
                coins. The Inu’s have had their day.It’s time for the most
                recognizable meme in the world to take his reign as king of the
                memes. <br></br>
                <br></br> Benjamin is here to make memecoins great again.
                Launched stealth with no presale, zero taxes, LP burnt and
                contract renounced, $BENJ is a coin for the people, forever.
                Fueled by pure memetic power, let $BENJ show you the way.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
