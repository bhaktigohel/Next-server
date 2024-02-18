import Image from "next/image";
import Link from "next/link";
import React from "react";
import { menuItems } from "../../Utils/Config";

export default function NavBar({ isMobile }) {
  return (
    <>
      {menuItems.map((m) => (
        <NavItem {...m} isMobile={isMobile} key={m.title} />
      ))}
    </>
  );
}

const NavItem = ({ title, url, imageURL, alt, isMobile }) => {
  return (
    <Link prefetch={false} className="flex-auto" href={url}>
      {imageURL == "" ? (
        title
      ) : isMobile ? (
        title
      ) : (
        <Image src={imageURL} width={50} height={50} alt={alt} />
      )}
    </Link>
  );
};
