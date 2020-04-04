import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

class ShowEmployeePage extends React.Component {
    state = {
      loading: true,
      data: null
    }
  
    componentDidMount() {
      this.getEmpHandler();
    }
    
    getEmpHandler = async() => {
      
      await fetch("http://localhost:5000/api/employees")
        .then(res => res.json())
        .then(data => {
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
  
      return (
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            {/* this.state.data */}
          </div>
        </div>
      );
    }
  }

export default ShowEmployeePage;