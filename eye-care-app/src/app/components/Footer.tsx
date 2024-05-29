import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="wrapper">
          <div className="logo-contact-container">
            <div className="image-container">
              <Image className="logo"
                src={require("./visible.png")}
                alt="logo"
                layout="responsive"
              />
            </div>
          </div>
          <div className="contact-location">
            <h2>Contact Us</h2>
            <p>(506) 830-1773<br />
              5085 Principale-Est Ave, Dieppe, NB E1A 9T8<br />
              <a href="mailto:example@example.com">example@example.com</a>
            </p>
          </div>
        </div>
        <div className="wrapper">
          <div className="appbar-content">
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
