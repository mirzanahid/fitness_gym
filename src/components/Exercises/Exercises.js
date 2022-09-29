import React from 'react';
import Exdetails from '../Exdetails/Exdetails';

import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    return (
        <div className='exercises'>
           <div className='exercise-main'>
           <div className="exercise-container">
           <a className='logo' href="index.html">FITNESS-GYM</a>
           <Exercise></Exercise>
            
           </div>
           <div className="exdetalis-container">
           <Exdetails></Exdetails>
           </div>

           </div>
        </div>
    );
};

export default Exercises;