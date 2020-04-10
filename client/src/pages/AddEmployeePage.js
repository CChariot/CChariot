import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class AddEmployeePage extends React.Component {
  state = {
    emp_id: '',
    last: '',
    first: '',
    dob: new Date(new Date().setHours(0, 0, 0)),
    rest: '',
    department: '',
    sup_id: '123',
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

  restInputHandler = (day) => {
    this.setState({ rest: day.value });
  };

  dpInputHandler = (e) => {
    this.setState({ department: e.target.value });
  }

  supidInputHandler = (e) => {
    this.setState({ sup_id: e.target.value });
  }


  redirect = () => {

    this.props.history.push('/add-department')
  }

  addEmpHandler = async(event) => {

    event.preventDefault();

    await fetch('http://localhost:5000/api/employees', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { emp_id: this.state.emp_id, 
          last_name: this.state.last, 
          first_name: this.state.first, 
          dob: this.state.dob, 
          rest_day: this.state.rest,
           })
    }).then(function(res){
      return res.json(); //error here
    }).then(function(data){
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  };

  render() {

    const options = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
    ];

    return (
      <div className="text-center">
        <div>
          <h1>Add a New Employee</h1>
          <br/>
          <form onSubmit={this.addEmpHandler}>
              <label for='empid'>Emp ID</label>
              <input 
                placeholder="Emp ID..." id='empid' 
                value={this.state.emp_id}
                onChange={this.idInputHandler} 
                required
              />
              <br/>
            
              <label for='fn'>Last Name</label>
              <input 
                placeholder="last name..." id='fn' 
                value={this.state.last}
                onChange={this.lastInputHandler} 
                required
              />
              <br/>

              <label for='ln'>First Name</label>
              <input 
                placeholder="first name..." id='ln'
                value={this.state.first}
                onChange={this.firstInputHandler} 
                required
              />
              <br/>

              <label>Day of Birth</label>
              <DatePicker
                selected={this.state.dob}
                onChange={this.dobInputHandler}
              />
              <br/>

              <label>Rest Day</label>
              <Dropdown options={options} onChange={this.restInputHandler} 
                value={this.state.rest} placeholder="Select an option" />
              <br/>

              <label for='dp'>Department</label>
              <input 
                placeholder="department..." id='dp'
                value={this.state.department}
                onChange={this.dpInputHandler} 
                required
              />&nbsp;&nbsp;&nbsp;<a onClick={this.redirect}>Add New Department?</a>
              <br/>

              <label for='supid'>Supervisor id</label>
              <input 
                placeholder="supervisor id..." id='supid'
                value={this.state.sup_id}
                onChange={this.supidInputHandler} 
                required
              />
              <br/>

              <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddEmployeePage;