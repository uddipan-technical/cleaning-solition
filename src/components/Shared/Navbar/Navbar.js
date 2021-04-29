import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
   return (
      <section>
         <div className="">
            <Navbar className="bg-primary" expand="lg">
               <div className="com-md-5">
               <Navbar.Brand as={Link} to="/home">
                  <h4 className="logo">Cleaning Solution</h4>
               </Navbar.Brand>
               </div>
              <div className="com-md-6">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto px-5">
                     <Nav.Link as={Link} to="/home">
                        <span className="text-white"> Home</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/common">
                        <span className="text-white"> Dashboard</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/addReview">
                        <span className="text-white"> Reviews</span>
                     </Nav.Link>
                     <Nav.Link as={Link} to="/login">
                        <span className="text-white"> Login</span>
                     </Nav.Link>
                  </Nav>
               </Navbar.Collapse>
              </div>
            </Navbar>
         </div>
      </section>
   );
};

export default NavBar;
