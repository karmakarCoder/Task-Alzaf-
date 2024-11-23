"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner from "../../../public/slide banner.png";
import banner2 from "../../../public/slider2.jpg";
import banner3 from "../../../public/slider3.jpg";
import { FiChevronRight } from "react-icons/fi";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
const Hero = () => {
  const [hover, sethover] = useState("");
  const [hover2, sethover2] = useState("");
  const [hover3, sethover3] = useState("");
  const [hover4, sethover4] = useState("");
  const [Hover5, setHover5] = useState("");

  const [mousemove, setmousemove] = useState(false);
  const [mousemove2, setmousemove2] = useState(false);
  const [mousemove3, setmousemove3] = useState(false);
  const [mousemove1, setmousemove1] = useState(false);
  const [mousemove4, setmousemove4] = useState(false);
  const [data, setdata] = useState([]);
  const [eachData, seteachData] = useState([]);
  const [eachData2, seteachData2] = useState([]);
  const [eachData3, seteachData3] = useState([]);
  const [eachData4, seteachData4] = useState([]);
  const [eachData5, seteachData5] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.shope.com.bd/api/v1/public/hero-categories")
      .then((res) => {
        if (res.status == 200) {
          setdata(res.data);
        }
      });
  }, []);

  useEffect(() => {
    data?.filter((item) => {
      if (item.title.toLowerCase() === hover.toLowerCase()) {
        seteachData(item.childrens);
      }
    });
    data?.filter((item) => {
      item?.childrens?.map((child) => {
        if (child.title.trim().toLowerCase() === hover2.toLowerCase()) {
          seteachData2(child.childrens);
        }
      });
    });
    data?.filter((item) => {
      item?.childrens?.map((child) => {
        child?.childrens?.map((child) => {
          if (child.title.toLowerCase() === hover3.toLowerCase()) {
            seteachData3(child.childrens);
          }
        });
      });
    });
    data?.filter((item) => {
      item?.childrens?.map((child) => {
        child?.childrens?.map((child) => {
          child?.childrens?.map((child) => {
            if (child.title.toLowerCase() === hover4.toLowerCase()) {
              seteachData4(child.childrens);
            }
          });
        });
      });
    });
    data?.filter((item) => {
      item?.childrens?.map((child) => {
        child?.childrens?.map((child) => {
          child?.childrens?.map((child) => {
            child.childrens?.map((items) => {
              if (items.title.toLowerCase() === Hover5.toLowerCase()) {
                seteachData5(items.childrens);
              }
            });
          });
        });
      });
    });
  }, [data, hover, hover4, hover2, hover3, Hover5]);

  const HandleMouseEnter = (e) => {
    setmousemove3(true);
  };

  const allMouseLeave = () => {
    setmousemove3(false);
    setmousemove2(false);
    setmousemove(false);
    setmousemove1(false);
  };

  const HandleMouseEnter2 = () => {
    setmousemove1(true);
    setmousemove4(false);
  };

  return (
    <div className="container flex-row-reverse relative w-full flex h-[392px] overflow-y-hidden">
      <div>
        <Splide
          className="my-slide"
          options={{
            arrows: false,
            type: "fade",
            autoplay: true,
            rewind: true,
          }}
        >
          <SplideSlide>
            <Image src={banner} className="w-full h-full" alt="image" />
          </SplideSlide>
          <SplideSlide>
            <Image src={banner2} className="w-full h-full" alt="image" />
          </SplideSlide>
          <SplideSlide>
            <Image src={banner3} className="w-full h-full" alt="image" />
          </SplideSlide>
        </Splide>
      </div>

      <div className="relative z-50">
        <div className="h-full cursor-pointer">
          <div
            onMouseEnter={HandleMouseEnter2}
            className=" bg-white p-3 w-[230px] h-full"
          >
            {data?.map((item, index) => (
              <div
                onMouseEnter={(e) => sethover(e.target.innerText)}
                id="group"
                key={index}
                className="py-1 group capitalize text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
              >
                {item.title}
                {item.childrens && (
                  <FiChevronRight className="text-base right-icon  group-hover:text-[#F97316] group-hover:opacity-100 group-hover:scale-100 transition-all scale-0 opacity-0" />
                )}
              </div>
            ))}
          </div>

          <div
            onMouseEnter={() => setmousemove(true)}
            className={`absolute right-[-87%] z-50 flex w-[200px] flex-col bg-gray-100 h-full border-l-2 py-1 px-4 text-gray-800 ${
              hover === "Health & Beauty"
                ? "top-[31px]"
                : hover === "Watches, Bags, Jewellery"
                ? "top-[56px]"
                : "top-0"
            } ${mousemove1 ? "block" : "hidden"}`}
          >
            {eachData ? (
              eachData?.map((item, index) => (
                <div
                  onMouseEnter={(e) => sethover2(e.target.innerText)}
                  key={index}
                  className="py-1 group capitalize text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
                >
                  {item.title}
                  {item.childrens && (
                    <FiChevronRight className="text-base right-icon  group-hover:text-[#F97316] group-hover:opacity-100 group-hover:scale-100 transition-all scale-0 opacity-0" />
                  )}
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full">
                {" "}
                <h5 className="font-normal text-base">item not found!</h5>
              </div>
            )}

            <div
              onMouseEnter={() => setmousemove2(true)}
              className={` bg-white border-l-2 absolute right-[-100%] p-3 w-[200px] h-full  ${
                mousemove ? "block" : "hidden"
              } ${hover2 === "ravel Bags" ? "top-[15px]" : "top-0"}`}
            >
              {eachData2 ? (
                eachData2?.map((item, index) => (
                  <div
                    onMouseEnter={(e) => sethover3(e.target.innerText)}
                    key={index}
                    className="py-1 capitalize relative text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
                  >
                    {item.title}
                    {item.childrens && (
                      <FiChevronRight className="text-base right-icon  group-hover:text-[#F97316] group-hover:scale-100 group-hover:opacity-100 transition-all scale-0 opacity-0" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  {" "}
                  <h5 className="font-normal text-base">item not found!</h5>
                </div>
              )}
            </div>
            <div
              onMouseEnter={HandleMouseEnter}
              className={` bg-white border-l-2 absolute top-[15px] right-[-200%] p-3 w-[200px] h-full ${
                mousemove2 ? "block" : "hidden"
              }`}
            >
              {eachData3 ? (
                eachData3?.map((item, index) => (
                  <div
                    onMouseEnter={(e) => sethover4(e.target.innerText)}
                    key={index}
                    className="py-1 capitalize group text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
                  >
                    {item.title.trim(" ")}
                    {item.childrens && (
                      <FiChevronRight className="text-base group-hover:opacity-100 group-hover:scale-100 right-icon group-hover:text-[#F97316] transition-all scale-0 opacity-0" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  {" "}
                  <h5 className="font-normal text-base">item not found!</h5>
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => setmousemove4(true)}
              id="group2"
              className={`bg-white h-full border-l-2 absolute top-[15px] right-[-300%] p-3 w-[200px] ${
                mousemove3 ? "block" : "hidden"
              }`}
            >
              {eachData4 ? (
                eachData4?.map((item, index) => (
                  <div
                    onMouseEnter={(e) => setHover5(e.target.innerText)}
                    key={index}
                    className="py-1 capitalize text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
                  >
                    {item.title}
                    {item.childrens && (
                      <FiChevronRight className="text-base right-icon  group-hover:text-[#F97316] group-hover:scale-100 group-hover:opacity-100 transition-all scale-0 opacity-0" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  {" "}
                  <h5 className="font-normal text-base">item not found!</h5>
                </div>
              )}
            </div>
            <div
              onMouseLeave={allMouseLeave}
              id="group2"
              className={`bg-white h-full absolute  border-l-2 right-[-400%] z-50 p-3 w-[200px] ${
                mousemove4 ? "block" : "hidden"
              } ${Hover5 === "Bags 789" ? "top-[50px]" : "top-[15px]"}`}
            >
              {eachData5 ? (
                eachData5?.map((item, index) => (
                  <div
                    key={index}
                    className="py-1 capitalize text-xs group cursor-pointer hover:text-[#F97316] flex items-center justify-between"
                  >
                    {item.title}
                    {item.childrens && (
                      <FiChevronRight className="text-base right-icon  group-hover:text-[#F97316] group-hover:scale-100 group-hover:opacity-100 transition-all scale-0 opacity-0" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full">
                  {" "}
                  <h5 className="font-normal text-base">item not found!</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
