import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Cusines = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto py-5  px-5">
        <div className="font-bold text-2xl">Best Cuisines Near Me</div>
        <div className="my-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Chinese Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            South Indian Restaurant Near Me{" "}
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Indian Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Kerala Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Korean Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            North Indian Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Seafood Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Bengali Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Punjabi Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Italian Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Andhra Restaurant Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl">
            Show More
            <IoIosArrowDown className="inline" />
          </div>
        </div>
      </div>
      <div className="max-w-[1300px] mx-auto py-5  px-5 pb-20">
        <div className="font-bold text-2xl pb-6">
          Explore Every Restaurants Near Me
        </div>
        <div className="block  sm:flex justify-evenly gap-8">
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl w-full my-5">
            Explore Restaurants Near Me
          </div>
          <div className="border font-semibold text-slate-600 border-slate-300 px-auto text-center py-3 rounded-xl w-full my-5">
            Explore Top Rated Restaurants Near Me
          </div>
        </div>
      </div>

    </>
  );
};

export default Cusines;
