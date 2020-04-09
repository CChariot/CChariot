import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../auth/auth';

class AdminLogin extends React.Component {

    loginHandler = () => {

        auth.adminlogin( () => {
            this.props.history.push('/employees')
        })
    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    <div className='form-group'>
                        <label>Business Number</label>
                        <input type="text" className="form-control" name="BN" />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <div className="form-group">
                        <button className ='btn btn-link' onClick={this.loginHandler}>Login</button>
                        {/*<Link to="/register" className="btn btn-link">Register</Link>*/}
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminLogin;
