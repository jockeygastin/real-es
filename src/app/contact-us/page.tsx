import React from 'react'
import { TiArrowRightThick } from "react-icons/ti";

const page = () => {
    return (

        <>
            <div className="contactbg">
                <h1 className="text-6xl font-bold mx-16 pt-24 pb-5 bg-gradient-to-t from-white via-yellow-400  to-purple-700  bg-clip-text max-w-fit text-transparent">Building A Legacy of Execellence</h1>
                <p className=" text-white text-xl font-semibold mx-16 max-w-[20%]">Find your dream home with our real estate services. Whether you're looking to buy, sell, or rent, we're here to help.</p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <p className="text-4xl mx-auto md:max-w-[30%] text-center font-semibold bg-gradient-to-t from-yellow-600 via-pink-500 to-blue-700 bg-clip-text text-transparent">Whether you have a question, a project in mind, or want to explore partnership opportunities,
                    we'd love to hear from you.
                </p>
                <br /> <br />
                <br />
                <br />

            </div>
            <br /><br />
            <div>
                <p className="text-lg md:max-w-[40%] text-center mx-auto text-neutral-500">Our team is ready to assist with any inquiries you may have.Reach out to us via phone, email, or through out contact form, and we'll get back to you promptly.</p>
            </div>

            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br /> <br /><br />
            <br /><br />
            <br /><br />


            <h1 className="text-4xl font-semibold mx-auto max-w-[40%] text-center">Contact&nbsp;
                <span className="bg-gradient-to-r from-orange-500 via-purple-700 to-pink-800 bg-clip-text text-transparent">Us</span></h1>
            <br />
            <br /><br /><br />


            <div className="flex md:flex-row flex-col md:px-24 mx-10 gap-24  md:py-16">
                <div className="-mx-8" style={{ flex: 4 }}>
                    <img src="/blobcontact.png" alt="blobcontact" className='w-full' />
                </div>

                <div className="flex flex-col items-center justify-between max-w-[100%] md:max-w-[40%] my-16 py-24 md:py-24 gap-8 md:px-8 rounded-lg mt-10" style={{ flex: 6 }} id="input">
                    <input type="tel" placeholder="Name*" className="w-full rounded-lg border border-gray-400 md:p-3 p-1 bg-neutral-300" />
                    <input type="number" placeholder="phone*" className="w-full  rounded-lg border border-gray-400 md:p-3 p-1" />
                    <input type="email" placeholder="Email" className="w-full rounded-lg border border-gray-400  md:p-3 p-1" />
                    <input type="text" placeholder="Message" className="w-full  rounded-lg  border border-gray-400 md:p-3 p-1" />
                    <button className="flex flex-row w-full bg-orange-700 text-white px-4 md:py-3 py-1 rounded-xl hover:bg-black font-bold gap-2">Submit
                        <TiArrowRightThick size={24} />

                    </button>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <h1 className="text-4xl font-semibold mx-auto max-w-[40%] text-center">Our&nbsp;
                <span className="bg-gradient-to-r from-orange-500 via-purple-700 to-pink-800 bg-clip-text text-transparent">Offices</span></h1>
            <br />
            <br /><br /><br />

            <div className="flex md:flex-row flex-col items-center justify-between gap-8 px-16">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1207.3193519536694!2d77.7219286!3d12.9897409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae117eeef52cab%3A0x99b2c1b46eca4d6d!2sEavetop%20Softtech%20Private%20Limited!5e1!3m2!1sen!2sin!4v1728542235347!5m2!1sen!2sin" className='md:w-[1100px] w-full' height="450" loading="lazy">
                </iframe>
                <div className='-mt-48'>
                    <h1 className="text-3xl font-bold bg-gradient-to-t from-yellow-600 via-pink-500 to-blue-800 bg-clip-text text-transparent mx-16 text-center py-6">RealES</h1>
                    <p className=" max-w-[80%] mx-auto text-center">Maruthi Industrial Estate, 4th floor, Building No 3, ITPL Main Rd, KIADB Export Promotion Industrial Area, Bengaluru, Karnataka 560048</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
        </>

    );
};

export default page;