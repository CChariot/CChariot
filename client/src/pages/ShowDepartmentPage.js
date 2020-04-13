import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import DepartmentData from '../components/Departments';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
class ShowDepartmentPage extends React.Component {
    
    state = {
      loading: true,
      data: null,
      modalStat:false,
      department_name:''
    }
  
    componentDidMount() {
      this.getAllDepHandler();
    }
    
    getAllDepHandler = async() => {
      
      await fetch("http://localhost:5000/api/departments")
        .then(res => res.json())
        .then(data => {

          for( let i = 0; i < data.length; i++ ){
            
            data[i].department_name = data[i].department_name.split("T")[0];
          
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
    removeDepHandler = async(event) => {

      event.preventDefault();
  
      await fetch('http://localhost:5000/api/departments/delete', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
          { 
            department_name: this.state.department_name, 
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
    dnInputHandler = (e) => {
      this.setState({ department_name: e.target.value });
    };

    render() {

      if(this.state.loading) {
        return <Loading />;
      }

      if(!this.state.data) {
        return(
          <div>
            <h1>No Department Now</h1>
          </div>
        )
      }

      return (
        <div>
          <div className="text-center">
            <h1>Department</h1>
          </div>
          <DepartmentData depdata={this.state.data}/>
          <br/>
          <Link to="/add-department">
            <Button variant='primary'>Add Department</Button>{' '}
          </Link>
          <Button variant ='danger' onClick = {this.changeModalStat}>Delete</Button>{' '}
          <Modal show = {this.state.modalStat}
          centered>
            <Modal.Header closeButton onClick={this.changeModalStat}>Delete Department</Modal.Header>
              <Modal.Body>
              <label htmlFor='supid'>Department Name</label>
              <input 
                placeholder="department name..." id='dn'
                value={this.state.department_name}
                onChange={this.dnInputHandler} 
                required
              />
              </Modal.Body>
              <Modal.Footer>
                <Button variant='primary' onClick ={this.removeDepHandler}>Delete</Button>
                <Button variant='secondary' onClick ={this.changeModalStat}>Cancel</Button>
              </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default ShowDepartmentPage;