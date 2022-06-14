import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/Navbar';
import Logo from './MCW_logo_updatedcolors.png';
import React from 'react';
import AddStudent from './views/newStudent';
import { StudentList } from './views/studentlist';
import { Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function App() {

  return (
    <div className="App">
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlist" element={<StudentList />} />

      </Routes>
    </div>
  );
};

  function Home() {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    }

      return(
        <>
        <div className="homebody">
        <Container>
        <Row>
          <Col></Col>
          <Col sm>
            <Image src={Logo} alt="mindful child wellness logo, child sitting in a meditating position with eyes closed" fluid="true"></Image>
          </Col>
          <Col></Col>
        </Row>

        <Row className="my-3">
          <Col></Col>
          <Col>
          <Button onClick={ handleClick }>Add Student</Button>
          </Col>
          <Col>
          <Button className="btn btn-primary"> <Link to="/studentlist">Assign OmWork</Link></Button>
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Col>
          {isShown && <AddStudent />}
          </Col>
        </Row>



      </Container>
      </div>
      </>
      )
    };

export default App;
