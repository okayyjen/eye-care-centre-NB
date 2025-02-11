import React from 'react';
import Image from 'next/image';

interface ImageRowProps {
  id: string;
  title: string;
  main_title: string;
  text: string;
}

const ImageRow: React.FC<ImageRowProps> = ({ id, title, main_title, text }) => {
  if(id == "row-1"){
    return (
        <div className = "flex max-w-[1200px] items-stretch justify-center">
            
            <Image className="max-w-[600px] block max-[1260px]:hidden"
            src={require("../images/activity_1.png")}
            alt="logo"
            layout="responsive"
            />
    
            <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                <h2>{title}</h2>
                <h1 className="pb-5 text-xl">{main_title}</h1>
                <section className="separator" >______</section>
                <p>{text}</p>
                <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px]">LOREM IPSUM</button>
            </div>
        </div>
    );
  }else{

    return (
        <div className = "flex max-w-[1200px] items-stretch justify-center">
            <div className = "bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                <h2>{title}</h2>
                <h1 className="pb-5 text-xl">{main_title}</h1>
                <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                <p>{text}</p>
                <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">LOREM IPSUM</button>
            </div>
            <Image className="max-w-[600px] block max-[1260px]:hidden" 
                    src={require("../images/activity_2.png")}
                    alt="logo"
                    layout="responsive"
            />
        </div>
    );

  }

  
};

export default ImageRow;
