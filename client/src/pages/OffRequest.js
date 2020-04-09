import React, { Component } from 'react'

export default class OffRequest extends Component {

    state = {
        message: '',
        senderId: '',
        senderFirstName: ''
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


    NameChangeHandler = (e) => {
        this.setState({
            senderFirstName: e.target.value
        })
    }


    submitHandler = () => {

        console.log(this.state)

        let confirm = window.confirm('Are you sure to submit this request?');

        if( confirm ){
            
            alert('Send!')

            //do something in the api here

        }  
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
                    
                    <label>First Name:</label>
                    <input
                        type='text' value={this.state.senderFirstName} 
                        onChange={this.NameChangeHandler}
                    />

                    <br/>
                    <button onClick={this.submitHandler}>Send</button>
                    </div>
            </div>
        )
    }
}
