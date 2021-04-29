import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import NavBar from './components/Shared/Navbar/Navbar';
import CommonBar from './components/Shared/CommonBar/CommonBar';
import AddService from './components/Dashboard/AddService/AddService';
import Services from './components/Home/Services/Services';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AllAdmins from './components/Dashboard/AllAdmins/AllAdmins';
import Orders from './components/Orders/Orders';
import AddReview from './components/Home/Testimonial/AddReview';
import Testimonial from './components/Home/Testimonial/Testimonial';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import MyOrder from './components/Orders/MyOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/common">
            <CommonBar></CommonBar>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/addAnAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/adminPanel">
            <AllAdmins></AllAdmins>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Testimonial></Testimonial>
          </PrivateRoute>
          <PrivateRoute path="/placeOrder">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/myOrder">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
