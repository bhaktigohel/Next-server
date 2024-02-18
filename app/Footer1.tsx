import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bottom-0 w-full bg-inherit shadow-inner shadow-[#282b30] font-extralight text-emerald-100 py-2">
      <div className="flex mx-[5%] md:mx-[1%] mb-2 justify-between">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-start">
            <Link
              href={"https://maps.app.goo.gl/1em5KAKtWviC7mqcA"}
              className="flex items-center"
              target="_blank"
            >
              <Image src={"/assests/call.png"} alt="Mobile" width={45} height={45} />
              <p>Contact Us</p>
            </Link>
            <p className="font-thin">+91-9178-35-8598</p>
          </div>

          <div className="flex flex-col items-start">
            <Link
              href={"https://maps.app.goo.gl/1em5KAKtWviC7mqcA"}
              className="flex items-center"
              target="_blank"
            >
              <Image src={"/assests/location1.png"} alt="Google Map" width={30} height={30} />
              <p>Address</p>
            </Link>
            <p className="font-thin">101,Silver Star Mall,</p>
            <p className="font-thin">Tower Road,</p>
            <p className="font-thin">Valsad-396001</p>
          </div>
        </div>

        <div className="flex flex-col justify-between ">
          <div className="flex flex-col items-end">
            <p className="text-xl">Other Ferm</p>
            <p>Vedant Ayu Care</p>
            <p className="font-thin">Dr. Dhruti Tandel</p>
            <p className="font-thin">(B.A.M.S.)</p>
          </div>
          <div className="flex flex-col items-end">
            <Link
              href={"https://www.instagram.com/vedant_dental_care/"}
              className="flex items-center"
              target="_blank"
            >
              <Image src={"/assests/instagram.png"} alt="Vedant" width={25} height={25} />
              <p>vedant_dental_care</p>
            </Link>
            <p className="">Valsad,India</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[0.7rem]">
        <p>
          <sup>©</sup> All Rights Reserved by Vedant Dental and Ayu Care-2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
