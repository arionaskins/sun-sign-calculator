import React from 'react'
  
  export default class UserBirthdayForm extends React.Component {

      render() {
        return (
          <form className='myForm' onSubmit={event => this.props.handleSubmit(event)} >
              <h4 id='dob-inputs-label'> Enter your birthday below </h4>

              <div className='dob-input-container' style={{border: "5px"}}>

                <input type='text' 
                placeholder='XX'
                maxLength={2}
                onChange={event => this.props.handleDayChange(event)}
                value={this.props.formData.day}
                className='dob-opt'
                id='day'
                required />  


                <select name={this.props.name} 
                        value={this.props.formData.month}
                        onChange={event => this.props.handleMonthChange(event)}
                        className='dob-opt'
                        id='month-selector' required>
                  <option name='January' value="0">January</option>
                  <option name='February' value="1">February</option>
                  <option name='March' value="2">March</option>
                  <option name='April' value="3">April</option>
                  <option name='May' value="4">May</option>
                  <option name='June' value="5">June</option>
                  <option name='July' value="6">July</option>
                  <option name='August' value="7">August</option>
                  <option name='September' value="8">September</option>
                  <option name='October' value="9">October</option>
                  <option name='November' value="10">November</option>
                  <option name='December' value="11">December</option>
                </select>

                <input type='text' 
                placeholder='XXXX'
                maxLength={4}
                minLength={4}
                onChange={event => this.props.handleYearChange(event)}
                value={this.props.formData.year} 
                className='dob-opt'
                id='year' 
                required/>
              
              </div>
              <div>
               <button id='btn' type="submit">GET MY SUN SIGN</button> 
              </div>      
          </form>
      )   };
  } 

