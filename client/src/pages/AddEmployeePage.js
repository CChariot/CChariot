import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddEmployeePage extends React.Component {
  state = {
    emp_id: '',
    last: '',
    first: '',
    dob: new Date(),
    rest: '',
  }

  idInputHandler = (e) => {
    this.setState({ emp_id: e.target.value });
  };

  lastInputHandler = (e) => {
    this.setState({ last: e.target.value });
  };

  firstInputHandler = (e) => {
    this.setState({ first: e.target.value });
  };

  dobInputHandler = (date) => {
    this.setState({ dob: date });
  };

  restInputHandler = (e) => {
    this.setState({ rest: e.target.value });
  };

  addEmpHandler = () => {

    console.log(this.state)
    /*fetch('/api/employee', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { emp_id: this.state.emp_id, 
          last: this.state.last, 
          first: this.state.first, 
          dob: this.state.dob, 
          rest_day: this.state.rest,
           })
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ 
        emp_id: '',
        last: '',
        first: '',
        dob: new Date(),
        rest: '', });
    });*/
  };

  render() {

    return (
      <div className="container-fluid text-center">
        <div>
          <h1>Add a New Employee</h1>
          <br/>
          <div>
              <label>Emp ID</label>
              <input 
                placeholder="Emp ID..."
                value={this.state.emp_id}
                onChange={this.idInputHandler}
              />
              <br/>
            
              <label>Last Name</label>
              <input 
                placeholder="last name..."
                value={this.state.last}
                onChange={this.lastInputHandler}
              />
              <br/>

              <label>First Name</label>
              <input 
                placeholder="first name..."
                value={this.state.first}
                onChange={this.firstInputHandler}
              />
              <br/>

              <label>Day of Birth</label>
              <DatePicker
                selected={this.state.dob}
                onChange={this.dobInputHandler}
              />
              <br/>

              <label>Rest Day</label>
              <input 
                placeholder="rest day..."
                value={this.state.rest}
                onChange={this.restInputHandler}
              />
              <br/>

              <button onClick={this.addEmpHandler}>Add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployeePage;