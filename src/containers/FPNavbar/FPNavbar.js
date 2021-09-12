import React from 'react';

import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';

import './FPNavbar.scss';

const FPNavbar = (props) => {
    const {sections} = props;
    return <Navbar className="FP-Navbar">
        <Container>
            <Row className="justify-content-between align-items-center">
                <Col className=""><a href="#"><h1>Frédéric<br/>Pilon</h1></a></Col>
                <Col>
                    <Nav className="justify-content-end d-none d-md-flex">
                        {Object.keys(sections).map((key,i)=>{
                            return <Nav.Link href={"#"+key} key={key} dangerouslySetInnerHTML={{__html: sections[key]}}></Nav.Link>
                        })}
                    </Nav>
                </Col>
            </Row>
        </Container>
    </Navbar>;
}

export default FPNavbar;