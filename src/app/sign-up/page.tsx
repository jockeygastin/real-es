import { PasswordInput } from '@/components/PaswordInput';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (


        <>

            <div className="flex md:flex-row flex-col w-full signupbg mx-auto md:mt-24 md:mb-24 mt-16 rounded-lg">

                <div className="container flex flex-row md:w-[120%]">
                    <div className="text-2xl italic p-8 font-bold md:max-w-[75%] bg-gradient-to-tr from-black via-yellow-600 to-purple-800 bg-clip-text text-transparent">Find Your Dream Property.Whether you're looking to buy, sell, or rent, we're here to help.</div>
                </div>

                <div className="container bg-white opacity-90 text-center rounded-lg mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mt-4">Sign Up</h1>
                    <br />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-orange-500 bg-clip-text text-transparent">Welcome To RealEstate Website</h1>
                    <br />
                    <p>We make it easy for everyone to invest in real estate</p>
                    <br />
                    <Input type="text" required placeholder="Enter Your Email" className="border-orange-400 md:p-5 md:w-[450px] w-[240px]" />
                    <br />
                    <br />
                    {/* <input type="text" placeholder="Password" className="w-[450px] border-purple-400 border-2 rounded-md p-1" /> */}
                    <PasswordInput placeholder="Password" className="border-orange-400 md:p-5 md:w-[450px]" />
                    <br />
                    <br />

                    <span className="text-sm font-semibold">
                        <input type="checkbox" /> &nbsp;
                        <label className=""> I agree to the </label>
                        <Link href="/sign-up" className="text-blue-800">Terms</Link> &&nbsp;
                        <Link href="/sign-up" className="text-blue-800">Privacy Policy</Link>

                    </span>
                    <br />
                    <br />
                    <button className="text-white font-bold bg-gradient-to-r from-black via-green-500 to-purple-900 rounded-lg border-5 py-2 md:w-[450px] w-[190px] mx-auto my-8 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-purple-900 hover:to-yellow-500">Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default page;