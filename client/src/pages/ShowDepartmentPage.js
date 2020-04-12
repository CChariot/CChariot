import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import DepartmentData from '../components/Departments';

class ShowDepartmentPage extends React.Component {
    
    state = {
      loading: true,
      data: null
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
        </div>
      );
    }
  }

export default ShowDepartmentPage;