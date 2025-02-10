import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#8695c0] w-full h-auto py-[50px] px-[20px]">
      <div className="flex justify-between items-center flex-row w-full max-w-[1200px] m-0 px-[40px]">
        <div>
          <div className="text-white text-center">
            <h2 id="contact-title" className="font-bold text-white text-[20px] text-left mb-[5px]">Contact Us</h2>
            <div>
              <div className="mb-[30px] text-left flex items-center">
                <div className="w-[10%] h-[10%] relative bg-[#384C84] rounded-[50px] p-[7px]">
                  <Image
                    id="phone-image"
                    src={require("../images/phone.png")}
                    alt="logo"
                    layout="responsive"
                  />
                </div>
                <div className="ml-[25px]">
                  <div>(506) 830-1773</div> 
                  <div>
                    <a href="mailto:example@example.com">example@example.com</a>
                  </div>
                </div>
              </div>
              <div className="mb-[10px] text-left flex items-center">
                <div className="w-[10%] h-[10%] relative bg-[#384C84] rounded-[50px] p-[7px]">
                  <Image
                    id="location-image"
                    src={require("../images/location.png")}
                    alt="logo"
                    layout="responsive"
                  />
                </div>
                <div className="ml-[25px]">
                  <div>5085 Principale-Est Ave, Dieppe, NB E1A 9T8</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className="flex flex-col items-start flex-1 text-left">
            <h2 id="title" className="font-bold text-white text-[20px] mb-[5px]">Quick Links</h2>
            <a href="#" className="text-white no-underline my-[5px] mt-0">SERVICES</a>
            <a href="#" className="text-white no-underline my-[5px] mt-0">OUR TEAM</a>
            <a href="#" className="text-white no-underline my-[5px] mt-0">RESOURCES</a>
            <a href="#" className="text-white no-underline my-[5px] mt-0">FEEDBACK</a>
            <a href="#" className="text-white no-underline my-[5px] mt-0">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
