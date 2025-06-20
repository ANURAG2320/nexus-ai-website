import React from 'react'
import Form from './ui/form'

const WeAreSection = () => {
  return (
   <>
   <div className='p-20'>

       <div className="p-10 sm:p-6 md:p-8 w-full max-w-full lg:max-w-[100%] max-h-[100%] h-auto  bg-[#1A1A1A] rounded-xl flex flex-col justify-between container mx-auto flex flex-col md:flex-row gap-4">



<div className="container mx-auto flex flex-col gap-4 p-4">
     
        <div className="flex flex-col md:flex-row gap-4">
           {/* 1st div */}
            <div className="flex-1 bg-transparent text-white p-8 rounded-lg  flex items-center justify-center min-h-[200px]">
                <h1 className="text-[50px] font-bold">We’re here to connect and assist you</h1>
                
            </div>

        {/* 2nd div */}
            <div className="flex-1  text-white p-8 rounded-lg  flex items-center justify-center min-h-[200px]">
                <Form />
            </div>
        </div>

        {/* 3rd div */}
        <div className="w-full  text-white p-8 rounded-lg  flex items-center justify-center min-h-">
            <img src="/wearesection.svg" alt="" />
        </div>

    </div>
   </div>













</div>

   
   </>
  )
}

export default WeAreSection
