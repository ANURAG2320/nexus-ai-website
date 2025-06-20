import React from 'react';
import Image from 'next/image';


const images = [
  { src: '/Company logo.svg', alt: 'Description for image 1' },
  { src: '/Company logo (1).svg', alt: 'Description for image 2' },
  { src: '/Company logo (2).svg', alt: 'Description for image 3' },
  { src: '/Company logo (3).svg', alt: 'Description for image 4' },
  { src: '/Company logo (4).svg', alt: 'Description for image 5' },
];

const LogoSection = () => {
  return (
    <div
      className="
        flex  flex-wrap         
        justify-evenly    
        items-center       
        gap-32              
        sm:gap-6           
        md:gap-8           
        p-4               
        sm:p-6             
        w-full             
        max-w-screen-xl    
        mx-auto            
      "
    >
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={200}
            height={150}
            className="
              w-full h-auto           
              max-w-[150px]            
              sm:max-w-[180px]        
              md:max-w-[220px]      
              lg:max-w-[250px]        
              rounded-lg               
              shadow-md                
              object-cover             
              transition-transform duration-300 hover:scale-10
            "
          />
        </div>
      ))}
    </div>
  );
};

export default LogoSection;