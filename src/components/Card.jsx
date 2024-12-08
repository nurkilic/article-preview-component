import imgdrawers from "../assets/images/drawers.jpg";
import imgavatar from "../assets/images/avatar-michelle.jpg";
import imgshare from "../assets/images/icon-share.svg";
import Share from "./Share";
import { useState } from "react";
import ShareBottom from "./ShareBottom";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" min-w-[280px] flex max-md:flex-col w-[730px]  bg-white rounded-lg col shadow-md h-[288px] max-md:max-w-96 ">
      <div>
        <img
          src={imgdrawers}
          className="h-72 object-cover object-left w-[18.1rem] rounded-l-lg max-md:w-full max-md:object-top max-md:rounded-t-lg max-md:rounded-b-none"
          alt=""
        />
      </div>
      <div className="bg-white p-8 max-md:pb-3  flex-1 rounded-r-lg max-md:rounded-b-lg ">
        <h1 className="font-[700] text-xl">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="py-4 max-md:pb-6">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center mt-2 ">
            <img src={imgavatar} className="rounded-full h-10" alt="" />
            <div className="">
              <h2 className="font-[900] text-xs">Michelle Appleton</h2>
              <time className="text-xs" dateTime="2020-06-28">
                28 Jun 2020
              </time>
            </div>
          </div>
          <div
            className={`z-10 group rounded-full bg-[var(--light-grayish-blue)] p-2 hover:bg-[var(--very-dark-grayish-blue)] cursor-pointer ${
              isOpen
                ? "bg-[var(--very-dark-grayish-blue)] max-md:bg-[var(--desaturated-dark-blue)]   "
                : ""
            } `}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              <img
                className={`group-hover:brightness-[100]  ${
                  isOpen ? "brightness-[100]" : ""
                } `}
                src={imgshare}
                alt=""
              />
              {isOpen ? <Share /> : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="relative ">
        {isOpen ? <ShareBottom isOpen={isOpen} /> : ""}
      </div>
    </div>
  );
};

export default Card;
