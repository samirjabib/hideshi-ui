import { useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


import { GrFavorite } from 'react-icons/gr';
import {  HiOutlineUserCircle } from 'react-icons/hi';
import {RiShoppingBagLine} from 'react-icons/ri'

import Hamburger from "hamburger-react";


const navLinks = [
    
    {
        path:'/shop',
        display:'Tienda',
    },

    {
        path:'/',
        display:'Coleccion',
        subLinks:[
            { display:'anime', path:'/shop/anime'},
            { display:'roman', path:'/shop/anime'},
            { display:'greece', path:'/shop/anime'},
            { display:'oriental', path:'/shop/anime'},

        ]
    },
    
    {
        path:'/custom',
        display:'Custom',
    },

    {
        path:'/login',
        display:'Login',
    }
]




const Header = () => {


    const [ open, setOpen ] = useState(false)

    console.log(open)
    

    const onToggle = (toggle) => {
        if(toggle){
            setOpen(true)
        } else {
            setOpen(false)
        }

    }
   

    return (
        <header className=" h-20 flex flex-col justify-center shadow-2xl bg-[#EDF2F4] fixed w-full top-0 z-50 ">
            
            <nav className="bg-[#EDF2F4] w-full flex justify-between md:justify-around h-16 p-2">
                <h2 className="font-semibold md:hidden text-xl md:text-2xl p-2 self-center"><Link to='/'>HIDESHI</Link></h2>

        
                <Link className="flex">
                    <img src="" alt="LOGO" className="self-center bg-red-300 border-2 border-black w-16 h-12 flex items-center justify-center"/>
                    <h2 className="font-semibold hidden md:flex text-xl md:text-2xl p-2 self-center"><Link to='/'>HIDESHI</Link></h2>
                </Link>

                  {/* DESKTOP NAV */}
                <ul className={`
                    flex flex-col items-center
                    w-72 h-screen fixed mt-20 gap-4 p-4
                    left-0 
                    bg-[#2b2d42]/90 
                    font-medium
                    shadow-2xl text-white top-0 <<
                    transition-all duration-500 ease-in z-40  

                    md:flex md:items-center
                    md:flex-row  md:justify-around
                    md:mt-0 
                    md:w-40 md:h-auto
                    md:static
                    md:shadow-none
                    md:bg-[#EDF2F4]
                    md:text-[#2b2d42]
                   
                    ${
                        open 
                            ? 'left-0'
                            : 'left-[-40rem]'
                    }
                    
                
                `}>
                   {
                    navLinks.map( (link, index) => {
                        const { path, display} = link
                        return(
                            <li key={index} className='text-lg mt-12 md:mt-0'>
                                <NavLink className='m-16 relative group' path={path}>
                                    {display}
                                    <span className={`absolute -bottom-2 left-1/2 w-0 h-2  bg-[#2b2d42] group-hover:w-1/2 group-hover:transition-all ${open ? 'bg-[#ffffff]' : 'bg-[#2b2d42]' }`}></span>
                                    <span className={`absolute -bottom-2 right-1/2 w-0 h-2 bg-[#2b2d42] group-hover:w-1/2 group-hover:transition-all ${open ? 'bg-[#ffffff]' : 'bg-[#2b2d42]' }`}></span>
                                </NavLink>
                            </li>
                        )
                    })
                   }
              
                </ul>

                <div className={
                `   
                    md:hidden
                    ${
                        open
                            ? 'fixed w-full h-screen z-30 bg-black/50 top-20 left-0'
                            : 'hidden'
                    }
                `


                
                }></div>
                

                <div className="flex md:gap-4 cursor-pointer">
                    <GrFavorite size={22} className='self-center hidden md:block'/>
                    <RiShoppingBagLine size={22} className='self-center '/>
                    <HiOutlineUserCircle size={25} className='self-center hidden md:block '/> 

                    <span className="self-center md:hidden">
                        <Hamburger 
                            direction="left" 
                            size={20} duration={0.8}
                            className="self-center"
                            onToggle={onToggle}
                    />
                </span>  
                </div>
                
         
             
           

            </nav>
        </header>
    );
};

export default Header;