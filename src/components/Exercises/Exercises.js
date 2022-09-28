import React from 'react';
import Exdetails from '../Exdetails/Exdetails';

import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    return (
        <div className='exercises'>
       <a className='logo' href="index.html">FITNESS-GYM</a>
           <div className='exercise-container'>
            <Exercise></Exercise>
            <Exdetails></Exdetails>

           </div>
        </div>
    );
};

export default Exercises;