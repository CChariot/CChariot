import React from 'react';
import Background from '../assets/background.jpeg';
import Logo from '../assets/logo.png';


class HomePage extends React.Component {
  
  empRedirectHandler = () => {
      
      this.props.history.push('/emplogin')
  }

  adminRedirectHandler = () => {
      
      this.props.history.push('/adminlogin')
  }

  render() {

    let backgorundstyle = {
      width: "100%",
      height: "100%",
      backgroundImage: `url(${Background})`
    };

    let strokeme = {
      color: "white",
      textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }

    let img = {
      opacity: "0.85"
    }

    return (
      <section style={ backgorundstyle } 
        className="container-fluid text-center">

          <img style={img} src={Logo} alt='logo' />
          <h2 style={strokeme} >Welcome to Paymenism</h2>
          <br/>
          <br/>

          <button className='btn btn-info' onClick={this.empRedirectHandler}><h1>Login as Employee Now</h1></button>
          <br/>
          <br/>
          <button className='btn btn-primary' onClick={this.adminRedirectHandler}><h1>Login as Employer Now</h1></button>
          <br/><br/>
          <h5 style={strokeme}>Or, do not have an account? <a href="https://www.google.com" target='_blank'>Join us</a> now! (still in developement)</h5>
          <br/><br/>
          <footer>&copy;Team Paymenism 2020</footer>
      </section >
    );
  }
}

export default HomePage;