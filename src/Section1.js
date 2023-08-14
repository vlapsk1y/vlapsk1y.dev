import "./Section1.css";
import React from 'react';

export default function Section1() {
  const rows = [];
  for (var i = 1; i < 11; i++) {
    rows.push( <a style={{ opacity: i / 10 }} className="a-section1">vlapsk1y</a>);
  }

return (
        <>
        <section className="section-1">
          {rows}
        </section>
        </>
    )
}