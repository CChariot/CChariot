import React, { Component } from 'react'
import TimePicker from 'react-time-picker';
import Dropdown from 'react-dropdown';

export default class CheckinPage extends Component {

    state = {
        AllAttendance: null,
        OneAttendance: null,
        empid: '',
        checkType: '',

    }


    componentDidMount = () => {
        this.getAllAttendanceData();
    }


    idInputHandler = (e) => {
        this.setState({
            empid: e.target.value
        })
    }


    typeInputHandler = (e) => {

        this.setState({
            checkType: e.value
        })
    }


    // get all employees' attendance data
    getAllAttendanceData = async() => {

        await fetch('http://localhost:5000/api/attendance')
            .then(res => res.json())
            .then(data => {

                console.log(data);
                this.setState({
                    AllAttendance: data
                }); 
            })
            .catch(err => console.log("API ERROR: ", err));
        
            console.log(this.state.AllAttendance);
    }


    //get one specific employee's attendance data
    getOneAttendanceDATA = async( empid ) => {

        await fetch(`http://localhost:5000/api/attendance/${empid}`)
            .then(res => res.json())
            .then(data => {

                this.setState({
                    OneAttendance: data
                });
            })
            .catch(err => console.log("API ERROR: ", err));
        
            console.log(this.state.OneAttendance);
    }


    //check in 
    checkInHandler = async( empid, date, time ) => {

        await fetch('http://localhost:5000/api/attendance/checkin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    date: date,
                    Emp_ID: empid,
                    checkin: time
                })
            }).then(function(res){
                return res.json(); //error here
            }).then(function(data){
                console.log(data);
            }).catch((error) => {
                console.log(error);
            });
    }


    //check out
    checkOutHandler = async( empid, time ) => {

        await fetch('http://localhost:5000/api/attendance/checkout', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    Emp_ID: empid,
                    checkout: time
                })
            }).then(function(res){
                return res.json(); //error here
            }).then(function(data){
                console.log(data);
            }).catch((error) => {
            console.log(error);
            });
    }


    //lunch out
    lunchOutHandler = async( empid, time ) => {

        await fetch('http://localhost:5000/api/attendance/lunchout', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    Emp_ID: empid,
                    lunchout: time
                })
            }).then(function(res){
                return res.json(); //error here
            }).then(function(data){
                console.log(data);
            }).catch((error) => {
            console.log(error);
            });
    }


    //check in 
    lunchBackHandler = async( empid, time ) => {

        await fetch('http://localhost:5000/api/attendance/lunchback', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                { 
                    Emp_ID: empid,
                    lunchback: time
                })
            }).then(function(res){
                return res.json(); //error here
            }).then(function(data){
                console.log(data);
            }).catch((error) => {
            console.log(error);
            });
    }


    submitHandler = (event) => {

        event.preventDefault();
        
        let date = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');

        let time = new Date()
        let currenttime = time.getHours() + ":" + time.getMinutes()


        switch( this.state.checkType ){
            
            case 'checkin' :
                this.checkInHandler(this.state.empid, date, currenttime);
                break;
            
            case 'checkout' :
                this.checkOutHandler(this.state.empid, currenttime);
                break;
            
            case 'lunchout' :
                this.lunchOutHandler(this.state.empid, currenttime);
                break;

            case 'lunchback' :
                this.lunchBackHandler(this.state.empid, currenttime);
                break;
            
            default:
                alert('Error when submitting!');
        }

        alert('Checked!');
    }
    

    render() {

        const options = [
            'checkin', 'checkout', 'lunchout', 'lunchback'
        ];
        
        return (
            <div className="text-center">
                <form onSubmit={this.submitHandler}>
                    
                    <label htmlFor='empid'>Emp ID</label>
                    <input 
                        placeholder="Emp ID..." id='empid' 
                        value={this.state.empid}
                        onChange={this.idInputHandler} 
                        required
                    />
                    <br/><br/>

                    <label>Check In Type</label>
                    <Dropdown options={options} onChange={this.typeInputHandler} 
                        value={this.state.checkType} placeholder="Select" />
                    <br/><br/>
                    <br/>

                    <input type="submit" value="Check" />

                </form>
            </div>
        )
    }
}
