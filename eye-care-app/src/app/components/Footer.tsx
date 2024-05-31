import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="wrapper">
          <div className="contact-location">
            <h2 id="contact-title">Contact Us</h2>
            <div className="contact-info">
              <div className='footer-info-wrapper'>
                <div className="image-container">
                  <Image id="phone-image"
                    src={require("../images/phone.png")}
                    alt="logo"
                    layout="responsive"
                  />
                </div>
                <div>
                  <div id="phone-number">(506) 830-1773</div> 
                  <div id = "email"><a href="mailto:example@example.com">example@example.com</a></div>
                </div>

              </div>
              <div className='footer-info-wrapper'>
                <div className="image-container" style={{width: '10%', height: '10%', position: 'relative'}}>
                  <Image id="location-image"
                    src={require("../images/location.png")}
                    alt="logo"
                    layout="responsive"
                  />
                </div>
                <div id="address">5085 Principale-Est Ave, Dieppe, NB E1A 9T8</div>
              </div>

            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="appbar-content">
            <h2 id="title">Quick Links</h2>
            <a href="#">SERVICES</a>
            <a href="#">OUR TEAM</a>
            <a href="#">RESOURCES</a>
            <a href="#">FEEDBACK</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
