// components/InstagramSection.tsx
import Link from 'next/link';
import React from 'react';

const InstagramSection: React.FC = () => {
  return (
    <section
      className="w-full h-[450px] bg-cover bg-center flex justify-center items-center py-20 px-4 relative"
      style={{
        backgroundImage: `url('/Rectangle 17.png')`, // Path background image
      }}
    >
      <div className="absolute inset-0 bg-[#FAF4F480] opacity-70"></div> {/* Overlay */}
      <div className="relative text-center max-w-2xl mx-auto z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          
          Our Instagram
        </h2>
        <p className="text-gray-600 mb-6 text-lg sm:text-xl">
          Follow our store on Instagram
        </p>
          <Link href={"https://www.linkedin.com/in/uzma-khan6643/"}>
        <button className="bg-white shadow-md text-black font-semibold py-3 px-6 rounded-full hover:shadow-lg transition duration-300">
          Follow Us
        </button>
          </Link>
      </div>
    </section>
  );
};

export default InstagramSection;
