import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card"


const TopRest = () => {
  const [slide,setSlide]=useState(0);
    const [data,setData]=useState([]);
    const fetchTopRestaurant =async()=>{
        const response = await fetch("http://localhost:5000/top-restaurant-chains");
        const apiData = await response.json();
        setData(apiData);
        // console.log(apiData)
    }

    useEffect(
        () => {
            fetchTopRestaurant();
    }, []
)

// arrow button
const prevSlide =()=>{
  // if (categories.length -20 == slide) return false;
  setSlide(slide - 3)
}

const nextSlide =()=>{
  // if (categories.length - 8 == slide) return false;
  setSlide(slide + 3)
}
    
  return (
    <div className="max-w-[1200px] mx-auto py-7 ">
      <div className="flex items-center justify-between mx-14">
                <div className="font-bold text-2xl">
                Top restaurant chains in Mumbai
                </div>
                
                <div className="flex items-center  gap-2">
                    <div className="w-[30px] h-[30px] bg-[#ECECED] text-[#93979d] rounded-full flex justify-center items-center cursor-pointer" onClick={prevSlide} ><FaArrowLeft  /></div>
                    <div className="w-[30px] h-[30px]  bg-[#D8D9DA] text-[#424549] rounded-full flex justify-center items-center cursor-pointer" onClick={nextSlide}><FaArrowRight /></div>
                </div>
            </div>
            <div className='flex gap-7 px-14 overflow-hidden -z-20'>
              {
                data.map(
                  (d,i)=>{
                    return <Card {...d} key={i} />
                  }
                )

              }
              
              </div>
    </div>
  )
}

export default TopRest
