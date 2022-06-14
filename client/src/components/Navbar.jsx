import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Logo from '../MCW_logo_updatedcolors.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function MainNavbar() {

    return(
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          
        />{' '}
      OmWork
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
    );
}

export default MainNavbar;