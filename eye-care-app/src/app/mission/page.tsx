import Image from "next/image";

export default function MissionPage() {
    return (
        <div>
            <div className="relative flex items-end h-[30rem] mb-10 bg-cover bg-[center_20%] bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/images/HP_BANNER.jpg')] before:bg-cover before:bg-[top_20%] before:bg-no-repeat before:z-1">
                <div className="relative z-2 pb-10 pl-10 flex flex-col items-start">
                    <Image
                        src="/images/ECC_LOGO.png"
                        alt="Company Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <h1 className="text-5xl text-[#fffcfcef] mb-4">Lorem Ipsum Dolor Sit Amet</h1>
                    <h2 className="text-[#fffcfcef] text-xl w-1/2 pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h2>
                </div>
            </div>
            <div id="image-block-container">
                <div className="flex items-center justify-center flex-col">

                    <div className="flex items-stretch justify-center" id="row-1">

                        <div className="flex max-w-[1200px] items-stretch justify-center">

                            <Image className="max-w-[600px] block max-[1260px]:hidden"
                                src={require("../images/activity_1.png")}
                                alt="logo"
                                layout="responsive"
                            />

                            <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl">Vision</h1>
                                <p>We are pleased to welcome you to Eye Care Centre NB, our comprehensive ophthalmology practice and surgical facility located Dieppe, co-founded in 2019 by Dr. Houfar Sekhavat and Dr. Julien Saad. As a state-of-the-art medical Centre, we stay current in diagnostic and surgical procedures and continually endeavor to provide our patients with the highest quality of care.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-[1200px] items-stretch justify-center">
                        <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl">Mission</h1>
                            <p>Our mission is to bring the highest quality of ophthalmic care to each and every patient in the Maritimes. We know this can only be done by ensuring each member of our team is committed to providing compassionate, personal care to all patients that trust us with their vision.</p>
                        </div>
                        <Image className="max-w-[600px] block max-[1260px]:hidden"
                            src={require("../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

            <div id="image-block-container">
                <div className="my-14 flex justify-center items-center text-center">
                    <h1 className="text-2xl">OUR VALUES</h1>
                </div>
                <div className="flex items-center justify-center flex-col mb-14">

                    <div className="flex items-stretch justify-center" id="row-1">

                        <div className="flex max-w-[1200px] items-stretch justify-center">

                            <div className="bg-[#384C84]  flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl text-center">QUALITY, BEST CARE AND THE BEST OUTCOMES</h1>
                                <p>We constantly work to maintain and further develop the highest standard of care available to patients in the Maritimes. Our team of staff and doctors are always looking for ways to improve the services we provide for our patients.</p>
                            </div>

                            <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                                <h1 className="pb-2 text-2xl text-center">PATIENT CENTRICITY</h1>
                                <p>We recognize that each patient's needs are unique and do our best to care for those who visit our clinic in a way that reflects that.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-[1200px] items-stretch justify-center">
                        <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl text-center">PROFESSIONALISM AND HIGH ETHICAL STANDARDS</h1>
                            <p>We adhere to a high ethical standard and aim to display professionalism in all that we do. We believe in using our actions to show patients and referring partners that they can trust us.</p>
                        </div>
                        <div className="bg-[#384C84] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                            <h1 className="pb-2 text-2xl text-center">TEAMWORK AND PRODUCTIVITY</h1>
                            <p>The level of care we provide would not be possible without every member of our team. We are constantly communicating and working with one another to make the patient’s experience as seamless as possible.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}