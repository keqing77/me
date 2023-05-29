import React from 'react';
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

const Card = ( ) => {
  return (
    <div id="app" className="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
    <img className="w-1/2 h-full rounded-l-sm" src="/hutao.jpg" alt="Room Image" />
    <div className="w-full flex flex-col">
        <div className="p-4 pb-0 flex-1 mx-auto">
            <h3 className="font-light mb-1 text-grey-darkest">Next-Profilio</h3>
            <span className="text-5xl text-grey-darkest mt-4 block">⭐️ 0</span>
            <div className="flex items-center mt-4">
                <div className="pr-2 text-xs">
                    <i className="fas fa-wifi text-green"></i>Next.js 
                </div>
                <div className="px-2 text-xs">
                    <i className="text-grey-darker far fa-building"></i> TypeScript
                </div>
            </div>
        </div>
        <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light text-center mx-auto">
            <i className="fas fa-chevron-right"></i> Release soon...
        </div>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          View Code
        </Link>
    </div>
    </div>
  );
};

export default Card;
