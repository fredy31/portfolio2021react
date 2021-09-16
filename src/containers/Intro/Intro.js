import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Image from './../../modules/Image/Image'

import './Intro.scss';

const Intro = (props) => {
    const {text} = props;
    return <div className="FP-Intro">
        <Container>
            <Row className="align-items-center">
                <Col>
                    <div className="image">
                        <Image src="#" webp="#" />
                        <div className="hex"></div>
                    </div>
                </Col>
                <Col><div dangerouslySetInnerHTML={{__html:text}}></div></Col>
            </Row>
        </Container>
    </div>;
}

export default Intro;