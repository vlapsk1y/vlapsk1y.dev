import "./Section3.css";
import React from 'react';

export default function Section3() {
    const rows = [];
    for (let i = 1; i < 8; i++) {
        rows.push(<a style={{opacity:( (i * 1.4) / 10)}} className="a-section3">Contact me</a>);
    }

    return (
        <>
        <section className="section-3">
            {rows}
           <div className="links">
            <a className="link" href="https://github.com/vlapsk1y">Github&nbsp;</a>
            <a className="link" href="https://t.me/vlapsk1y">Telegram&nbsp;</a>
           </div>
        </section>
        </>
    )
}