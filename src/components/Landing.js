import React from 'react';
import GetUserBirthday from './GetInfo/GetUserBirthday.js';

class Landing extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            landingVisibility: false // referring to sun sign visibility
        }
      }

      handleStartBtn = event => {
        this.setState((state, props) => {
           return {  
            landingVisibility: true
           }
          })
      }
    
    

    render() {
      if (!this.state.landingVisibility) {
            return (
                    <div className='content-container' id='landing-container'> 
                        <p id='about-info'>The <b>Sun</b> (also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique.
                        It is our identity and our face to the world.</p>
                        <p id='about-info'>The sun also speaks to creative ability and the power of the individual to meet the challenges of everyday life.</p>
                        <p id='about-info'>The sign of one's natal sun represents the energies expected to be present throughout life.
                        </p>
                        <a href='https://cafeastrology.com/sun.html'>Learn more about the Sun</a>
                        <div>
                          <button id='btn' type="button" onClick={this.handleStartBtn}>GET STARTED!</button> 
                        </div>
                    </div> )
      } else {
          return ( <GetUserBirthday /> )
      }  ;          
        
  }
}


export default Landing;

