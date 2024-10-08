import { SERVICES_TEXT } from "@/app/constants";
import Image from "next/image";

const Services = () => {
    return (
        <div className="container mx-auto my-8 border-b pb-10" id="services">
                  <div className="h-[10vh]" id={"how-it-works"}></div>
            <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl
       lg:text-5xl">
                Services</h2>
            <div className="flex flex-wrap gap-x-28">
                <img
                    className="rounded-xl object-cover"
                    src={"/service.png"}
                    style={{
                        height: '420px',
                        width: '720px'
                    }}
                />

                  <div className="px-4">
                    <h2 className="text-5xl lg:text-7xl">
                        We are
                        <span className="leading-snug lg:block"> available in</span>
                        <span className="font-bold"> 40+ Countries!</span>
                    </h2>
                    <p className="max-w-xl py-6 text-lg tracking-tighter text-neutral-800">{SERVICES_TEXT}</p>
                </div>
            </div>
        </div>
    );
};

export default Services;