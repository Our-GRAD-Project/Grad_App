import React from "react";
import pho2 from "../assets/pho2.png";
import pho4 from "../assets/pho4.png";

const BooksSection = () => {
  return (
    <>
      <section className="w-full h-[916px] bg-white relative overflow-hidden">
        <h1 className="absolute top-[78px] left-[123px] text-[96px] leading-[40px] font-bold font-montserrat text-black">
          Books in <span className="text-[#0088FA]">15 Minutes</span>
        </h1>

        <p className="absolute top-[156px] left-[123px] w-[941px] text-[40px] leading-[50px] font-bold font-montserrat text-[#00000087]">
          We read the best books, highlight key ideas and insights, and create summaries for you.
        </p>

        <div className="absolute top-[306px] left-[123px] w-[1000px] h-[429px] bg-[#FF0700] rounded-[10px] overflow-hidden">
          <div className="absolute top-[95px] left-[48px] w-[278px] h-[112px]">
            <p className="font-[Cairo] font-bold text-[48px] leading-[22px] text-white">
              Free daily <br />
              <span className="font-[Changa_One] text-[64px] leading-[70px]">
                Summary
              </span>
            </p>
          </div>

          <button className="absolute top-[261px] left-[48px] w-[339px] h-[102px] rounded-[10px] bg-[#0088FA] flex items-center justify-center">
            <span className="text-white font-[Cairo] font-bold text-[48px] leading-[22px]">
              Get it now
            </span>
          </button>

          <img
            src={pho4}
            alt="Book 2"
            className="absolute bottom-[60px] left-[450px] w-[202px] h-[322px] rounded-[10px] rotate-[-15.67deg] object-cover z-10"
          />

          <img
            src={pho2}
            alt="Book 1"
            className="absolute bottom-[60px] left-[680px] w-[202px] h-[322px] rounded-[10px] rotate-[22.84deg] object-cover z-20"
          />

          <div className="absolute top-0 right-0 w-[257px] h-[429px] bg-[#0088FA] rounded-l-full z-4" />
        </div>
      </section>
    </>
  );
};

export default BooksSection;
