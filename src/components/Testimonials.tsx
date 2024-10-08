import { TESTIMONIALS } from '@/app/constants';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="container mx-auto my-20 border-b pb-10 from-background-color-blue" id="testimonials">
              <div className="h-[10vh]" id={"how-it-works"}></div>
        <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
            What Our Clients Said
        </h2>
        <div className="flex flex-wrap">
            {TESTIMONIALS.map ((testimonial, index) => (
                <div key={index} className="w-full p-2 md:w-1/2 lg:w-1/4">
                    <div className="rounded-xl border p-10">
                    <div className="flex items-center">
                        <Image
                         className="mr-4 rounded-full border-4 border-orange-800"
                        src={testimonial.image}
                        width={80}
                        height={80}
                        alt={testimonial.name}
                        />
                        <div>
                        <h4 className="w-full">{testimonial.name}</h4>
                        <span className="text-sm text-orange-800">
                            {testimonial.instagram}
                        </span>
                        </div>
                    </div>
                    <p className="p-4">{testimonial.feedback}</p>
                    <p className="text-sm  text-red-700">
                        {testimonial.city_country}
                      </p>
                      </div>
                      </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonials;