"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Footer = () => {
  const f = useTranslations("Footer");
  const currentLocale = useParams().locale || "en";

  return (
    <div className="bg-[#8695c0] w-full py-6 px-4 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col sm:flex-row justify-between justify-center items-center text-center sm:text-left gap-3">
        <div className="text-white flex flex-col items-center sm:items-start w-full sm:w-auto sm:ml-[100px]">
          <div className = "items-center">
            <h2 className="font-bold text-[18px] mb-2 sm:ml-11">{f("contactus")}</h2>
          </div>
          
          <div className="flex sm:items-center gap-3 mb-4 flex-col sm:flex-row">
            <div className="w-8 h-8 bg-[#384C84] rounded-full p-1.5 hidden sm:flex justify-center items-center">
              <Image
                id="phone-image"
                src={require("../images/phone.png")}
                alt="phone"
                width={20}
                height={20}
              />
            </div>
            <div className="text-[14px]">
              <div>Tel: (506) 830-1773</div>
              <div>Fax: (506) 388-6074</div>
              <div>
                <a href="mailto:example@example.com" className="hover:underline hover:text-gray-200">
                  example@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex sm:items-center gap-3 mb-4 flex-col sm:flex-row">
            <div className="w-8 h-8 bg-[#384C84] rounded-full p-1.5 hidden sm:flex justify-center items-center">
              <Image
                id="location-image"
                src={require("../images/location.png")}
                alt="location"
                width={20}
                height={20}
              />
            </div>
            <div className="text-[14px]">
              <div>5085 Principale-Est Ave, Suite 1</div>
              <div>Dieppe, NB E1A 9T8</div>
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col items-center sm:items-start w-full sm:w-auto sm:mr-[100px]">
          <h2 className="font-bold text-[18px] mb-2">{f("quicklinks")}</h2>
          <div className="flex flex-col gap-1 w-max">
            <a href="#" className="text-white text-[14px] hover:underline hover:text-gray-200">{f('services')}</a>
            <a href={`/${currentLocale}/about-us`} className="text-white text-[14px] hover:underline hover:text-gray-200">{f('aboutus')}</a>
            <a href={`/${currentLocale}/our-team`} className="text-white text-[14px] hover:underline hover:text-gray-200">{f('ourteam')}</a>
            <a href={`/${currentLocale}/#`} className="text-white text-[14px] hover:underline hover:text-gray-200">{f('mission')}</a>
            <a href="https://forms.gle/YNPChVSxmcjv5GPv7" className="text-white text-[14px] hover:underline hover:text-gray-200">{f('feedback')}</a>
            <a href={`/${currentLocale}/contact-page`} className="text-white text-[14px] hover:underline hover:text-gray-200">{f('contactus')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
