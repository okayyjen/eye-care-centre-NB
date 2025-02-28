import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function DiabetesPage() {
    const t = useTranslations("DiabetesService");
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
                        <h1 className="pb-5 text-xl">{t('serviceName')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text1')}</p>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>

                <div className = "flex max-w-[1200px] items-stretch justify-center">
            
                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                    src={require("../../images/activity_1.png")}
                    alt="logo"
                    layout="responsive"
                    />
            
                    <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title2')}</h1>
                        <section className="separator" >______</section>
                        <p>{t('text2')}</p>
                    </div>

                </div>
                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title3')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <div className="space-y-2">
                            <p>
                                <span className="font-bold">{t('text3').split(' ').slice(0, 2).join(' ')}</span>
                                {` ${t('text3').split(' ').slice(2).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text3a').split(' ').slice(0, 2).join(' ')}</span>
                                {` ${t('text3a').split(' ').slice(2).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text3b').split(' ').slice(0, 2).join(' ')}</span>
                                {` ${t('text3b').split(' ').slice(2).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text3c').split(' ')[0]}</span>
                                {` ${t('text3c').split(' ').slice(1).join(' ')}`}
                            </p>
                            <p>
                                <span className="font-bold">{t('text3d').split(' ')[0]}</span>
                                {` ${t('text3d').split(' ').slice(1).join(' ')}`}
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
            
                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                    src={require("../../images/activity_1.png")}
                    alt="logo"
                    layout="responsive"
                    />
            
                    <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title4')}</h1>
                        <section className="separator" >______</section>
                        <p>{t('text4')}</p>
                    </div>
                </div>
                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title5')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <div className="space-y-2">
                            <p>{t('text5a')}</p>
                            <p>{t('text5b')}</p>
                            <p>{t('text5c')}</p>
                            <p>{t('text5d')}</p>
                            <p>{t('text5e')}</p>
                        </div>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
            </div>
        </div>

    )
}