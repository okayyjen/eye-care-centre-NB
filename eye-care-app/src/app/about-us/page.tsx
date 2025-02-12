import "../homepage.css"
import ImageRow from "../components/ImageRow";
import { AboutUsImageRowsData, AboutUsImageRowsData2, AboutUsImageRowsData3 } from '../data/general';

export default function AboutUsPage(){
    return(
        <div className = "flex flex-col items-center">
            <div>
                {AboutUsImageRowsData.map((row, index) => (
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
            <div>
                {AboutUsImageRowsData2.map((row, index) => (
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
            <div>
                {AboutUsImageRowsData3.map((row, index) => (
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
    )
}