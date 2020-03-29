import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

class ShowEmployeePage extends React.Component {
    state = {
      loading: true,
      data: null
    }
  
    componentDidMount() {
      //this.getEmpHandler();
    }
    /*
    getEmpHandler = () => {
      fetch("/api/employee")
        .then(res => res.json())
        .then(data => {
          this.setState({
            loading: false,
            data: data
          });
        })
        .catch(err => console.log("API ERROR: ", err));
    }*/
  
    render() {
      if(this.state.loading) {
        return <Loading />;
      }
  
      return (
        <div className="container-fluid text-center">
          <div className="row justify-content-center">
            { this.state.data }
          </div>
        </div>
      );
    }
  }

export default ShowEmployeePage;