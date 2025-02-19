import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function GlaucomaManagementPage() {
    const t = useTranslations("GlaucomaManagementService");
    return (
        
        <div>
            <div className='div-with-bg mb-24'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fffcfcef] pt-4">{t('serviceName')}</h1>
                </div>
            </div>

            <div className="flex flex-col items-center ">

                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title1')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text1')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">{t('buttonTitle1')}</button>
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
                        <h1 className="pb-5 text-xl">{t('title2')}</h1>
                        <section className="separator" >______</section>
                        <p>{t('text2')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px]">{t('buttonTitle2')}</button>
                    </div>
                </div>
                </div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
                    <div className = "bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title3')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text3')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">{t('buttonTitle3')}</button>
                    </div>
                    <Image className="max-w-[600px] block max-[1260px]:hidden" 
                            src={require("../../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                    />
                </div>
            </div>
        </div>

    )
}