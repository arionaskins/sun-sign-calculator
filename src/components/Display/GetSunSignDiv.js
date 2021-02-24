import React from 'react'
// new box with sign in it AFTER CLICK
const GetSunSignDiv = (props) => {

    //initialize userSign var to contain sign name
    var userSign = props.sign;

// create sign array containing supplemental sign info
    // [[ keywords ,], element ]
const signs = {
    "Aries": [['Ambitious', 'Assertive'], 'Fire'],
     "Taurus": [['Practical', 'Reliable'], 'Earth'],
     "Gemini": [['Dynamic', 'Adaptable'], 'Air'],
     "Cancer": [['Intuitive', 'Protective'], 'Water'],
     "Leo": [['Courageous', 'Passionate'], 'Fire'],
     "Virgo": [['Pragmatic', 'Focused'], 'Earth'],
    "Libra": [['Idealist', 'Sociable'], 'Air'],
    "Scorpio": [['Determined', 'Loyal'], 'Water'],
    "Sagittarius": [['Carefree', 'Optimistic'], 'Fire'],
    "Capricorn": [['Disciplined', 'Hardworking'], 'Earth'],
    "Aquarius": [['Eccentric', 'Futuristic'], 'Air'],
    "Pisces": [['Empathetic', 'Imaginative'], 'Water'],
};

// map sign attribute to sign object index
var signKeywords = signs[userSign][0]; // [0] & [1]
var signElement = signs[userSign][1]; 
var signLink = 'http://astrologyk.com/zodiac/planets/sun/' + userSign.toLowerCase();

    return (
        <div>
            <img className='sign-png' src={`../../img/zodiac/${userSign.toLowerCase()}.png`} alt="Logo" />
            <h1 id='sun-sign-name'>{userSign.toUpperCase()} </h1>
            <div>
                <span>
                    <p>
                        <b>Element: </b>{signElement}  |
                        <b> Keywords: </b> {signKeywords[0]} & {signKeywords[1]}  | 
                        <a href={signLink}> Click here for more info on {userSign} </a>
                    </p>
                </span>
            </div> 
        </div>
    )
}
export default GetSunSignDiv;