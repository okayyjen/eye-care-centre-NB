import Image from 'next/image'
import ImageRow from './ImageRow';
import { ImageRowsData, ImageRowsData2 } from '../data/general';


const ImageBlock = () => {
    return (
        <div id="image-block-container">
            <div className = "flex items-center justify-center flex-col">

                <div className = "flex items-stretch justify-center" id = "row-1">
                    
                    {ImageRowsData.map((row, index) => (
                        <ImageRow
                        key={index}
                        id={row.id}
                        title={row.title}
                        main_title={row.main_title}
                        text={row.text}
                        link={row.link}
                        button_title={row.button_title}
                        />
                    ))}
                </div>

                <div className = "flex items-stretch justify-center bg-white">
                    {ImageRowsData2.map((row, index) => (
                        <ImageRow
                        key={index}
                        id={row.id}
                        title={row.title}
                        main_title={row.main_title}
                        text={row.text}
                        link={row.link}
                        button_title={row.button_title}
                        />
                    ))}
                </div>

            </div>
            


        </div>
    );
};

export default ImageBlock;