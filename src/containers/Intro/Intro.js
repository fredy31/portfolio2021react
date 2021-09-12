import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

const Intro = (props) => {
    const {text} = props;
    return <Container className="FP-Intro">
        <Row className="align-items-center">
            <Col></Col>
            <Col><div dangerouslySetInnerHTML={{__html:text}}></div></Col>
        </Row>
    </Container>;
}

export default Intro;