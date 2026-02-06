import Image from 'next/image';
import { useTranslations } from "next-intl";
import { ArticleSectionComponent } from '@/app/components/ArticleSectionComponent';
export default function RedEyesAndUrgentEyeConditionsPage() {
    const t = useTranslations("RedEyesAndUrgentEyeCareService");
    return (
        <div>
            <div className="div-with-bg mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('serviceName')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('bannerSubTitle')}</p>
                </div>
            </div>

            <div className="flex flex-col items-center ">
                <div className="flex bg-[#FFFF] max-w-[1200px]">
                    <div className="w-1/2">
                        <ArticleSectionComponent
                            title={t("title1")}
                            text={t("text1")}
                            button={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <ArticleSectionComponent
                            title={t("title2")}
                            text={t("text2")}
                            button={false}
                        />
                    </div>

                </div>
                <div className="flex max-w-[1200px] items-stretch justify-center">

                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                        src={require("../../images/activity_1.png")}
                        alt="logo"
                        layout="responsive"
                    />

                    <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title3')}</h1>
                        <section className="separator" >______</section>
                        <p>{t('text3')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px]">{t('buttonTitle3')}</button>
                    </div>
                </div>

                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title4')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text4')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">{t('buttonTitle3')}</button>
                    </div>
                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                        src={require("../../images/activity_2.png")}
                        alt="logo"
                        layout="responsive"
                    />
                </div>

                <div className="flex max-w-[1200px] bg-[#8695C0] text-white">
                    <div className="w-1/2">
                        <ArticleSectionComponent
                            title={t("title5")}
                            text={t("text5")}
                            button={false}
                        />
                    </div>
                    <div className="w-1/2">
                        <ArticleSectionComponent
                            title={t("title6")}
                            text={t("text6")}
                            button={false}
                        />
                    </div>

                </div>
                <div className="max-w-[1200px] mb-24 bg-white">
                    <ArticleSectionComponent
                        title={t("title7")}
                        text={t("text7")}
                        button={false}
                    />
                </div>


            </div>
        </div>

    )
}