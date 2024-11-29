"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../public/gojek-logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

type DropdownState = {
  first: boolean;
  second: boolean;
  third: boolean;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState({
    first: false,
    second: false,
    third: false,
  });

  const handleDropdown = (dropdown: string) => {
    setIsDropdown((prev: DropdownState) => ({
      ...prev,
      [dropdown as keyof DropdownState]: !prev[dropdown as keyof DropdownState],
    }));
  };

  // handle burger navbar
  const isClick = () => {
    setIsOpen(!isOpen);
  };

  // close burger when lg automatically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    // Add event listener on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-[#111820] text-white w-full flex items-center justify-between h-[100px] px-5 sticky top-0 z-10">
      <Image alt="logo-gojek" src={Logo} />
      <ul className="lg:flex gap-5 hidden">
        <li className="cursor-pointer">
          <a href="">Beranda</a>
        </li>
        <li className="cursor-pointer">
          <a
            href=""
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleDropdown("first");
            }}
          >
            Gabung jadi Mitra{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>
        {/* option dropdown */}
        {isDropdown.first && (
          <ul className="absolute bg-[#111820] top-[92px] right-[550px] rounded-b-lg mt-2 p-3 flex flex-col gap-5 px-10">
            <li className="hover:underline">
              <a href="">Mitra Driver</a>
            </li>
            <li className="hover:underline">
              <a href="">Mitra Driver</a>
            </li>
          </ul>
        )}

        <li className="cursor-pointer">
          <a href="">GoCord</a>
        </li>
        <li className="cursor-pointer">
          <a href="">Karir</a>
        </li>
        <li className="cursor-pointer">
          <a
            href=""
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleDropdown("second");
            }}
          >
            Perusahaan{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>

        {isDropdown.second && (
          <ul className="absolute bg-[#111820] top-[92px] right-[250px] rounded-b-lg mt-2 p-3 flex flex-col gap-5 px-10">
            <li className="hover:underline">
              <a href="">Tentang</a>
            </li>
            <li className="hover:underline">
              <a href="">NewsRoom</a>
            </li>
            <li className="hover:underline">
              <a href="">NewsRoom</a>
            </li>
            <li className="hover:underline">
              <a href="">NewsRoom</a>
            </li>
          </ul>
        )}
        <li className="cursor-pointer">
          <a href="">Produk</a>
        </li>
        <li className="cursor-pointer">
          <a href="">Blog</a>
        </li>
        <li className="cursor-pointer">
          <a href="">Bantuin</a>
        </li>
        <li className="cursor-pointer">
          <a
            href=""
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              handleDropdown("third");
            }}
          >
            ID{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>

        {isDropdown.third && (
          <ul className="absolute bg-[#111820] top-[92px] right-0 rounded-b-lg mt-2 p-3 flex flex-col gap-5 px-10">
            <li className="hover:underline">
              <a href="">Bahasa Indonesia</a>
            </li>
            <li className="hover:underline">
              <a href="">English</a>
            </li>
          </ul>
        )}
      </ul>

      {/* md breakpoint */}
      <ul
        className={`bg-[#111820] absolute top-[100px] text-2xl space-y-3 left-0 font-bold pl-5 ${
          isOpen ? "block" : "hidden"
        } w-full h-screen`}
      >
        <li>
          <a href="">Beranda</a>
        </li>
        <li>
          <a href="" className="flex items-center gap-2">
            Gabung jadi Mitra{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>
        <li>
          <a href="">GoCord</a>
        </li>
        <li>
          <a href="">Karir</a>
        </li>
        <li>
          <a href="" className="flex items-center gap-2">
            Perusahaan{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>
        <li>
          <a href="">Produk</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Bantuin</a>
        </li>
        <li>
          <a href="" className="flex items-center gap-2">
            ID{" "}
            <i>
              <IoIosArrowDown />
            </i>
          </a>
        </li>
      </ul>
      <div className={`lg:hidden lg:`} onClick={isClick}>
        {!isOpen ? <FiMenu size={24} /> : <GiCancel size={24} />}
      </div>
    </nav>
  );
}
