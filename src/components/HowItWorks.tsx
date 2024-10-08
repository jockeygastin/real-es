import { HOW_IT_WORKS } from "@/app/constants";
import { CircleCheckBig } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container mx-auto my-10 border-b pd-10" >
      <div className="h-[10vh]" id={"how-it-works"}></div>
      <h2 className="text-center text-3xl tracking-tighter sm:text-4xl">
        {HOW_IT_WORKS.title}
      </h2>
      <p className="mx-auto my-10 max-w-4xl text-center text-neutral-800">
        {HOW_IT_WORKS.content}
      </p>
      <div className="works relative h-[640px] rounded-xl overflow-hidden">
        <div className="overlay absolute left-0 top-0 w-full h-full bg-red-600 opacity-50 z-10"></div>
        <div className="absolute left-0 top-0 w-full h-full overflow-y-hidden p-10
           md:p-20 z-50 flex flex-row justify-between items-center flex-wrap gap-4">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center">
                <CircleCheckBig className="mr-4 text-green-400" />
                <h6 className="font-medium uppercase text-neutral-200">
                  {step.title}
                </h6>
              </div>
              <p className="my-2 max-w-80 p-2 text-white text-md ">{step.text}</p>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;