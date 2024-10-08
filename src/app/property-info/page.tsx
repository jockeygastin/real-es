'use client'
import { Star } from "lucide-react";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineBathtub } from "react-icons/md";
import { IoBedOutline, IoCarSportOutline } from "react-icons/io5";
import { BiArea } from "react-icons/bi";




import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const page = () => {
  return (
    <>
      <div className="property-info-hero mx-auto h-[60vh] w-[180vh] relative rounded-xl">
        <h1 className="absolute bottom-6 left-12 text-3xl font-semibold text-white bg-gradient-to-r
         from-purple-900 to-orange-800 rounded-lg p-1">
          Property Description
        </h1>
      </div>
      <div className="flex flex-row items-start justify-between px-24 mt-16 gap-16 ">

        {/* First box */}
        <div className="w-[70%]">
          <div className="flex flex-row items-center justify-between w-[50%]">
            <h1 className="text-3xl font-semibold text-purple-900 ">Cosy Apartment for Rent</h1>
            <div className="flex flex-row items-center justify-start gap-2">
              <h1 className="text-2xl font-semibold">4.8</h1>
              <Star fill="gold" strokeWidth={0} size={29} />
              <Star fill="gold" strokeWidth={0} size={30} />
              <Star fill="gold" strokeWidth={0} size={30} />
              <Star fill="gold" strokeWidth={0} size={30} />
              {/* <Star fill="gold" strokeWidth={1} size={32} /> */}
              <img src="/goldenstar.png" className="w-6" alt="" />

            </div>
          </div>
          <br />

          <div className="flex flex-row items-center justify-start gap-2 ">
            <a href="https://maps.app.goo.gl/PR71FJdFbFgbhyju9" className="text-2xl text-neutral-900" target="_blank"><GrMapLocation /></a>
            Maruthi Industrial Estate, 4th floor,
            Building No 3, ITPL Main Rd,
            KIADB Export Promotion Industrial Area, Bengaluru, Karnataka 560048
          </div>


          <p className="lg:max-w-6xl py-8 text-neutral-800">
            <span className="font-semibold">Description:</span>
            located on the plateau central
            and close to all amenities, the location of this apartment on the
            first floor of a downtown building will be ideal for your "chill and work".
            A large living room open to the kitchen and the work area with sofa bed, a flat screen TV,
            coffee table.A dining table. A dining table for your taste
            your best dishesand four chairs. For travellers the most music lovers, a Bluetooth speaker
            is at your disposar and of course internet broadband with wifi.
          </p>

          <Carousel opts={{ loop: true }} plugins={[Autoplay({ playOnInit: true })]}>
            <CarouselContent>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/dining-room.jpg" alt="Dining room" /></CarouselItem>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/kitchen.jpg" alt="Dining room" /></CarouselItem>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/living-room.jpg" alt="Dining room" /></CarouselItem>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/Hall.jpg" alt="Dining room" /></CarouselItem>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/real-estate.jpg" alt="Dining room" /></CarouselItem>
              <CarouselItem className="basis-1/4 rounded-xl overflow-hidden"><img src="/garden.jpg" alt="Dining room" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Second box */}
        <div className="w-[30%]">
          <div className="w-full">
            <div className="container top-10 my-9 p-4 ">
              <p>Brief Information</p>
              <span className="font-semibold">Owner:</span>
              Real estate agency
              <br />
              <br />
              Explore the latest properties in your city
              <br />
              <br />

              <div className="flex flex-row items-center justify-between gap-1 bg-slate-300 p-3 rounded-lg">
                <div className="flex">
                  <IoBedOutline size={25} />
                  <p className="font-semibold">3 Beds</p>
                </div>

                <div className="flex">
                  <MdOutlineBathtub size={25} />
                  <p className="font-semibold">2 Baths</p>
                </div>

                <div className="flex">
                  <IoCarSportOutline size={25} />
                  <p className="font-semibold">1 Car</p>
                </div>

                <div className="flex">
                  <BiArea size={25} />
                  <p className="font-semibold">1,250 sqft <sup className="font-extrabold">2</sup></p>
                </div>

              </div>
              <div className="flex flex-row gap-14 p-4">
                <p className="text-sm">1-day rental
                  <strong className="text-lg">$80</strong>/night
                </p>

                <p className="text-sm">Week rental
                  <strong className="text-lg">$70</strong>/week
                </p>
              </div>

              <button className="bg-purple-900 text-white hover:bg-black py-2 px-12 rounded-lg w-[60%]">Show Contacts</button>
            </div>
          </div>
        </div>
      </div>

      <br /><br />

    </>


  );
};

export default page;