import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

import AdminRoute from './routes/AdminRoute';
import EmpRoute from './routes/EmpRoute';
import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage';
import ShowEmployeePage from './pages/ShowEmployeePage';
import ShowDepartmentPage from './pages/ShowDepartmentPage';
import AddEmployeePage from './pages/AddEmployeePage';
import AboutUsPage from './pages/AboutUsPage';
import EmployeeLogin from './pages/Employeelogin';
import AdminLogin from './pages/Adminlogin';
import OffRequest from './pages/OffRequest';
import CheckinPage from './pages/CheckinPage';
import ShowAttendance from './pages/ShowAttendance';

import ShowOffRequestPage from './pages/ShowOffRequestPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <Link className="navbar-brand" to="/">Home</Link>
      <ul className="navbar-nav mr-auto">

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/employees">
            Employees
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/departments">
            Department
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/offrequest">
            Send Off Requst
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/check">
            Check In
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/offrequest-table">
            Check Off Requst
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/attendancetable">
            Attendance
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <AdminRoute path="/add-employee" component={AddEmployeePage} />
                <AdminRoute path="/offrequest-table" component={ShowOffRequestPage} />
                <ProtectedRoute path="/employees" component={ShowEmployeePage} />
                <ProtectedRoute path="/departments" component={ShowDepartmentPage} />
                <AdminRoute path="/attendancetable" component={ShowAttendance} />
                <EmpRoute path="/offrequest" component={OffRequest} />
                <ProtectedRoute path="/check" component={CheckinPage} />
                <Route path='/emplogin' component={EmployeeLogin} />
                <Route path='/adminlogin' component={AdminLogin} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
