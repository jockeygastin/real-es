"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/app/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
    const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        SetMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 z-50 w-full">
                <div className="flex items-center justify-between rounded-b-lg
         bg-gradient-to-r from-pink-500 via-purple-900 to-green-100 text-white py-4 pl-4 md:pl-1">
                    <div className="w-full flex items-center justify-between">
                        <Link href={"/"}><div className="flex flex-row  items-center">
                            <Image
                                className="mr-2"
                                src="/logo.png"
                                width={70}
                                height={30}
                                alt="Logo"
                            />
                           
                            <span className="text-3xl font-bold tracking-tight bg-gradient-to-br from-yellow-500  to-white bg-clip-text text-transparent hover:text-black">RealEs</span>
                        </div></Link>

                        <div className="hidden lg:flex">
                            <ul className="flex items-center gap-10">
                                {NAV_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <Link className="text-lg font-semibold text-white hover:text-orange-500"
                                            href={item.url}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="hidden text-sm text-white lg:flex pr-2">
                            
                            <Link href={"/sign-in"}>
                            <Button variant="outline" className="mr-2 bg-orange-700">
                                Sign In
                            </Button>
                            </Link>
                            
                            <Link href={"/sign-up"}>
                            <Button className="bg-orange-700">Sign Up</Button>
                            </Link>

                        </div>
                    </div>
                    <div className="flex-col justify-end text-orange-700 md:flex lg:hidden pr-4 md:pr-0">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="rounded-md bg-blue-900 lg:hidden">
                        <ul className="flex flex-col items-center">
                            {NAV_LINKS.map((item: any, index: number) => (
                                <li key={index} className="py-4">
                                    <Link
                                        className="text-sm text-white font-semibold
                            hover:text-orange-600"
                                        href={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center justify-center pb-8
                       text-white lg:hidden ">
                             <Link href={"/sign-in"}>
                            <Button variant="outline" className="mr-2 bg-black">
                                Sign In
                            </Button></Link>
                            <Link href={"/sign-up"}>
                            <Button className="bg-slate-700">Sign Up</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
            <div className="relative left-0 top-0 h-[7vh] -z-10 "></div>

        </>
    );
};

export default Navbar