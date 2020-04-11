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
    hasDepartment: false,
    departmentOptions: []
  }

  componentDidMount = () =>{
    this.getDeparmentInfo();
  }


  getDeparmentInfo = async() => {

    await fetch('http://localhost:5000/api/departments')
      .then(res => res.json())
      .then(data => {

        let departments = [];

        for( let i = 0; i < data.length; i++ ){
      
          departments.push(data[i].department_name);
        }

        if( departments.length > 0 ){

          this.setState({
            hasDepartment: true,
            departmentOptions: departments
          });
        }
        
      })
      .catch(err => console.log("API ERROR: ", err));
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
    this.setState({ department: e.value });
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
        { 
          emp_id: this.state.emp_id, 
          last_name: this.state.last, 
          first_name: this.state.first, 
          dob: this.state.dob, 
          rest_day: this.state.rest,
          department: this.state.department
           })
    }).then(function(res){
      return res.json(); //error here
    }).then(function(data){
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });

/*
    await fetch('http://localhost:5000/api/employeeprofile', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { 
          emp_id: this.state.emp_id, 
          last_name: this.state.last, 
          first_name: this.state.first, 
          dob: this.state.dob, 
          rest_day: this.state.rest,
           })
          });*/
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
              <label htmlFor='empid'>Emp ID</label>
              <input 
                placeholder="Emp ID..." id='empid' 
                value={this.state.emp_id}
                onChange={this.idInputHandler} 
                required
              />
              <br/>
            
              <label htmlFor='fn'>Last Name</label>
              <input 
                placeholder="last name..." id='fn' 
                value={this.state.last}
                onChange={this.lastInputHandler} 
                required
              />
              <br/>

              <label htmlFor='ln'>First Name</label>
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
                value={this.state.rest} placeholder="Select a Day" />
              <br/>

              <label>Department</label>
              
              {this.state.hasDepartment &&
                (<Dropdown options={this.state.departmentOptions} onChange={this.dpInputHandler} 
                value={this.state.department} placeholder="Select a Department" />)}
              
              {!this.state.hasDepartment &&
                (<div>
                  <p>No Department found, Add New Department?</p><br/>
                  <button className='btn btn-link' onClick={this.redirect}>New</button>
                </div>)}
              <br/>

              <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddEmployeePage;