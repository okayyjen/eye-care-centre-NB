import Image from 'next/image'
import ImageRow from './ImageRow';
import { ImageRowsData, ImageRowsData2 } from '../data/general';


const ImageBlock = () => {
    return (
        <div id="image-block-container">
            <div id="row-container">

                <div id = "row-1">
                    
                    {ImageRowsData.map((row, index) => (
                        <ImageRow
                        key={index}
                        id={row.id}
                        title={row.title}
                        main_title={row.main_title}
                        text={row.text}
                        />
                    ))}
                </div>

                <div id = "row-2">
                    {ImageRowsData2.map((row, index) => (
                        <ImageRow
                        key={index}
                        id={row.id}
                        title={row.title}
                        main_title={row.main_title}
                        text={row.text}
                        />
                    ))}
                </div>

            </div>
            


        </div>
    );
};

export default ImageBlock;