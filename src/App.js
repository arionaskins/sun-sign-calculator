import './App.css';
import React from 'react';
import Landing from './components/Landing.js';


class App extends React.Component {

  render() {
        return (
          <div style={{ 
            backgroundImage: `url('./img/background.jpg')` 
          }} className='wrapper'>
            <div className='container'>
              <div className='newD' id='title-div'>
            <Title />
             <Landing />
             </div>
            </div></div>
        );
    }
  
}

export default App;


const Title = () => {
  return (
    <div id='title-div'>
      <h1>SUN SIGN CALCULATOR</h1>
    </div>
  )
}



// NEXT TO DO:
// handle required inputs
// type requirements for inputs
//pic files assets and icons?
//styling ofc

