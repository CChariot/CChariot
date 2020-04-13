import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import EmployeeData from '../components/Employees';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
class ShowEmployeePage extends React.Component {
    
    state = {
      loading: true,
      data: null,
      modalStat:false,
      emp_id:''
    }
    componentDidMount() {
      this.getAllEmpHandler();
    }
    idInputHandler = (e) => {
      this.setState({ emp_id: e.target.value });
    };

    removeEmpHandler = async(event) => {

      event.preventDefault();
  
      await fetch('http://localhost:5000/api/employees/delete', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
          { 
            Emp_ID: this.state.emp_id, 
             })
      }).then(function(res){
        return res.json(); //error here
      }).then(function(data){
        console.log(data);
      }).catch((error) => {
        console.log(error);
      });
      this.changeModalStat();
    };
    getAllEmpHandler = async() => {
      
      await fetch("http://localhost:5000/api/employees")
        .then(res => res.json())
        .then(data => {

          for( let i = 0; i < data.length; i++ ){
            
            data[i].dob = data[i].dob.split("T")[0];
          
          }

          this.setState({
            loading: false,
            data: data
          });
          
        })
        .catch(err => console.log("API ERROR: ", err));
      console.log(this.state.data);
    }
    changeModalStat = () =>
    {
      this.setState({modalStat:!this.state.modalStat});
    }
    render() {
      if(this.state.loading) {
        return <Loading />;
      }

      if(!this.state.data) {
        return(
          <div>
            <h1>No Employee Now</h1>
          </div>
        )
      }

      return (
        <div>
          <div className="text-center">
            <h1>Employee Data</h1>
          </div>
          <br/>
          <EmployeeData empdata={this.state.data}/>
          <br/>
          <Link to="/add-employee">
          <Button variant='primary'>Add Employee</Button>{' '}
          </Link>
          <Link to="/edit-employee">
            <Button variant='primary'>Edit Employee</Button>{' '}
          </Link>
          <Button variant ='danger' onClick = {this.changeModalStat}>Delete</Button>{' '}
          <Modal show = {this.state.modalStat}
          centered>
            <Modal.Header closeButton onClick={this.changeModalStat}>Delete Employee</Modal.Header>
              <Modal.Body>
              <label htmlFor='empid'>Employee id</label>
              <input 
                placeholder="Employee id..." id='empid'
                value={this.state.emp_id}
                onChange={this.idInputHandler} 
                required
              />
              </Modal.Body>
              <Modal.Footer>
                <Button variant='primary' onClick ={this.removeEmpHandler}>Delete</Button>
                <Button variant='secondary' onClick ={this.changeModalStat}>Cancel</Button>
              </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default ShowEmployeePage;