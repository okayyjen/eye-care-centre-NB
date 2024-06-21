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
        <div id = "row-1">
            
            <Image id="activity-image-1"
            src={require("../images/activity_1.png")}
            alt="logo"
            layout="responsive"
            />
    
            <div className="image-block-textbox">
                <h2>{title}</h2>
                <h1 className="block-title">{main_title}</h1>
                <section className="separator" >______</section>
                <p>{text}</p>
                <button className="button-style-1">LOREM IPSUM</button>
            </div>
        </div>
    );
  }else{

    return (
        <div id = "row-2">
            <div className="image-block-textbox">
                <h2>{title}</h2>
                <h1 className="block-title">{main_title}</h1>
                <section className="separator" id="separator-style-2" >______</section>
                <p>{text}</p>
                <button className="button-style-2">LOREM IPSUM</button>
            </div>
            <Image id="activity-image-2"
                    src={require("../images/activity_2.png")}
                    alt="logo"
                    layout="responsive"
            />
        </div>
    );

  }

  
};

export default ImageRow;
