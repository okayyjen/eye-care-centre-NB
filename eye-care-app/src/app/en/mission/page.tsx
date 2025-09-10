import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MissionPage() {
    const t = useTranslations('Mission');
    return (
        <div>
            <div className="relative flex items-end h-[30rem] mb-10 bg-cover bg-[center_20%] bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/images/HP_BANNER.jpg')] before:bg-cover before:bg-[top_20%] before:bg-no-repeat before:z-1">
                <div className="relative z-2 pb-10 pl-10 flex flex-col items-start">
                    <Image
                        src="/images/ECC_LOGO.png"
                        alt="Company Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <h1 className="text-5xl text-[#fffcfcef] mb-4">Lorem Ipsum Dolor Sit Amet</h1>
                    <h2 className="text-[#fffcfcef] text-xl w-1/2 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h2>
                </div>
            </div>
            <div id="image-block-container">
                <div className="flex items-center justify-center flex-col">

                    <div className="flex items-stretch justify-center" id="row-1">

                        <div className="flex max-w-[1200px] items-stretch justify-center">

                            <Image className="max-w-[600px] block max-[1260px]:hidden"
                                src={require("../../images/activity_1.png")}
                                alt="logo"
                                layout="responsive"
                            />

                            <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl">{t('title1')}</h1>
                                <p>{t('text1')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-[1200px] items-stretch justify-center">
                        <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl">{t('title2')}</h1>
                            <p>{t('text2')}</p>
                        </div>
                        <Image className="max-w-[600px] block max-[1260px]:hidden"
                            src={require("../../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

            <div id="image-block-container">
                <div className="my-14 flex justify-center items-center text-center">
                    <h1 className="text-2xl">OUR VALUES</h1>
                </div>
                <div className="flex items-center justify-center flex-col mb-14">

                    <div className="flex items-stretch justify-center" id="row-1">

                        <div className="flex max-w-[1200px] items-stretch justify-center">

                            <div className="bg-[#384C84]  flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl text-center">{t('title3')}</h1>
                                <p>{t('text3')}</p>
                            </div>

                            <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl text-center">{t('title4')}</h1>
                                <p>{t('text4')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-[1200px] items-stretch justify-center">
                        <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl text-center">{t('title5')}</h1>
                            <p>{t('text5')}</p>
                        </div>
                        <div className="bg-[#384C84] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl text-center">{t('title6')}</h1>
                            <p>{t('text6')}</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}