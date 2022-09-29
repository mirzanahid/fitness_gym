import React, { useEffect, useState } from 'react';
import Exdetails from '../Exdetails/Exdetails';
import {getFromLocal, addToLocal} from '../utilities/localStorage';

import Exercise from '../Exercise/Exercise';
import './Exercises.css';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [durations, setDurations] = useState([])
    useEffect(()=>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    },[]);


    useEffect(()=>{
        const storedData =  getFromLocal()

    },[])
      
    const exerciseTime= (selectedItem)=>{
        const newDuration = [...durations, selectedItem]
        setDurations(newDuration)
    }

    return (
        <div className='exercises'>
           <div className='exercise-main'>
           <div className="exercise-container">
           <a className='logo' href="index.html">FITNESS-GYM</a>
          <div className='all-exercises'>
          {
            exercises.map(exercise =><Exercise key={exercise.id} exercise={exercise} handler = {exerciseTime}></Exercise> )
           }
        
          </div>
            
           </div>
           <div className="exdetalis-container">
           <Exdetails durations={durations}></Exdetails>
           </div>

           </div>
        </div>
    );
};

export default Exercises;