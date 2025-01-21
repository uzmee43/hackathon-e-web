import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sofa = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#FBEBB5]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap lg:flex-nowrap items-center">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 text-center lg:text-left">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              <p className="text-sm">New Arrivals</p>
              Rocket single seater
            </h1>
            <div className="flex mt-6 items-center justify-center lg:justify-start">
              <Link href={"/"}>
                <button className="text-black py-2 px-6 border-b-4 border-gray-500 focus:outline-none hover:bg-indigo-400 rounded">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <Image
            height={400}
            width={400}
            alt="image"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/sofaset.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Sofa;
