import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function DoctorSekhavatPage() {
    const t = useTranslations('Sekhavat');
    return (
        <div className="flex justify-center flex-wrap">
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-center">
                <div className="w-full md:w-[600px] px-4 md:px-16 bg-[#8794BF] text-white py-8 md:py-16 text-[19px]">
                    <p className="doctor-title-text">{t('title')}</p>
                    <p className="text-[28px]">{t('name')}</p>
                    <div className="separator">____</div>
                    <p>
                        {t('bio')}
                        <Link href="https://hexiris.ca/" className="underline hover:no-underline">
                            Hexiris Pharma.
                        </Link>
                    </p>
                </div>
  
                <div className="w-full md:w-[600px] px-4 md:pl-[15px] flex flex-col items-center order-2 md:order-none">
                    <div className="w-[300px]">
                        <Image
                            className="w-[50px] md:w-[100px] h-auto mt-[20px] mb-[20px]"
                            src={require("../../images/sekhavat.png")}
                            alt="doctor"
                            layout="responsive"
                        />
                    </div>
    
                    <p className="text-[28px]">{t('name')}</p>
                    <div className="separator">____</div>

                    <div>
                        <div className="flex items-center pb-[25px]">
                            <div className="min-w-[78px] flex">
                                <Image
                                    className="check-icon" 
                                    src={require("../../images/check.png")}
                                    alt="check icon"
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-[20px] pl-[15px]">{t('bp1')}</p>
                        </div>
            
                        <div className="flex items-center pb-[25px]">
                            <div className="min-w-[78px] flex">
                                <Image
                                    className="check-icon"
                                    src={require("../../images/check.png")}
                                    alt="check icon"
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-[20px] pl-[15px]">{t('bp2')}</p>
                        </div>
            
                        <div className="flex items-center pb-[25px]">
                            <div className="min-w-[78px] flex">
                                <Image
                                    className="check-icon"
                                    src={require("../../images/check.png")}
                                    alt="check icon"
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-[20px] pl-[15px]">{t('bp3')}</p>
                        </div>
            
                        <div className="flex items-center pb-[25px]">
                            <div className="min-w-[78px] flex">
                                <Image
                                    className="check-icon"
                                    src={require("../../images/check.png")}
                                    alt="check icon"
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-[20px] pl-[15px]">{t('bp4')}</p>
                        </div>

                        <div className="flex items-center pb-[25px]">
                            <div className="min-w-[78px] flex">
                                <Image
                                    className="check-icon"
                                    src={require("../../images/check.png")}
                                    alt="check icon"
                                    layout="responsive"
                                />
                            </div>
                            <p className="text-[20px] pl-[15px]">{t('bp5')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}