import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    return (
        <div>
            <div className="div-with-bg-contact mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('bannerTitle')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('title')}</p>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row w-full max-w-[1200px]">
                    <div className="w-full md:w-[600px] bg-white p-5 flex-1 h-auto md:h-full">
                        <h2 className="text-[25px]">{t("title")}</h2>
                        <section className="select-none my-[-5px] mt-[-5px] mb-[10px]">______</section>

                        <div className="mb-[10px]">
                            <h1 className="mb-[10px]"><strong>Eye Care Centre NB</strong></h1>
                            <div className="mb-[10px]">
                                <p className="mb-[10px]">5085 Principale-Est Ave, Suite 1</p>
                                <p className="mb-[10px]">Dieppe, NB E1A 9T8</p>
                                <p className="mb-[10px]">Email: <a href="mailto:example@example.com">example@example.com</a> </p>
                                <p className="mb-[10px]">Tel: 506-830-1773</p>
                                <p className="mb-[10px]">Fax: 506-388-6074</p>
                            </div>
                            <div className="flex flex-col mb-[10px]">
                                {days.map(day => (
                                    <div key={day} className="flex justify-between py-[2px]">
                                        <span className="flex-1 text-left"><strong>{t(day)}:</strong></span>
                                        <span className="flex-1 text-left">8 am – 5 pm</span>
                                    </div>
                                ))}
                                <div key="saturday" className="flex justify-between py-[2px]">
                                    <span className="flex-1 text-left"><strong>{t("saturday")}:</strong></span>
                                    <span className="flex-1 text-left">8 am – 1 pm</span>
                                </div>

                                <div key="sunday" className="flex justify-between py-[2px]">
                                    <span className="flex-1 text-left"><strong>{t("sunday")}:</strong></span>
                                    <span className="flex-1 text-left">{t('closed')}</span>
                                </div>
                            </div>
                        </div>

                        <h2 className="mt-5 text-[25px]">{t("title2")}</h2>
                        <section className="select-none my-[-5px] mt-[-5px] mb-[10px]">______</section>
                        <p>{t("helpText")}</p>

                        <h2 className="mt-5 text-[25px]">{t("title3")}</h2>
                        <section className="select-none my-[-5px] mt-[-5px] mb-[10px]">______</section>
                        <p>{t("helpText2")}</p>
                    </div>
                    <div className="w-full md:w-[600px] min-h-[400px] md:h-full flex-1">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5533.1938555553215!2d-64.70164862244005!3d46.09901127109149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0bc71b73b6ff5%3A0xa1ec43d3eb6741d2!2sEye%20Care%20Centre%20NB%20-%20Dr.%20Houfar%20Sekhavat%20Dr.%20Isabelle%20Savoie%20Dr.%20Julien%20Saad%20Dr.%20Jose%20Ponce%20Dr.%20Hila%20Zommer!5e0!3m2!1sen!2sca!4v1718230408817!5m2!1sen!2sca" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe> 
                    </div>
                </div>
            </div>
        </div>
    );
}
