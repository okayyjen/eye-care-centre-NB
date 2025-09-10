import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function LaserTreatmentPage() {
    const t = useTranslations("LaserTreatmentService");
    return (
        
        <div>
            <div className="div-with-bg mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('serviceName')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('bannerSubTitle')}</p>
                </div>
            </div>

            <div className="flex flex-col items-center ">
                <div className="flex max-w-[1200px] items-stretch justify-center mb-24">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('serviceName')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <div className="space-y-2">
                            <p>
                                <span className="font-bold">{t('text1').split(' ').slice(0, 4).join(' ')}</span>
                                {` ${t('text1').split(' ').slice(4).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text2').split(' ').slice(0, 2).join(' ')}</span>
                                {` ${t('text2').split(' ').slice(2).join(' ')}`}
                            </p>
                            <p>
                                {t('text3').split(' ').slice(0, 1).join(' ')}
                                <span className="font-bold">{` ${t('text3').split(' ')[1]}`}</span>
                                <span className="font-bold">{` ${t('text3').split(' ')[2]}`}</span>
                                <span className="font-bold">{` ${t('text3').split(' ')[3]}`}</span>
                                {` ${t('text3').split(' ').slice(4).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text4').split(' ')[0]}</span>
                                <span className="font-bold">{` ${t('text4').split(' ')[1]}`}</span>
                                {` ${t('text4').split(' ').slice(2).join(' ')}`}
                            </p>
                            <p>{t('text5')}</p>
                            <p>
                                {t('text6').split(' ').slice(0, 1).join(' ')}
                                <span className="font-bold">{` ${t('text6').split(' ')[1]}`}</span>
                                <span className="font-bold">{` ${t('text6').split(' ')[2]}`}</span>
                                <span className="font-bold">{` ${t('text6').split(' ')[3]}`}</span>
                                <span className="font-bold">{` ${t('text6').split(' ')[4]}`}</span>
                                {` ${t('text6').split(' ').slice(5).join(' ')}`}
                            </p>
                        </div>


                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
            </div>
        </div>

    )
}