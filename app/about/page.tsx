"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <motion.div className="flex justify-center w-[80%]">
      <div className="px-8 my-48 " id="about">
        <div className="justify-center align-middle  text-center gap-2 align-item-center">
          <p className="text-2xl font-light justify-around will-change-auto">
            Every time you smile at someone, it is an action of love, a gift to that person, a
            beautiful thing.
          </p>
          <div className="flex flex-col mt-10">
            <div className="flex items-center justify-start gap-x-4 gap-y-4 bg-[#8bb0c2] py-8">
              <div className="">
                <Image
                  src={"/assests/RCT.webp"}
                  alt={"RCT"}
                  width={300}
                  height={300}
                  quality={100}
                />
              </div>
              <p className="self-center hover:underline hover:underline-offset-8 md:text-2xl xl:text-2xl mx-4 ">
                Root Canal Treatment(RCT)
              </p>
            </div>
            <div className="flex items-center justify-end gap-x-4 gap-y-4 bg-red-400 py-8">
              <p className="self-center hover:underline hover:underline-offset-8 md:text-2xl xl:text-2xl mx-4">
                Teeth Whitening
              </p>
              <div>
                <Image
                  width={500}
                  height={700}
                  quality={100}
                  src={"/assests/teeth-whitening.webp"}
                  alt={"Teeth Whitening"}
                />
              </div>
            </div>
            <div className="flex items-center gap-x-4 gap-y-4 bg-[#282b30] py-8">
              <div>
                <Image
                  width={500}
                  height={500}
                  quality={100}
                  src={"/assests/smile-design.webp"}
                  alt={"Smile Designing"}
                />
              </div>
              <p className="hover:underline hover:underline-offset-8 mx-4 md:text-2xl xl:text-2xl">
                Smile Designing
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
