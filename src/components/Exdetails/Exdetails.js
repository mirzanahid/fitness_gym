import React, { useState } from 'react';
import {addToLocal, getFromLocal} from '../utilities/localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import './Exdetails.css'

const Exdetails = ({durations}) => {
      const [breaks, setBreaks] = useState(getFromLocal())
      
    let totalDuration= 0;
      for (const duration of durations){
        totalDuration+= duration.duration;
      }
      const breakTime= (event) =>{
        const value = event.target.value;
        addToLocal(value)
        setBreaks(getFromLocal())
    }
const activityComplete =()=> {
   
    toast.success('🦄Congrats!! For complete activity', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}
    return (
        <div className='exercise-details'>
            <div className='profile'>
                <div className="profile-image">
                    <img src="profile-img.jpg" alt="" />
                </div>
                <div className="profile-info">
                    <h3 className='name'>Mirza Nahid</h3>
                    <p className='address'>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="personal-info">
                <div className='personal-info-single'>
                    <h4 className='info-value'>90<span className='units'>kg</span></h4>
                    <span className='info-property'>Weight</span>
                </div>
                <div className='personal-info-single'>
                    <h4 className='info-value'>6.5<span className='units'>inch</span> </h4>
                    <span className='info-property'>Height</span>
                </div>
                <div className='personal-info-single'>
                    <h4 className='info-value'>22<span className='units'>yrs</span></h4>
                    <span className='info-property'>Age</span>
                </div>
            </div>
            <div className="break">
                <h3 className='break-heading'>Add A Break</h3>
                <div className='break-btn-container'>
                    <button value={10} className='break-btn' onClick={breakTime}>10s</button>
                    <button value={20} className='break-btn' onClick={breakTime}>20s</button>
                    <button value={30} className='break-btn' onClick={breakTime}>30s</button>
                    <button value={40} className='break-btn' onClick={breakTime}>40s</button>
                </div>
            </div>
            <div className="details">
                <h3 className='detail-heading'>Exercise Details</h3>

                <div className='detail-container'>
                    <p className='detail-property'>Exercise time:</p>
                    <span className='detial-value'> <span>{totalDuration}</span> sec</span>
                </div>
                <div className='detail-container'>
                    <p className='detail-property'>Break time:</p>
                    <span className='detial-value'>{breaks} sec</span>
                </div>
            </div>

            <button className='detail-complete-btn' onClick={activityComplete}>Activity Complete</button>
        </div>
    );
};

export default Exdetails;