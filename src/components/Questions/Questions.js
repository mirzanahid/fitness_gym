import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question-main'>
            <h2 className='question-title'>Questions:</h2>
            <div className="question-single">
                <div className="question">
                    <h4>01 How does React work?</h4>
                </div>
                <div className="question-ans">
                    <p>React creates two DOM similar to the DOM of a browser, which is called virtual DOM. Now these DOM looks exactly like the real DOM, but these virtual DOM is actually a JavaScript object. When the user takes an action within the React app, or what we call a change to the DOM, React stores those changes in one of two virtual DOMs, and the other contains the previous version. Then compare the old one with the new one and Specify exactly which elements have been changed. Accordingly, React changes only what has changed, rather than re-rendering or re-painting the entire DOM.</p>
                </div>
            </div>
            <div className="question-single">
                <div className="question">
                    <h4>02 Difference between Props and State. </h4>
                </div>
                <div className="question-ans">
                    <p className='pra-space'>Difference between State and Props</p>
                    <p>Props</p>
                    <ol>
                        <li>Props are read-only.</li>
                        <li>Props are immutable.</li>
                        <li>Props allow you to pass data from one component to other components as an argument.</li>
                        <li>Props can be accessed by the child component.</li>
                        <li>Props are used to communicate between components.</li>
                    </ol>
                    <p>State</p>
                    <ol>
                        <li>State changes can be asynchronous.</li>
                        <li>State is mutable.</li>
                        <li>State holds information about the components.</li>
                        <li>State cannot be accessed by child components.</li>
                        <li>States can be used for rendering dynamic changes with the component.</li>
                    </ol>

                </div>
            </div>
            <div className="question-single">
                
                <div className="question">
                    <h4>03 Apart getting data from API, What else we can do using useEffect?</h4>
                </div>
                <div className="question-ans">
                    <p>Here are some Use Case of useEffect hook:</p>
                    <ol>
                        <li>Validating input field</li>
                        <li>Live filtering</li>
                        <li>Trigger animation on new array value</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Questions;