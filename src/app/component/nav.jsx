"use client";
import { HiOutlineChevronDown } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import cloudservice from "../../../public/cloud_service.png";
import Image from "next/image";
import logo from "../../../public/Alzaf_Logo.png";
import { useState } from "react";

const Nav = () => {
  const [language, setlanguage] = useState(false);
  const [languageVal, setlanguageVal] = useState("");
  return (
    <div>
      {/* sub nav */}
      <div className="py-2 bg-[#F0F1F1]">
        <div className="container flex items-center justify-between">
          {/* left */}
          <div className="flex gap-x-10">
            {/* language */}

            <div
              className="flex text-xs cursor-pointer font-normal items-center gap-x-1"
              onClick={() => setlanguage(!language)}
            >
              <div className="relative">
                <p onClick={(e) => setlanguageVal(e.target.innerText)}>
                  {languageVal ? languageVal : "English"}
                </p>
                {language && (
                  <p
                    onClick={(e) => setlanguageVal(e.target.innerText)}
                    className="bg-gray-300 py-[2px] px-1  rounded absolute top-5 left-0"
                  >
                    {languageVal === "Bangla" ? "English" : "Bangla"}
                  </p>
                )}
              </div>
              <span
                className={`${
                  language
                    ? "rotate-[180deg] transition-transform duration-200"
                    : "rotate-0 transition-transform duration-200"
                }`}
              >
                <HiOutlineChevronDown />
              </span>
            </div>

            <ul className="flex items-center gap-x-8">
              {["Help Center", "Helpline: 0964781656"].map((item, index) => (
                <li
                  key={index}
                  className="flex text-[#434343] hover:text-[#F97316] items-center gap-x-1"
                >
                  <a className="text-xs font-normal" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* right */}
          <div>
            <ul className="flex items-center gap-x-8">
              {["Become a Seller", "Order Track", "Sign up / Login"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex text-[#434343] hover:text-[#F97316] items-center gap-x-1"
                  >
                    <a className="text-xs font-normal" href="#">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* main nav */}
      <div className="py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* logo */}
            <Image src={logo} alt="image" />
            {/* search bar */}
            <div className="w-[704px] relative rounded-xl overflow-hidden">
              <input
                type="text"
                placeholder="Search Product"
                className="py-4 pl-4 w-full bg-[#EFF0F5] leading-none placeholder:text-sm placeholder:font-normal placeholder:text-[#707070] pr-16"
              />
              <div className="h-full cursor-pointer hover:bg-[#ff6a00] absolute top-0 right-0 text-white flex items-center text-2xl justify-center px-[14px] rounded-xl bg-[#F97316]">
                <CiSearch />
              </div>
            </div>
            {/* user */}
            <div className="flex items-center gap-x-3">
              <div className="size-[40px] cursor-pointer bg-[#F5F5F5] rounded-lg flex items-center hover:text-white hover:bg-[#F97316] justify-center text-[#707070] text-xl">
                <CiUser />
              </div>
              <div className="size-[40px] cursor-pointer bg-[#F5F5F5] rounded-lg flex items-center hover:text-white hover:bg-[#F97316] justify-center text-[#707070] text-xl">
                <IoMdHeartEmpty />
              </div>
              <div className="size-[40px] hover:text-white hover:bg-[#F97316] cursor-pointer bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#707070] text-xl">
                <IoCartOutline />
              </div>
            </div>
            {/* service */}
            <Image
              src={cloudservice}
              alt="cloud service"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
