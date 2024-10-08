"use client";
import {Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/app/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        SetMobileDrawerOpen (!mobileDrawerOpen);
    };

  return (
    <nav className="fixed z-50 w-full">
        <div className="flex items-center justify-between rounded-b-lg
         bg-gradient-to-r from-pink-500 via-purple-900 to-green-100 text-white py-4">
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-row  items-center">
                <Image
                className="mr-2"
                src="/logo.png"
                width={70}
                height={30}
                alt="Logo"
                />
                <span className="text-2xl font-semibold tracking-tight text-white hover:text-black">RealEs</span>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex items-center gap-10">
                        {NAV_LINKS.map ((item, index) => (
                          <li key={index}>
                            <Link className="text-lg font-semibold text-white hover:text-orange-500"
                            href={item.url}>
                             {item.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden text-sm text-white lg:flex">
                    <Button variant="outline" className="mr-2 bg-orange-700">
                      Sign In
                    </Button>
                     <Button  className="bg-orange-700">Sign Up</Button>
                </div>
            </div>
            <div className="flex-col justify-end text-orange-800 md:flex lg:hidden">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
            </div>
        </div>
           {mobileDrawerOpen && (
            <div className="rounded-md bg-orange-600 lg:hidden">
                <ul className="flex flex-col items-center">
                    {NAV_LINKS.map((item:any, index:number) => (
                        <li key={index} className="py-4">
                            <Link 
                            className="text-sm text-white
                            hover:text-orange-500"
                            href={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center pb-8
                text-white lg:hidden">
                 <Button variant="outline" className="mr-2 bg-black">
                    Sign In
                 </Button>
                 <Button className="bg-slate-700">Sign Up</Button>
                </div>
            </div>
           )}
    </nav>
  );
};

export default Navbar