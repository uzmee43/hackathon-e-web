import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Our_blog = () => {
  return (

    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        {/* {/* <div className="w-24 h-full bg-indigo-500" /> */}
       </div> 
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center items-center">
        
        <div className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-center">
        <h1 className='font-medium title-font text-4xl text-center'> Our Blogs</h1>
        Find a bright ideal to suit your taste with our great selection
        </div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border-2 border-blue-800">
        <div className="rounded-lg h-64 overflow-hidden ">
          <Image
          height={200}
          width={200}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Rectangle 13.png"
          />
        </div>
       
        <p className="text-base leading-relaxed mt-2">
        Going all-in with millennial design
        </p>
        <p className="text-indigo-500 inline-flex items-center mt-3 text-center">
        <Link href={"/about"} className=' underline underline-offset-4 text-center'> Read Mor</Link>
        
         
        </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border-2 border-blue-800">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
          height={200}
          width={200}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Rectangle 14.png"
          />
        </div>
        
        <p className="text-base leading-relaxed mt-2 text-center">
        Going all-in with millennial design
        </p>
        <p className="text-indigo-500 inline-flex items-center mt-3">
        <Link href={"/about"} className=' underline underline-offset-4 text-center'> Read Mor</Link>
        
          
        </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:border-2 border-blue-900" >
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
          height={200}
          width={200}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/Rectangle 15.png"
          />
        </div>
       
        <p className="text-base leading-relaxed mt-2 text-center">
        Going all-in with millennial design
        </p>
        <p className="text-indigo-500 inline-flex items-center p-3 text-center">
            <Link href={"/about"} className=' underline underline-offset-4'> Read Mor</Link>
       
         
        </p>
      </div>
    </div>
    <Link href={"/about"}>
    
    <h2 className=' text-center font-semibold pt-20 text-black'>View All Post</h2>
    </Link>
  </div>
</section>

      

  )
}

export default Our_blog
