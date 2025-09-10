import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function GlaucomaManagementPage() {
    const t = useTranslations("MacularDegenerationService");
    return (
        
        <div>
            <div className="div-with-bg mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('serviceName')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('bannerSubTitle')}</p>
                </div>
            </div>

            <div className="flex flex-col items-center ">

                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title1')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text1')}</p>
                        <h1 className="pb-5 pt-14 text-xl">{t('title2')}</h1>
                        <p>{t('text2')}</p>
                        <p>{t('text2a')}</p>
                        <p>{t('text2b')}</p>
                        <p>{t('text2c')}</p>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>

                <div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
            
                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                    src={require("../../images/activity_1.png")}
                    alt="logo"
                    layout="responsive"
                    />
            
                    <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title3')}</h1>
                        <section className="separator" >______</section>
                        <p className="pb-4">{t('text3')}</p>
                        <p>{t('text3a')}</p>
                    </div>
                </div>
                </div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
                    <div className = "bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title4')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p className="pb-4">{t('text4')}</p>
                        <p className="pb-4">
                            {t('text4a').split(' ')[0]} <span className="font-bold">{t('text4a').split(' ')[1]}</span> {t('text4a').split(' ').slice(2).join(' ')}
                        </p>
                        <p className="pb-4">
                            {t('text4b').split(' ')[0]} <span className="font-bold">{t('text4b').split(' ')[1]}</span> {t('text4b').split(' ').slice(2).join(' ')}
                        </p>
                    </div>
                    <Image className="max-w-[600px] block max-[1260px]:hidden" 
                            src={require("../../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                    />
                </div>
                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-[#8695C0] text-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title5')}</h1>
                        <section className="select-none mb-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text5a')}</p>
                        <p>{t('text5b')}</p>
                        <p>{t('text5c')}</p>
                        <p>{t('text5d')}</p>
                        <p>{t('text5e')}</p>
                        <h1 className="pb-5 pt-14 text-xl">{t('title6')}</h1>
                        <section className="select-none mb-[30px]" id="separator-style-2" >______</section>
                        <p className="pb-5">{t('text6')}</p>
                        <p>{t('text6a')}</p>
                        <p>{t('text6b')}</p>
                        <p>{t('text6c')}</p>
                        <p>{t('text6d')}</p>
                        <p className="pb-5">{t('text6e')}</p>
                        <p className="pb-2">{t('text6f')}</p>
                        <p>{t('text6g')}</p>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
            </div>
        </div>

    )
}