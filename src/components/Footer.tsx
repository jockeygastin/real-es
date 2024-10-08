import { FOOTER } from "@/app/constants";
import { link } from "fs";
import { FacebookIcon, GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-600 via-purple-900 to-orange-800 text-white pt-8">
        <div className="container mx-auto">
            <div className="flex flex-wrap border-b border-orange-200">
                <div className="w-full sm:w-1/2 lg:w-6/12 p-4">
                <h1 className="text-3xl font-bold">RealEs</h1>
                <p className="lg:max-w-sm py-8 text-sm">{FOOTER.description}</p>
                       <h1 className="text-2xl font-bold mb-4 ml-4">Social link</h1>
                <div className="flex flex-wrap gap-4">
                  <a href="https://facebook.com" target="-blank">
                 <FacebookIcon/> 
                 </a> 
                 <a href="https://github.com" target="-blank">
                 <GithubIcon/>
                 </a>
                 <a href="https://instagram.com" target="-blank">
                 <InstagramIcon/>
                 </a>
                 <a href="https://x.com" target="-blank">
                 <TwitterIcon/> 
                 </a>
                </div>
                </div>
                {FOOTER.categories.map((category, index) =>(
                  <div key={index} className="w-full sm:w-2/12 p-4">
                    <h3 className="font-semibold uppercase pb-4">{category.name}</h3>
                    <ul>
                      {category.links.map((link, index) => (
                        <li key={index} className="my-4">
                          <Link 
                          href={link.url}
                          className="text-sm hover:text-amber-300"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
              <p className="p-4 text-center text-sm text-neutral-100">
                {FOOTER.copyright}
              </p>
        </div>
    </div>
  );
};

export default Footer;