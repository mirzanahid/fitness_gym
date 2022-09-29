import React from 'react';
import './Exercise.css'

const Exercise = () => {
    return (
        <div className='exercise'>
          
         <div className='exercise-image'>
         <img src="https://media.istockphoto.com/photos/young-woman-preparing-to-lift-heavy-weights-in-a-gym-picture-id874001794?k=20&m=874001794&s=612x612&w=0&h=WFnx_UkzdnouVcIMDVlgYRh9Qw7gVFl_ZkNDa47ObxI=" alt="" />
         </div>
        <div className='exercise-info'>
        <h2 className='ex-title'>Exercise Title</h2>
         <p className='exercise-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem culpa repellat suscipit quaerat dignissimos?</p>
         <div className="required-age">For Age: 20-25</div>
         <div className="required-time">Time required : <span>30</span>s</div>
         <button className='add-list-button'>Add to list</button>
        </div>
        </div>
    );
};

export default Exercise;