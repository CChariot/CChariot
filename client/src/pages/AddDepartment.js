import React from 'react';
import TimePicker from 'react-time-picker';

class AddDepartment extends React.Component {
  state = {
    sup_id: '123',
    departmentName: '',
    starthour: '',
    endhour: ''
  }

  idInputHandler = (e) => {
    this.setState({ sup_id: e.target.value });
  };

  dnInputHandler = (e) => {
    this.setState({ departmentName: e.target.value });
  };

  shoursinputHandler = (e) => {
    
    if(typeof(e) === 'string')
    
    this.setState({ starthour: e });
  }

  ehoursinputHandler = (e) => {
    
    if(typeof(e) === 'string')
    
    this.setState({ endhour: e });
  }


  redirect = () => {

    this.props.history.push('/add-employee')
  }

  addDepartment = async(event) => {

    event.preventDefault();

    let opthours;

    if(this.state.starthour !== '' && this.state.endhour !== ''){

        opthours = this.state.starthour + ' to ' + this.state.endhour

        await fetch('http://localhost:5000/api/departments', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    Sup_id: this.state.sup_id, 
                    department_name: this.state.departmentName, 
                    operating_hour: opthours
                })
            }).then(function(res){
            return res.json(); //error here
            }).then(function(data){
            console.log(data);
            }).catch((error) => {
            console.log(error);
            });
    }

    else{
        alert('Please provide with valid operating hours!')
    }

  };

  render() {

    return (
      <div className="text-center">
        <div>
          <h1>Add a New Department</h1>
          <br/>
          <form onSubmit={this.addDepartment}>
                
                <label htmlFor='supid'>Supervisor id</label>
              
              <input 
                placeholder="supervisor id..." id='supid'
                value={this.state.sup_id}
                onChange={this.idInputHandler} 
                required
              />
              <br/>

            <label htmlFor='dp'>Department Name</label>
              <input 
                placeholder="department name..." id='dp'
                value={this.state.departmentName}
                onChange={this.dnInputHandler} 
                required
              />
                  <br/><p onClick={this.redirect}>Add New Employee to the department?</p>
              <br/>

              <label>Oprating Hours</label>
              <br/>From&nbsp;;&nbsp;
              <TimePicker
                onChange={this.shoursinputHandler}
                value={this.state.starthour}
                />&nbsp;&nbsp;
                to&nbsp;;&nbsp;
                <TimePicker
                onChange={this.ehoursinputHandler}
                value={this.state.endhour}
                />
                <br/>

              <input type="submit" value="Add" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddDepartment;