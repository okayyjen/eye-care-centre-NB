import { useTranslations } from "next-intl";
export default function CataractPage() {
    const t = useTranslations("CataractService");
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
                        <div className="space-y-8">
                            {t.raw("typesOfCataracts").map((cataract: { title: string; text: string }, idx: number) => (
                                <div key={idx} className="mb-6">
                                    <h3 className="font-bold text-lg mb-2">{cataract.title}</h3>
                                    <p>{cataract.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>
            </div>
        </div>

    )
}