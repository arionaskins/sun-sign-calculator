import React from 'react'
import GetSunSignDiv from './GetSunSignDiv';
// new box with sign in it AFTER CLICK
const DisplayUserSunSign = (props) => { 
    
    //make date object to store users birthday 
    var dob = new Date(props.year, props.month, props.day);
    var getDay = props.day; 
    var getMonth = dob.getMonth();
    //initialize userSign var to contain sign name
    var userSign = '';
    

    // Handle sign coordination using getDay/Month
        //if month jan
        if (getMonth === 0) { 
            if (getDay <= 19) {
                userSign = 'Capricorn';
            } else { userSign = 'Aquarius' } 
            /// feb
        } else if (getMonth === 1) {
            if (getDay <= 19) {
                userSign = 'Aquarius';
            } else { userSign = 'Pisces'} 
            /////// march  
        } else if (getMonth === 2) {
            if (getDay <= 21) {
                userSign = 'Pisces';
            } else { userSign = 'Aries' } 
            /////// april  
        } else if (getMonth === 3) {
            if (getDay <= 20) {
                userSign = 'Aries';
            } else { userSign = 'Taurus'}  
            /////// may 
        } else if (getMonth === 4) {
            if (getDay <= 22) {
                userSign = 'Taurus';
            } else { userSign = 'Gemini' }  
            /////// june 
        } else if (getMonth === 5) {
            if (getDay <= 22) {
                userSign = 'Gemini';
            } else { userSign = 'Cancer' }  
            /////// july 
        } else if (getMonth === 6) {
            if (getDay <= 22) {
                userSign = 'Cancer';
            } else { userSign = 'Leo' } 
            /////// august  
        } else if (getMonth === 7) {
            if (getDay <= 22) {
                userSign = 'Leo';
            } else { userSign = 'Virgo' }  
            /////// sept 
        } else if (getMonth === 8) {
            if (getDay <= 22) {
                userSign = 'Virgo';
            } else { userSign = 'Libra' }  
            /////// october 
        } else if (getMonth === 9) {
            if (getDay <= 22) {
                userSign = 'Libra';
            } else { userSign = 'Scorpio' }  
               /////// november  
        } else if (getMonth === 10) {
            if (getDay <= 22) {
                userSign = 'Scorpio';
            } else { userSign = 'Sagittarius' } 
            /////// sagittarius 
        } else {
            if (getDay <= 21) {
                userSign = 'Sagittarius';
            } else { userSign = 'Capricorn' } 
        }

// month name array mapped using getMonth when rendered
const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December" ];
    var monthStr = monthNames[dob.getMonth()] // map month value to it's name

    return (
        <div className='birthday-info-container'>
            <h4 id='user-dob-label'>Your Birthday:</h4>
            
            <p id='user-dob-str'>{monthStr} {props.day}, {props.year}</p>
            
            <h2>YOUR SUN SIGN:</h2>
           
            <GetSunSignDiv sign={userSign} />
        </div>
    )
}
export default DisplayUserSunSign;