import React, { Component } from 'react'

export default class OffRequest extends Component {

    state = {
        message: '',
        senderId: ''
    }

    messageChangeHandler = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    IDChangeHandler = (e) => {
        this.setState({
            senderId: e.target.value
        })
    }


    submitHandler = async() => {

        const date = new Date(Date.now()).toISOString().replace('T',' ').replace('Z','');

        let id = Math.floor(100000000 + Math.random() * 900000000);

        let confirm = window.confirm('Are you sure to submit this request?');

        if( confirm ){
            
            await fetch("http://localhost:5000/api/offrequest", 
                {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(
                        { 
                            Request_ID: id, 
                            Request_DATE: date, 
                            Emp_ID: this.state.senderId, 
                            Reason: this.state.message
                        })
                });

            alert('Send!');

        }  
    }

    checkout = async() => {

        await fetch("http://localhost:5000/api/offrequest")
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
            
            }).catch(err => console.log("API ERROR: ", err));
    }


    render() {
        return (
            <div>
                <div className="text-center">
                <h2>Dayoff Requst</h2>
                <p>Comment your off request below</p>
                <p>Please enter your EmpID and name before submitting:</p>
                
                <textarea rows="4" cols="50" name="request" 
                        value={this.state.message} onChange={this.messageChangeHandler}>
                    Enter your request here...</textarea>
                <br/>

                <label>EmpID:</label>
                <input
                    type='text' value={this.state.senderId} 
                    onChange={this.IDChangeHandler}
                />

                <br/>
                <button onClick={this.submitHandler}>Send</button>
                </div>
                <button onClick={this.checkout}>check</button>
            </div>
        )
    }
}
