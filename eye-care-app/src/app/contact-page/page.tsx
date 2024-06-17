import "../contactpage.css"


export default function ContactPage(){
    return(
        <div>
            <div>
                <div id="contact-page-card">
                    <div id="contact-info">
                        <h2 className="contact-page-title">Contact Us</h2>
                        <section className="separator" >______</section>
                        
                            <div className="container">
                                <h1><strong>NB Eye Care Centre</strong></h1>

                                <div className="contact-info">
                                    <p>5085 Principale-Est Ave</p>
                                    <p>Dieppe, NB</p>
                                    <p>Tel: (506) 830-1773</p>
                                </div>

                                <div className="hours">
                                    <div className="hours-row">
                                        <span className="day"><strong>Monday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Tuesday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Wednesday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Thursday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Friday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Saturday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                    <div className="hours-row">
                                        <span className="day"><strong>Sunday:</strong></span>
                                        <span className="time">8 am – 5 pm</span>
                                    </div>
                                </div>

                                <div className="email">
                                    <div><a href="mailto:example@example.com">example@example.com</a></div>
                                </div>
                            </div>

                    </div>
                    <div id = "map">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5533.1938555553215!2d-64.70164862244005!3d46.09901127109149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0bc71b73b6ff5%3A0xa1ec43d3eb6741d2!2sEye%20Care%20Centre%20NB%20-%20Dr.%20Houfar%20Sekhavat%20Dr.%20Isabelle%20Savoie%20Dr.%20Julien%20Saad%20Dr.%20Jose%20Ponce%20Dr.%20Hila%20Zommer!5e0!3m2!1sen!2sca!4v1718230408817!5m2!1sen!2sca" 
                        width="600" 
                        height="100%" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe> 
                    </div>
                </div> 
            </div>
        </div>
    )
}