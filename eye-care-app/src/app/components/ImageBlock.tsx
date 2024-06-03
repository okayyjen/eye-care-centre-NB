import Image from 'next/image'

const ImageBlock = () => {
    return (
        <div id="image-block-container">
            <div id="row-container">

                <div id = "row-1">
                    
                    <Image id="activity-image-1"
                    src={require("../images/activity_1.png")}
                    alt="logo"
                    layout="responsive"
                    />

                    <div className="image-block-textbox">
                    <h2>Mauris consequat semper</h2>
                        <h1 className="block-title">SIT DOLOR</h1>
                        <section className="separator" >______</section>
                        <p>Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.</p>
                        <button className="button-style-1">LOREM IPSUM</button>
                    </div>
                </div>

                <div id = "row-2">
                    <div className="image-block-textbox">
                        <h2>Mauris consequat semper</h2>
                        <h1 className="block-title" id="text-2">SIT DOLOR</h1>
                        <section className="separator" id="separator-style-2" >______</section>
                        <p id="text-2">Nullam aliquet placerat urna et dignissim. Sed ultrices, turpis vitae viverra mollis, mi risus tempus lorem, in dapibus justo nulla non turpis. Maecenas pulvinar rhoncus mi eu aliquam. Praesent in auctor lacus. Etiam id pellentesque lacus, sed fringilla massa. Morbi turpis dolor, luctus eu odio ut, volutpat blandit urna. Nam eleifend, ipsum non finibus semper, nunc magna pharetra mi, eu dignissim dui enim in metus. Quisque ipsum nunc, finibus at nulla a, consectetur aliquam mi.</p>
                        <button className="button-style-2">LOREM IPSUM</button>
                    </div>
                    <Image id="activity-image-2"
                            src={require("../images/activity_2.png")}
                            alt="logo"
                            layout="responsive"
                    />
                </div>



            </div>
            


        </div>
    );
};

export default ImageBlock;