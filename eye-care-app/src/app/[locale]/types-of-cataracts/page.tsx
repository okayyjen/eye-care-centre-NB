import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function CataractPage() {
    const t = useTranslations("CataractService");
    return (
        
        <div>
            <div className='div-with-bg mb-24'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fffcfcef] pt-4">{t('serviceName')}</h1>
                </div>
            </div>

            <div className="flex flex-col items-center ">
                <div className="flex max-w-[1200px] items-stretch justify-center mb-24">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('serviceName')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <div className="space-y-2">
                            <p>
                                {t('text1').split(' ')[0]}
                                <span className="font-bold">{` ${t('text1').split(' ').slice(1, 4).join(' ')}`}</span>
                                {` ${t('text1').split(' ').slice(4).join(' ')}`} {/* Rest of the text */}
                            </p>
                            <p>
                                {t('text2').split(' ')[0]}
                                <span className="font-bold">{` ${t('text2').split(' ').slice(1, 3).join(' ')}`}</span>
                                {` ${t('text2').split(' ').slice(3).join(' ')}`} {/* Rest of the text */}
                            </p>
                            <p>
                                <span className="font-bold">{t('text3').split(' ').slice(0, 3).join(' ')}</span>
                                {` ${t('text3').split(' ').slice(3).join(' ')}`}
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
            </div>
        </div>

    )
}