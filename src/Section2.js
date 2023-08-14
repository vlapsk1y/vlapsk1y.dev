import "./Section2.css";
import React from 'react';

export default function Section2() {
    const rows = [];
    for (let i = 0; i < 4; i++) {
        rows.push(<a style={{opacity:( (i * 3) / 10)}} className="a-section2">About me&nbsp; </a>);
    }

    return (
        <>
        <section className="section-2">
            <div className="abt">
            {rows}
            </div>
            <div className="desc-2">
                <a className="a-desc2">
                I am 17 y.o. I self-taught software dev and work with various technologies. <br/>
                Also at the moment don't have work which could be associated with my hobby. <br/>
                So if you need dev for low pay you could contact to me :)
                </a>
            </div>
        </section>
        </>
    )
}