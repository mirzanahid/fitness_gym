import React from 'react';
import './Exercise.css'

const Exercise = ({exercise}) => {
    console.log(exercise)
    const {img, title, description, age, duration } = exercise;
    return (
        <div className='exercise'>
            <div className='exercise-image'>
                <img src={img} alt="exercise" />
            </div>
            <div className='exercise-info'>
                <h2 className='ex-title'>{title}</h2>
                <p className='exercise-description'>{description}</p>
                <div className="required-age">For Age: <span>{age.min}</span> - <span>{age.max}</span> </div>
                <div className="required-time">Time required : <span>{duration}</span>s</div>
                <button className='add-list-button'>Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;