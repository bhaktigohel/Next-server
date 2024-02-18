"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ConfigProvider, Drawer } from "antd";
import { TfiMenuAlt } from "react-icons/tfi";
import NavBar from "./Components/Shared/Navigation";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    console.log(`Route changed to: ${pathname}`);
    setShowMenu(false);
  }, [pathname]);

  return (
    <div className="fixed w-[80%] top-0 m-auto bg-paperPrimary dark:bg-textSecondary">
      <div className="flex justify-between ">
        <Link className="flex-auto" href="/home">
          <Image
            className="flex-start py-1"
            width={70}
            height={70}
            src={"/favicon.png"}
            alt={"Defining Smiles"}
          />
        </Link>
        <div className="flex">
          <div className="flex md:hidden items-center">
            <TfiMenuAlt
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
            />
          </div>
          <div className="hidden md:flex xl:flex flex-row gap-8 items-center">
            <NavBar isMobile={false} />
          </div>
        </div>
      </div>
      <ConfigProvider
        drawer={{
          classNames: {
            body: "bg-paperPrimary text-textPrimary dark:bg-textSecondary dark:text-primary",
          },
        }}
      >
        <Drawer open={showMenu} onClose={() => setShowMenu(false)} width={"80%"} closable={false}>
          <div className="flex flex-col gap-4">
            <NavBar isMobile={true} />
          </div>
        </Drawer>
      </ConfigProvider>
    </div>
  );
}

export default Header;
