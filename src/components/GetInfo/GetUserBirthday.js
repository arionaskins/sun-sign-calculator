import React from 'react';
import UserBirthdayForm from './UserBirthdayForm.js';
import DisplayUserSunSign from '../Display/DisplayUserSunSign.js';

export default class GetUserBirthday extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            month: "",
            day: "",
            year: '',
            visibility: false
             // default hidden without DOB
          }
          this.handleMonthChange = this.handleMonthChange.bind(this);
          this.handleDayChange = this.handleDayChange.bind(this);
          this.handleYearChange = this.handleYearChange.bind(this);
          this.handleReset = this.handleReset.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
          
    }

        handleSubmit = event => {
          event.preventDefault();
            this.setState({ visibility: true })
        }

          handleMonthChange = event => {
            this.setState({
              month: event.target.value
            })
          }
        
          handleDayChange = event => {
            this.setState({
              day: event.target.value
            })
          }

          handleYearChange = event => {
            this.setState({
              year: event.target.value
            })
          }
          
          handleReset = event => {
            this.setState({
                            month: "",
                            day: "",
                            year: '',
                            visibility: false
                            })
          }
        // button onClick to run handleReset() and re-render form submit 
          

          render() {
            if (!this.state.visibility) {
            return (
              <div>
                <UserBirthdayForm
                    formData={this.state}
                    handleSubmit={this.handleSubmit}
                    handleMonthChange={this.handleMonthChange}
                    handleDayChange={this.handleDayChange}
                    handleYearChange={this.handleYearChange}
                />
                </div> )
        } else {
            return ( <div className='birthday-info-wrapper'>
                      <DisplayUserSunSign month={this.state.month} day={this.state.day} year={this.state.year} />
                      <div className='reset-button-container'>
                        <button type='button'  id='start-over-btn' onClick={this.handleReset}>start over :)</button>
                      </div>
                    
                    </div> )
        }
         
          }

}



  
  