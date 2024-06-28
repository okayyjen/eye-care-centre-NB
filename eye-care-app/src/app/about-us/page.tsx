import "../homepage.css"
import "../aboutuspage.css"

import Image from "next/image"
import ImageRow from "../components/ImageRow";
import { ImageRowsData, ImageRowsData2 } from '../data/general';


export default function AboutUsPage(){
    return(
        <div id="aboutus-block-container">
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
    )
}