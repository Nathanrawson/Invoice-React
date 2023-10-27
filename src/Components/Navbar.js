import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { isAuthenticated as checkIsAuthenticated, logout } from '../../Services/AuthService'
import { useNavigate } from "react-router-dom";
// import AuthContext from '../../Contexts/AuthContext'; // Replace with the correct path

const MainNavbar = () => {
  const navigate = useNavigate();
  //   const {authenticated, setAuthenticated} = useContext(AuthContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  //   useEffect(() => {
  //     const checkAuthentication = async () => {
  //       const isLoggedIn = await checkIsAuthenticated();
  //       setAuthenticated(isLoggedIn);
  //     };

  //     checkAuthentication();
  //   }, []);

  //   const handleLogout = async () => {
  //     await logout();
  //     navigate("/login");
  //     setAuthenticated(false);
  //   };

  //   const ambitionLink = () => {
  //     if (!authenticated) {
  //       return;
  //     }
  //     return (
  //       <Nav>
  //         <Nav.Link onClick={() => navigate("/ambitions")}>Ambitions</Nav.Link>
  //       </Nav>
  //     );
  //   };
  return (
    <Navbar id="Navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Invoiceamo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {!authenticated ? (
              <Nav.Link href="/login">Login</Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              
            )}
          </Nav> */}
          {/* {ambitionLink()} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
