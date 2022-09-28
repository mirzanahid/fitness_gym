import React from 'react';
import './Exdetails.css'

const Exdetails = () => {
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
                    <h4 className='info-value'>6.5</h4>
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
                    <a className='break-btn' href="#">10s</a>
                    <a className='break-btn' href="#">20s</a>
                    <a className='break-btn' href="#">30s</a>
                    <a className='break-btn' href="#">40s</a>
                </div>
            </div>
            <div className="details">
                <h3 className='detail-heading'>Exercise Details</h3>

                <div className='detail-container'>
                    <p className='detail-property'>Exercise time:</p>
                    <span className='detial-value'>200 sec</span>
                </div>
                <div className='detail-container'>
                    <p className='detail-property'>Break time:</p>
                    <span className='detial-value'>20 sec</span>
                </div>
            </div>

            <button className='detail-complete-btn'>Activity Complete</button>
        </div>
    );
};

export default Exdetails;