import React from 'react';


class HomePage extends React.Component {

  testApi = () =>{
    
    //after adding api, test here
    window.alert('this is a test')
  }

  render() {

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <h1>Home Home</h1>
          <button onClick={this.testApi}>Test Api</button>
        </div>
      </div>
    );
  }
}

export default HomePage;