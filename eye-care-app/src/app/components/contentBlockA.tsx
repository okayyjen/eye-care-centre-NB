import React from 'react';
import Image from 'next/image'

const ContentBlockA = () => {
    return (
        <div className = "content-block-a">
            <div className="card">
                <Image className="eye-icon"
                    src={require("../images/visible.png")}
                    alt="logo"
                    layout="responsive"
                />
                <h1 className="block-title">SIT DOLOR</h1>
                <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                <button className="button-style-1">LOREM IPSUM</button>

            </div>
            <div className="card">
                <Image className="eye-icon"
                    src={require("../images/visible.png")}
                    alt="logo"
                    layout="responsive"
                />
                <h1 className="block-title">SIT DOLOR</h1>
                <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                <button className="button-style-1">LOREM IPSUM</button>

            </div>
            <div className="card">
                <Image className="eye-icon"
                    src={require("../images/visible.png")}
                    alt="logo"
                    layout="responsive"
                />
                <h1 className="block-title">SIT DOLOR</h1>
                <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                <button className="button-style-1">LOREM IPSUM</button>

            </div>
            <div className="card">
                <Image className="eye-icon"
                    src={require("../images/visible.png")}
                    alt="logo"
                    layout="responsive"
                />
                <h1 className="block-title">SIT DOLOR</h1>
                <p>Nunc tempus fringilla turpis porttitor scelerisque. Vestibulum feugiat vulputate orci, in imperdiet turpis. Pellentesque consectetur nibh vitae eros efficitur eleifend.</p>
                <button className="button-style-1">LOREM IPSUM</button>

            </div>
        </div>
    );
};

export default ContentBlockA