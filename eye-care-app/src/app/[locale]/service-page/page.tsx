import Image from 'next/image';
export default function ServicePage() {
    return (
        <div>
            <div className='div-with-bg mb-24'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fffcfcef] pt-4">Service Name</h1>
                    <h2 className="text-center text-[#fffcfcef] pt-2">Ipsum dolor sit amet</h2>
                </div>
            </div>

            <div className="flex flex-col items-center ">

                <div className="flex max-w-[1200px] items-stretch justify-center">
                    <div className="bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h2>SIT DOLOR</h2>
                        <h1 className="pb-5 text-xl">Mauris consequat semper</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">LOREM IPSUM</button>
                    </div>
                    <div className="max-w-[600px] block max-[1260px]:hidden"></div>
                </div>

                <div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
            
                    <Image className="max-w-[600px] block max-[1260px]:hidden"
                    src={require("../images/activity_1.png")}
                    alt="logo"
                    layout="responsive"
                    />
            
                    <div className="bg-[#8695C0] flex flex-col justify-center text-white w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h2>SIT DOLOR</h2>
                        <h1 className="pb-5 text-xl">Mauris consequat semper</h1>
                        <section className="separator" >______</section>
                        <p>Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px]">LOREM IPSUM</button>
                    </div>
                </div>
                </div>
                <div className = "flex max-w-[1200px] items-stretch justify-center">
                    <div className = "bg-white flex flex-col justify-center w-1/2 px-[60px] box-border p-[70px] max-[1260px]:p-[70px] w-full">
                        <h2>SIT DOLOR</h2>
                        <h1 className="pb-5 text-xl">Mauris consequat semper</h1>
                        <section className="select-none my-[30px]" id="separator-style-2" >______</section>
                        <p>Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.</p>
                        <button className="mt-10 border-3 border-white w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">LOREM IPSUM</button>
                    </div>
                    <Image className="max-w-[600px] block max-[1260px]:hidden" 
                            src={require("../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                    />
                </div>
            </div>
        </div>

    )
}