import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function DoctorShokrollahiPage() {
    const t = useTranslations('Shokrollahi');
    return (
        <div className="flex justify-center flex-wrap">
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-center">
                <div className="w-full md:w-[600px] px-4 md:px-16 bg-[#8794BF] text-white py-8 md:py-16 text-[19px]">
                    <p className="doctor-title-text">{t('title')}</p>
                    <p className="text-[28px]">{t('name')}</p>
                    <div className="separator">____</div>
                    <div className="space-y-5">
                        <p>{t('bio1')}</p>
                        <p>{t('bio2')}</p>
                        <p>{t('bio3')}</p>
                        <p>
                        {t('bio4')}
                        <Link href="https://scholar.google.com/citations?user=jS6iirgAAAAJ&hl=en" className="underline hover:no-underline">
                            {t('publicationLink')}
                        </Link>
                    </p>
                    </div>
                     <div className="mt-10">
                        <h3 className="text-[22px] font-semibold mb-4">
                        {t("activitiesTitle")}
                        </h3>

                        <ol className="list-decimal pl-5 space-y-3 text-[17px]">
                        {t.raw("activities").map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ol>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-[22px] font-semibold mb-2">
                        {t("publicationsTitle")}
                        </h3>
                        <p>{t('googleScholar')}</p>

                        <ol className="list-decimal pl-5 space-y-3 text-[17px]">
                        {t.raw("publications").map((pub: string, index: number) => (
                            <li key={index}>{pub}</li>
                        ))}
                        </ol>
                    </div>
                   
                </div>
  
                <div className="w-full md:w-[600px] px-4 md:pl-[15px] flex flex-col items-center order-2 md:order-none">
                    <div className="w-[300px]">
                        <Image
                            className="w-[50px] md:w-[100px] h-auto mt-[20px] mb-[20px]"
                            src={require("../../images/doctor.png")}
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
                    </div>

                </div>
            </div>
        </div>
    )
}