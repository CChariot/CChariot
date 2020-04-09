import React from 'react';


class HomePage extends React.Component {
  
  empRedirectHandler = () => {
      
      this.props.history.push('/emplogin')
  }

  adminRedirectHandler = () => {
      
      this.props.history.push('/adminlogin')
  }

  render() {

    return (
      <div className="container-fluid text-center">
          <h1>Home Home</h1>
          <br/>
          <br/>

          <button className='btn btn-info' onClick={this.empRedirectHandler}><h1>Login as Employee Now</h1></button>
          <br/>
          <br/>
          <button className='btn btn-primary' onClick={this.adminRedirectHandler}><h1>Login as Employer Now</h1></button>
          <br/><br/>
          <h5>Or, do not have an account? <a href="https://www.google.com" target='_blank'>Join us</a> now!</h5>
      </div>
    );
  }
}

export default HomePage;