import React from 'react';
import Image from 'next/image'

const ContentBlockC = () => {
    return (
        <div className = "content-block-c">

            <div id="c-row-1">

                <div className="card-c">
                    <Image className="block-c-image"
                        src={require("../images/visible_blue.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <div className="block-c-text">
                        <h1 className="block-c-title">SIT DOLOR</h1>
                        <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                    </div>
                    
                </div>

                <div className="card-c">
                    <Image className="block-c-image"
                        src={require("../images/visible_blue.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <div className="block-c-text">
                        <h1 className="block-c-title">SIT DOLOR</h1>
                        <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                    </div>
                    
                </div>


            </div>
            
            <div id="c-row-2">

                <div className="card-c">
                    <Image className="block-c-image"
                        src={require("../images/visible_blue.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <div className="block-c-text">
                        <h1 className="block-c-title">SIT DOLOR</h1>
                        <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                    </div>
                    
                </div>

                <div className="card-c">
                    <Image className="block-c-image"
                        src={require("../images/visible_blue.png")}
                        alt="logo"
                        layout="responsive"
                    />
                    <div className="block-c-text">
                        <h1 className="block-c-title">SIT DOLOR</h1>
                        <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                    </div>
                    
                </div>

            </div>

        </div>
    );
};

export default ContentBlockC;