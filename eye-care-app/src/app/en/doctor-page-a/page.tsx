import Image from 'next/image'

export default function DoctorPage() {
    return (
        <div className="flex justify-center flex-wrap">
            <div className="max-w-[1200px] w-full flex flex-col md:flex-row justify-center">
                <div className="w-full md:w-[600px] px-4 md:px-16 bg-[#8794BF] text-white py-8 md:py-16">
                    <p className="doctor-title-text">Lorem Ipsum Dolor Site Amet, Consecetur Adipiscing Elit.</p>
                    <p className="text-[28px]">Dr. Smith</p>
                    <div className="separator">____</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum convallis dui vel hendrerit. Ut quis ullamcorper nunc. Curabitur eget lectus vel nunc imperdiet sodales. Suspendisse ullamcorper tincidunt scelerisque. Ut non eros aliquam, gravida magna sed, pharetra massa. Praesent nec elit sed metus faucibus egestas. Quisque ornare accumsan magna sit amet viverra. Maecenas in tincidunt justo. Nullam vehicula gravida neque, vitae ultrices nisl cursus nec. Nulla ullamcorper sapien ac justo viverra, sed luctus lectus porta. Integer sodales vel erat vel consequat. In turpis massa, rhoncus non sodales et, venenatis rhoncus ex. Curabitur consectetur, eros at pellentesque pharetra, dui quam malesuada nibh, nec interdum tellus libero imperdiet nisl. Aliquam et dignissim turpis, ut fermentum erat.</p>
                    <div className="separator">____</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum convallis dui vel hendrerit. Ut quis ullamcorper nunc. Curabitur eget lectus vel nunc imperdiet sodales. Suspendisse ullamcorper tincidunt scelerisque. Ut non eros aliquam, gravida magna sed, pharetra massa. Praesent nec elit sed metus faucibus egestas. Quisque ornare accumsan magna sit amet viverra. Maecenas in tincidunt justo. Nullam vehicula gravida neque, vitae ultrices nisl cursus nec. Nulla ullamcorper sapien ac justo viverra, sed luctus lectus porta. Integer sodales vel erat vel consequat. In turpis massa, rhoncus non sodales et, venenatis rhoncus ex. Curabitur consectetur, eros at pellentesque pharetra, dui quam malesuada nibh, nec interdum tellus libero imperdiet nisl. Aliquam et dignissim turpis, ut fermentum erat.</p>
                </div>
  
                <div className="w-full md:w-[600px] px-4 md:pl-[15px] flex flex-col items-center order-2 md:order-none">
                    <div className="w-[300px]">
                        <Image
                            className="w-[50px] md:w-[100px] h-auto mt-[15px]"
                            src={require("../../images/doctor.png")}
                            alt="doctor"
                            layout="responsive"
                        />
                    </div>
    
                    <p className="text-[28px]">Dr. Smith</p>
                    <div className="separator">____</div>
        
                    <div className="flex items-center pb-[25px]">
                        <div className="min-w-[78px] flex">
                            <Image
                                className="check-icon"
                                src={require("../../images/check.png")}
                                alt="check icon"
                                layout="responsive"
                            />
                        </div>
                        <p className="text-[20px] pl-[15px]">LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
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
                        <p className="text-[20px] pl-[15px]">LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
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
                        <p className="text-[20px] pl-[15px]">LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
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
                        <p className="text-[20px] pl-[15px]">LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
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
                        <p className="text-[20px] pl-[15px]">LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}