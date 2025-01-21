import Image from "next/image";
import Link from "next/link";
import React from "react";

const SofaSet = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden bg-[#FFF9E5]">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            height={100}
            width={100}
            alt="image"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="/Asgaard sofa 1.png"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 text-center">
              <p className="text-sm">New Arrivals</p>
              Asgaard Sofa
            </h1>
            <div className="flex justify-center mt-4">
              <Link href={"/"}>
                <button className="text-black py-2 px-6 border-4 border-gray-500 focus:outline-none hover:bg-indigo-400 rounded">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SofaSet;
