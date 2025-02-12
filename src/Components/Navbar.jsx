import React from 'react'
import {Menu , X} from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png'
import  {navItems} from '../constants'
import { Link } from 'react-scroll';


const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);    
    const toggleNavbar = ()=>{
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="nav sticky top-0 z-50 py-3  bg-white">
        <div className="container px-4 mx-auto ralative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-14 w-14 mr-1' src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>Shreedhan Homestay</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item,index)=>(
                         <Link key={index} className='cursor-pointer' to={item.to} smooth={true} duration={500}>{item.label}</Link>
                        // <a href={item.href}>{item.label}</a>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a className='py-2 bg-gradient-to-r from-green-500 to-green-800 rounded-md  px-3 ' href="https://wa.me/918923196771?text=Hello%20I%20am%20interested%20in%20booking%20your%20homestay.
                    ">WhatsApp US</a>
                    {/* <a className='py-2 bg-gradient-to-r from-green-500 to-green-800 rounded-md  px-3  ' href="#">Create an Account</a> */}
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen?<X/> : <Menu/>}
                        </button>
                </div>
                  
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index)=>(
                            <li key={index} className='py-4'>
                         <Link className='cursor-pointer text-white' to={item.to} smooth={true} duration={500}>{item.label}</Link>
                         </li>
                        ))}
                    </ul>
                    <div className="flex space-x-5 py-4">
                    <a className='py-2  px-3 border rounded-md' href="#">Sign in</a>
                    <a className='py-2 bg-gradient-to-r from-green-500 to-green-800 rounded-md  px-3  ' href="#">Create an Account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
