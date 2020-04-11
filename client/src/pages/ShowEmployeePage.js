import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import EmployeeData from '../components/Employees';

class ShowEmployeePage extends React.Component {
    
    state = {
      loading: true,
      data: null
    }
  
    componentDidMount() {
      this.getAllEmpHandler();
    }
    
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
          <EmployeeData empdata={this.state.data}/>
        </div>
      );
    }
  }

export default ShowEmployeePage;