import "../homepage.css"
import ImageRow from "../components/ImageRow";
import { ImageRowsData, ImageRowsData2 } from '../data/general';

export default function AboutUsPage(){
    return(
        <div className = "flex flex-col items-center">
            <div>
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
            <div>
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
            <div>
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
    )
}