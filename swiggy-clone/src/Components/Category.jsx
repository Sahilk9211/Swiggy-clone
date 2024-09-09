import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Category = () => {
    const [slide,setSlide]=useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory =async()=>{
        const response =await fetch("http://localhost:5000/categories");
        const data =await response.json();
        setCategory(data);
        // console.log(data)
    }

    useEffect(
        ()=>{
            fetchCategory();
        },[]
    )

    // arrow button
    const prevSlide =()=>{
        if (categories.length -20 == slide) return false;
        setSlide(slide - 3)
    }

    const nextSlide =()=>{
        if (categories.length - 8 == slide) return false;
        setSlide(slide + 3)
    }

    
   

    return (
        <div className="max-w-[1200px] mx-auto py-3 ">
            <div className="flex items-center justify-between mx-14">
                <div className="font-bold text-2xl">
                    What's on your mind?
                </div>
                
                <div className="flex items-center  gap-2">
                    <div className="w-[30px] h-[30px] bg-[#ECECED] text-[#93979d] rounded-full flex justify-center items-center cursor-pointer"><FaArrowLeft onClick={prevSlide} /></div>
                    <div className="w-[30px] h-[30px] bg-[#D8D9DA] text-[#424549] rounded-full flex justify-center items-center cursor-pointer"><FaArrowRight onClick={nextSlide}/></div>
                </div>
            </div>
            <div className="flex px-10 overflow-hidden py-6 ">
                {
                    categories.map(
                        (cat,index)=>{
                            return (
                                <div  style={{
                                    transform:`translateX(-${slide* 100}%)`
                                }} 
                                key={index} className="flex-grow shrink-0 duration-500 ">
                                    <img src={"http://localhost:5000/images/" + cat.image} className="w-[145px]" alt="category" />
                                </div>
                            )
                        }
                    )
                }
            </div>
                <hr className="mt-6 mx-10" />
        </div>
    );
};

export default Category;
