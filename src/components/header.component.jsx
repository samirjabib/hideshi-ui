import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GrFavorite } from 'react-icons/gr';
import {  HiOutlineUserCircle } from 'react-icons/hi';
import { BsHandbag } from 'react-icons/bs'
import Hamburger from "hamburger-react";
import {RiShoppingBagLine} from 'react-icons/ri'
import { Link } from "react-router-dom";


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
        path:'/login',
        display:'Custom',
    }
]




const Header = () => {


    const [ open, setOpen ] = useState(false)

    const onToggle = (toggle) => {
        if(toggle){
            console.log('hice click en el hamburguer')
        } else {
            console.log('hice click en el x')
        }

    }
   

    return (
        <header className=" h-20 flex flex-col justify-center shadow-2xl  bg-[#EDF2F4] ">
            
            <nav className="bg-[#EDF2F4] w-full flex justify-between md:justify-around h-16 p-2">

                <h2 className="font-semibold  text-xl md:text-2xl p-2 self-center"><Link to='/'>HIDESHI</Link></h2>

                  {/* DESKTOP NAV */}
                <ul className="bg-red-70 flex items-center gap-4  p-2 self-center ">
                   {
                    navLinks.map( (link, index) => {
                        const { path, display} = link
                        return(
                            <li key={index} className='text-lg hidden md:block'>
                                <NavLink to={path}>
                                    {display}
                                </NavLink>
                            </li>
                        )
                    })
                   }
                   
                </ul>

                

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