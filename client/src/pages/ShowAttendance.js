import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import {Link} from 'react-router-dom';
import auth from '../auth/auth';
import Attendance from '../components/Attendance';

class ShowAttendance extends React.Component {
    
    state = {
      loading: true,
      data: null
    }
  
    componentDidMount() {
      this.getAllAttendance();
    }

    getAllAttendance = async() => {
      
      await fetch("http://localhost:5000/api/attendance")
        .then(res => res.json())
        .then(data => {

          for( let i = 0; i < data.length; i++ ){
            
            data[i].att_date = data[i].att_date.split("T")[0];
          
          }

          this.setState({
            loading: false,
            data: data
          });
          
        })
        .catch(err => console.log("API ERROR: ", err));
      console.log(this.state.data);
    }
  
    adminCheck = () =>
    {
      if(auth.usertype=="admin")return true;
      return false;
    }


    render() {

      if(this.state.loading) {
        return <Loading />;
      }

      return (
        <div>
          <div className="text-center">
            <h1>Attendance</h1>
          </div>
          <Attendance data={this.state.data}/>
          
        </div>
      );
    }
  }

export default ShowAttendance;