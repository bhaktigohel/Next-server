import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="fixed top-0 w-full">
      <div className="flex justify-between shadow shadow-emerald-950">
        <Image
          className="flex-start"
          width={70}
          height={70}
          src={"/assests/logo-white.png"}
          alt={"Defining Smiles"}
        />
        <div className="flex flex-row gap-5 items-center">
          <Link href="/home">Home</Link>
          <Link href="/treatments">Treatments</Link>
          <Link href="/appointment">Appointment</Link>
          <Link href="/about">About</Link>
          <Image src={"/assests/user.png"} width={50} height={50} alt="LogIn/SignIn" />
        </div>
      </div>
    </div>
  );
}

export default Header;
