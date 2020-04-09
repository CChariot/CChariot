import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../auth/auth';

class EmployeeLogin extends React.Component {

    loginHandler = () => {

        auth.emplogin( () => {
            this.props.history.push('/employees')
        })
    }

    returnToHome = () => {

        this.props.history.push('/')
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    
                    <div className='form-group'>
                        <label>empid</label>
                        <input type="text" className="form-control" name="empid" />
                    </div>
                    
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    
                    <div className="form-group">
                        <button className ='btn btn-link' onClick={this.loginHandler}>Login</button>
                        <button className ='btn btn-link' onClick={this.returnToHome}>Back</button>
                        {/*<Link to="/register" className="btn btn-link">Register</Link>*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default EmployeeLogin;
