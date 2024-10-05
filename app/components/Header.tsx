"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { HiSearch, HiBell, HiChat } from "react-icons/hi";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center gap-3 md:gap-2 p-4 md:p-6">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={55}
        height={55}
        className="p-2 rounded-full hover:bg-gray-300 cursor-pointer w-[40px] h-[40px] md:w-[55px] md:h-[55px]"
      />
      <button className="text-xs md:text-base bg-zinc-800 text-white py-2 px-4 rounded-full">
        Home
      </button>
      <button className="text-xs md:text-base font-semibold py-2 px-4 rounded-full">
        Create
      </button>

      <div className="w-full bg-[#e9e9e9] p-3 rounded-full md:flex items-center gap-3 hidden">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          name=""
          id=""
          className="bg-transparent outline-none border-none"
        />
      </div>

      <HiSearch className="text-[45px] text-gray-500 block md:hidden" />

      <HiBell className="text-[45px] text-gray-500" />
      <HiChat className="text-[45px] text-gray-500" />
      {/* <Image
        src="/man.png"
        alt="user image"
        width={55}
        height={55}
        className="p-2 rounded-full hover:bg-gray-300 cursor-pointer w-[40px] h-[40px] md:w-[55px] md:h-[55px]"
      /> */}
      <button
        className="text-xs md:text-base font-semibold py-2 px-4 rounded-full"
        onClick={() => signIn()}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
