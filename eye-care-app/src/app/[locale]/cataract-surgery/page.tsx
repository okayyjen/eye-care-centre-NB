import Image from 'next/image';
import { useTranslations } from "next-intl";
export default function CataractSurgeryPage() {
    const t = useTranslations("CataractSurgeryService");
    const serviceName = t("serviceName").split("\n");
    return (
        
        <div>
            {/*<div className="div-with-bg mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('serviceName')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('bannerSubTitle')}</p>
                </div>
            </div>*/}
            <div
                className="relative h-[60vh] sm:h-[75vh] flex items-center text-white px-4 sm:px-10"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(31,41,55,0.8) 15%, rgba(31,41,55,0)), url('/images/team-page-banner.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                <div className="mt-10 sm:mt-28 ml-4 sm:ml-24">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                    {serviceName.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                    </h1>
                    <p className="text-base sm:text-lg mt-4 sm:mt-7 ml-1 sm:ml-2">
                    {t("bannerSubTitle")}
                    </p>
                </div>
            </div>

            
            
            {/* About Cataracts */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-600 pb-2 max-w-max">
          How Do I Know If I Have Cataracts?
        </h2>
        <p className="text-lg leading-relaxed">
          Cataracts are diagnosed after an eye exam. You may have cataracts if
          you:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
          <li>Are over the age of 60</li>
          <li>Notice your vision is progressively worsening</li>
          <li>Have cloudy or blurry vision</li>
          <li>Need frequent prescription changes in your eyeglasses or contacts</li>
          <li>See glare around headlights, lamps, or sunlight</li>
          <li>Have poor night vision</li>
          <li>Have double or multiple images</li>
          <li>Notice colors seem faded or washed out</li>
        </ul>
      </section>

      {/* How Surgery Works */}
      <section className="bg-white max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-6 shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-600 pb-2 max-w-max">
          How Cataract Surgery Works
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed">
          <li>
            If cataracts interfere with daily tasks, surgery to remove and
            replace the lens is recommended. Untreated cataracts increase risk
            of accidents.
          </li>
          <li>
            Surgery involves removing the clouded lens and replacing it with an
            intraocular lens (IOL). It’s safe and effective with rare
            complications.
          </li>
          <li>
            Various lenses suit different lifestyles—near vision, distance
            vision, astigmatism correction. Your doctor will help select the
            best lens for you.
          </li>
        </ul>
      </section>

      {/* What to Expect */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-6">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-600 pb-2 max-w-max">
          What to Expect
        </h2>
        <p className="text-lg leading-relaxed">
          Before surgery, tests determine the best IOL for your lifestyle. You’ll
          start medicated eye drops two days before surgery. Surgery takes 8–15
          minutes, is not painful, and you’ll be awake but won’t see the
          procedure. Recovery includes protective patches and follow-up care.
        </p>
      </section>

      {/* Life After Surgery */}
      <section className="bg-white max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-6 shadow-md rounded-lg mb-16">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-600 pb-2 max-w-max">
          Life After Cataract Surgery
        </h2>
        <p className="text-lg leading-relaxed">
          Surgery provides clearer, more colorful vision, making reading and
          driving easier. Dependence on glasses may decrease. Improved vision
          boosts confidence, independence, and quality of life for all ages.
        </p>
      </section>

      {/* Additional info links */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 pb-12">
        <h3 className="text-2xl font-semibold mb-4">
          Additional Resources
        </h3>
        <ul className="list-disc list-inside space-y-2 text-blue-700">
          <li>
            <a
              href="https://youtu.be/60QVVskhSpw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Cataract Surgery Video Guide
            </a>
          </li>
          <li>
            <a
              href="https://www.insighteye.com.au/cataracts"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Types of Cataracts (InsightEye)
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/YourSurgicalCenterLocation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Surgical Centre Location (Google Maps)
            </a>
          </li>
        </ul>
      </section>
                
            {/* <div className="flex flex-col items-center ">

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
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px]">{t('buttonTitle2')}</button>
                    </div>
                </div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
                    <div className = "bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h1 className="pb-5 text-xl">{t('title5')}</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>{t('text5')}</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">{t('buttonTitle3')}</button>
                    </div>
                    <Image className="max-w-[600px] block max-[1260px]:hidden" 
                            src={require("../../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                    />
                </div>
            </div>
            */}
        </div>

    )
}