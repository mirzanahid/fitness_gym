import React, { useEffect, useState } from 'react';
import Exdetails from '../Exdetails/Exdetails';

import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[])
    return (
        <div className='exercises'>
           <div className='exercise-main'>
           <div className="exercise-container">
           <a className='logo' href="index.html">FITNESS-GYM</a>
          <div className='all-exercises'>
          {
            exercises.map(exercise =><Exercise key={exercise.id} exercise={exercise}></Exercise> )
           }
        
          </div>
            
           </div>
           <div className="exdetalis-container">
           <Exdetails></Exdetails>
           </div>

           </div>
        </div>
    );
};

export default Exercises;