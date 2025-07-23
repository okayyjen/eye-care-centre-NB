import React from 'react';

interface ImageRowProps {
  id: string;
  title: string;
  main_title: string;
  text: string;
}

const ImageRow: React.FC<ImageRowProps> = ({ id, title, main_title, text }) => {
  if (id == "row-1") {
    return (
      <div className="flex max-w-[1200px] items-stretch justify-center">
        <div className="max-[1260px]:hidden relative w-1/2 flex items-end bg-cover bg-[center_20%] bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/images/HP_BANNER.jpg')] before:bg-cover before:bg-[top_20%] before:bg-no-repeat before:z-[1]">
        </div>
        <div className="w-1/2 max-[1260px]:w-full bg-[#8695C0] flex flex-col justify-center text-white px-[60px] box-border p-[70px] max-[1260px]:p-[70px]">
          <h2>{title}</h2>
          <h1 className="pb-5 text-lg">{main_title}</h1>
          <section className="select-none my-[10px]">______</section>
          <p className="text-sm">{text}</p>
          <button className="mt-10 border-3 border-white w-auto py-3 px-7 rounded-[5px]">
            LOREM IPSUM
          </button>
        </div>
      </div>
    );
  }else{

    return (
      <div className="flex max-w-[1200px] items-stretch justify-center">
        <div className="w-1/2 max-[1260px]:w-full bg-white flex flex-col justify-center px-[60px] box-border p-[70px] max-[1260px]:p-[70px]">
          <h2>{title}</h2>
          <h1 className="pb-5 text-lg">{main_title}</h1>
          <section className="select-none my-[10px]" id="separator-style-2" >______</section>
          <p className="text-sm">{text}</p>
          <button className="mt-10 border-3 border-white w-auto py-3 px-7 rounded-[5px] bg-[#8695C0] text-white">LOREM IPSUM</button>
        </div>
        <div className="max-[1260px]:hidden relative w-1/2 flex items-end bg-cover bg-[center_20%] bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/images/HP_BANNER.jpg')] before:bg-cover before:bg-[top_20%] before:bg-no-repeat before:z-[1]">
        </div>
      </div>
    );

  }

};

export default ImageRow;
