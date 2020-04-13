import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import DepartmentData from '../components/Departments';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import TimePicker from 'react-time-picker';

class ShowDepartmentPage extends React.Component {
    
    state = {
      loading: true,
      data: null,
      modalStatAdd:false,
      modalStatDelete:false,
      department_name:'',
      sup_id: '123',
      starthour: '',
      endhour: ''
    }
  
    componentDidMount() {
      this.getAllDepHandler();
    }
  
    idInputHandler = (e) => {
      this.setState({ sup_id: e.target.value });
    };
  
    dnInputHandler = (e) => {
      this.setState({ department_name: e.target.value });
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
    changeModalStatAdd = () =>
    {
      this.setState({modalStatAdd:!this.state.modalStatAdd});
    }
    changeModalStatDelete = () =>
    {
      this.setState({modalStatDelete:!this.state.modalStatDelete});
    }
    addDepHandler = async(event) => {

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
                      department_name: this.state.department_name, 
                      operating_hour: opthours
                  })
              }).then(function(res){
              return res.json(); //error here
              }).then(function(data){
              console.log(data);
              }).catch((error) => {
              console.log(error);
              });
              this.changeModalStatAdd();
      }
  
      else{
          alert('Please provide with valid operating hours!')
      }
  
    };
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
      this.changeModalStatDelete();
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

          <Button variant ='primary' onClick = {this.changeModalStatAdd}>Add Department</Button>{' '}
          <Modal show = {this.state.modalStatAdd}
          centered>
            <Modal.Header closeButton onClick={this.changeModalStatAdd}>Add Department</Modal.Header>
              <Modal.Body>
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
                value={this.state.department_Name}
                onChange={this.dnInputHandler} 
                required
              />
                  <br/><p onClick={this.redirect}>Add New Employee to the department?</p>
              <br/>

              <label>Operating Hours</label>
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
              </Modal.Body>
              <Modal.Footer>
                <Button variant='primary' onClick ={this.addDepHandler}>Confirm</Button>
                <Button variant='secondary' onClick ={this.changeModalStatAdd}>Cancel</Button>
              </Modal.Footer>
          </Modal>
          
          <Button variant ='danger' onClick = {this.changeModalStatDelete}>Delete</Button>{' '}
          <Modal show = {this.state.modalStatDelete}
          centered>
            <Modal.Header closeButton onClick={this.changeModalStatDelete}>Delete Department</Modal.Header>
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
                <Button variant='secondary' onClick ={this.changeModalStatDelete}>Cancel</Button>
              </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }

export default ShowDepartmentPage;