import "../../homepage.css";
import ImageRow from "../../components/ImageRow";
import { ImageRowsData, ImageRowsData2 } from '../../data/general';
import { useTranslations } from "next-intl";
export default function AboutUsPage(){
    const t = useTranslations('AboutUs');
    return(
        <div className = "flex flex-col items-center">
            <div>
                {ImageRowsData2.map((row, index) => (
                    <ImageRow
                    key={index}
                    id={row.id}
                    title={t('subTitle1')}
                    main_title={t('title1')}
                    text={t('text1')}
                    />
                ))}
            </div>
            <div>
                {ImageRowsData.map((row, index) => (
                    <ImageRow
                    key={index}
                    id={row.id}
                    title={t('subTitle2')}
                    main_title={t('title2')}
                    text={t('text2')}
                    />
                ))}
            </div>
            <div>
                {ImageRowsData2.map((row, index) => (
                    <ImageRow
                    key={index}
                    id={row.id}
                    title={t('subTitle3')}
                    main_title={t('title3')}
                    text={t('text3')}
                    />
                ))}
            </div>
        </div>
    )
}