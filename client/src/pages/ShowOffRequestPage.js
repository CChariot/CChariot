import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import RequestData from '../components/Offrequest';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import auth from '../auth/auth'

class ShowOffRequestPage extends React.Component {
    
    state = {
      loading: true,
      data: null,
      modalStatAdd:false,
      modalStatDelete:false,
      reason:'',
      sup_id: '123',
      starthour: '',
      endhour: ''
    }
  
    componentDidMount() {
      this.getAllReqHandler();
    }
  

    redirect = () => {
  
      this.props.history.push('/add-employee')
    }
    getAllReqHandler = async() => {
      
      await fetch("http://localhost:5000/api/offrequest")
        .then(res => res.json())
        .then(data => {

          for( let i = 0; i < data.length; i++ ){
            
            data[i].request_date = data[i].request_date.split("T")[0];
          
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

      if(!this.state.data) {
        return(
          <div>
            <h1>No Request Dayoff Now</h1>
          </div>
        )
      }

      return (
        <div>
          <div className="text-center">
            <h1>Request from employee</h1>
          </div>
          <RequestData requestdata={this.state.data}/>
          <br/>
        </div>
      );
    }
  }

export default ShowOffRequestPage;