import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import './App.css';
import React from 'react';

export default function App() {
    return (
        <>
        <div className='slider'>
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
        </>
    )
}