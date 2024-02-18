import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="pt-20 w-[80%] m-4">
      <div className="flex justify-center items-center h-[90vh]">
        <Image src={"/assests/Loading.webp"} width={100} height={100} alt="Loading..." />
      </div>
    </div>
  );
}
