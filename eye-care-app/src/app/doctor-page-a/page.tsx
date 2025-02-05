import "../doctorpage.css"
import Image from 'next/image'

export default function ContactPage(){
    return(
        <div className="doctor-page-wrapper">
            <div className="doctor-page-container">
                <div className="doctor-description-box">
                    <p className="doctor-title-text">Lorem Ipsum Dolor Site Amet, Consecetur Adipiscing Elit.</p>
                    <p className="doctor-name">Dr. Smith</p>
                    <div className="separator">____</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum convallis dui vel hendrerit. Ut quis ullamcorper nunc. Curabitur eget lectus vel nunc imperdiet sodales. Suspendisse ullamcorper tincidunt scelerisque. Ut non eros aliquam, gravida magna sed, pharetra massa. Praesent nec elit sed metus faucibus egestas. Quisque ornare accumsan magna sit amet viverra. Maecenas in tincidunt justo. Nullam vehicula gravida neque, vitae ultrices nisl cursus nec. Nulla ullamcorper sapien ac justo viverra, sed luctus lectus porta. Integer sodales vel erat vel consequat. In turpis massa, rhoncus non sodales et, venenatis rhoncus ex. Curabitur consectetur, eros at pellentesque pharetra, dui quam malesuada nibh, nec interdum tellus libero imperdiet nisl. Aliquam et dignissim turpis, ut fermentum erat.</p>
                    <div className="separator">____</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum convallis dui vel hendrerit. Ut quis ullamcorper nunc. Curabitur eget lectus vel nunc imperdiet sodales. Suspendisse ullamcorper tincidunt scelerisque. Ut non eros aliquam, gravida magna sed, pharetra massa. Praesent nec elit sed metus faucibus egestas. Quisque ornare accumsan magna sit amet viverra. Maecenas in tincidunt justo. Nullam vehicula gravida neque, vitae ultrices nisl cursus nec. Nulla ullamcorper sapien ac justo viverra, sed luctus lectus porta. Integer sodales vel erat vel consequat. In turpis massa, rhoncus non sodales et, venenatis rhoncus ex. Curabitur consectetur, eros at pellentesque pharetra, dui quam malesuada nibh, nec interdum tellus libero imperdiet nisl. Aliquam et dignissim turpis, ut fermentum erat.</p>
                </div>

                <div  className="doctor-container">
                    <div className="doctor-image-container">
                        <Image className="w-[50px] h-auto"
                            src={require("../images/doctor.png")}
                            alt="logo"
                            layout="responsive"
                        />
                    </div>
                    

                    <p className="doctor-name">Dr. Smith</p>
                    <div className="separator">____</div>

                    <div className="doctor-stats">
                        <div className="check-icon-container">
                            <Image className="check-icon"
                                src={require("../images/check.png")}
                                alt="logo"
                                layout="responsive"
                            />
                        </div>
                        
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>
                    <div className="doctor-stats">
                        <div className="check-icon-container">
                            <Image className="check-icon"
                                src={require("../images/check.png")}
                                alt="logo"
                                layout="responsive"
                            />
                        </div>
                        
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>
                    <div className="doctor-stats">
                        <div className="check-icon-container">
                            <Image className="check-icon"
                                src={require("../images/check.png")}
                                alt="logo"
                                layout="responsive"
                            />
                        </div>
                        
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>
                    <div className="doctor-stats">
                        <div className="check-icon-container">
                            <Image className="check-icon"
                                src={require("../images/check.png")}
                                alt="logo"
                                layout="responsive"
                            />
                        </div>
                        
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>
                    <div className="doctor-stats">
                        <div className="check-icon-container">
                            <Image className="check-icon"
                                src={require("../images/check.png")}
                                alt="logo"
                                layout="responsive"
                            />
                        </div>
                        
                        <p>LOREM IPSUM DOLOR SIT AMET, CONSECETUR ADIPISCING ELIT.</p>
                    </div>

                    
                    
                </div>

            </div>
        </div>
        
    )
}