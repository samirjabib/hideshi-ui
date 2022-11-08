import { Fragment } from "react";
import heroBackgrounds from "../assets/background-hero";
import { useState, useEffect, useRef } from "react";

const Hero = () => {

    let count = 0;
    let slideInterlval;



   

    return (
        <Fragment>
            
            
                {
                    heroBackgrounds.map( background => {
                        return(
                            <div className="relative" key={background.id}>

                                <img src={background.image} className='w-full h-screen object-cover' />

                                <div className= "absolute top-[50%] bottom-[50%] justify-center items-center flex-col md:flex-row flex w-full  h-32 gap-6">

                                    <button className="bg-[#2b2d42] px-12 py-4 text-2xl   w-52 shadow2xl rounded-2xl hover:text-[#2b2d42] hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <h2 className="text-[#edf2f4] font-bold">Tienda</h2>   
                                    </button>

                                    <button className="bg-[#ffc300] px-12 py-4 text-2xl  w-52 shadow2xl rounded-2xl hover:text-[#2b2d42] hover:shadow-[inset_13rem_0_0_0]
                                     hover:shadow-blue-400 duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <h2 className="text-[#edf2f4] font-bold">Colección</h2>   
                                    </button>
                              
                                                                 
                                </div>

                            </div>

                        )
                    })
                }
        </Fragment>
    );
};

export default Hero;