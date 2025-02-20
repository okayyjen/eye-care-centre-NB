"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Footer = () => {
  const f = useTranslations("Footer");
  const n = useTranslations("NavBar");
  const currentLocale = useParams().locale || "en";

  return (
    <div className="bg-[#8695c0] w-full py-12 px-12 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col sm:flex-row sm:justify-between justify-center items-center text-center sm:text-left gap-12 sm:gap-6">
        <div className="text-white flex flex-col items-center sm:items-start w-full sm:w-auto">
          <h2 className="font-bold text-[22px] mb-4">{f("contactus")}</h2>
          <div className="flex sm:items-center gap-4 mb-6 flex-col sm:flex-row">
            <div className="w-10 h-10 bg-[#384C84] rounded-full p-2 hidden sm:flex justify-center items-center">
              <Image
                id="phone-image"
                src={require("../images/phone.png")}
                alt="phone"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[16px]">
              <div>Tel: (506) 830-1773</div>
              <div>Fax: (506) 388-6074</div>
              <div>
                <a href="mailto:example@example.com" className="hover:underline hover:text-gray-200">
                  example@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex sm:items-center gap-4 mb-6 flex-col sm:flex-row">
            <div className="w-10 h-10 bg-[#384C84] rounded-full p-2 hidden sm:flex justify-center items-center">
              <Image
                id="location-image"
                src={require("../images/location.png")}
                alt="location"
                width={24}
                height={24}
              />
            </div>
            <div className="text-[16px]">
              <div>5085 Principale-Est Ave, Suite 1</div>
              <div>Dieppe, NB E1A 9T8</div>
            </div>
          </div>
        </div>

        <div className="text-white flex flex-col items-center sm:items-start w-full sm:w-auto">
          <h2 className="font-bold text-[22px] mb-4">{f("quicklinks")}</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className="text-white hover:underline hover:text-gray-200">{n('services')}</a>
            <a href={`/${currentLocale}/about-us`} className="text-white hover:underline hover:text-gray-200">{n('aboutus')}</a>
            <a href={`/${currentLocale}/our-team`} className="text-white hover:underline hover:text-gray-200">{n('ourteam')}</a>
            <a href={`/${currentLocale}/resources`} className="text-white hover:underline hover:text-gray-200">{n('resources')}</a>
            <a href="https://forms.gle/YNPChVSxmcjv5GPv7" className="text-white hover:underline hover:text-gray-200">{n('feedback')}</a>
            <a href={`/${currentLocale}/contact-page`} className="text-white hover:underline hover:text-gray-200">{n('contactus')}</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
