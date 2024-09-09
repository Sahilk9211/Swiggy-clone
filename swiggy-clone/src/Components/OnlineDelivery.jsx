import React, { useEffect, useState } from "react";
import Card from "./Card";

useEffect
const OnlineDelivery = () => {
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

  return (
    <div className="max-w-[1200px] mx-auto py-7  px-5">
      <div className="flex items-center justify-between mx-14">
        <div className="font-bold text-2xl mb">
          Restaurants with online food delivery in Mumbai
        </div>
      </div>
      <div className="grid lx:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 pl-14  ">
        {
            data.map(
                (d,i)=>{
                    return <Card {...d}/>
                }
            )
        }
      </div>

      <hr className="mt-6 mx-10" />
    </div>
  );
};

export default OnlineDelivery;
