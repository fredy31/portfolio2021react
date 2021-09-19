import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import { Container, Row, Col } from 'react-bootstrap';

import Image from './../../modules/Image/Image'

import './Intro.scss';

const Intro = (props) => {
    const { text } = props;
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef)
    return <div className={isVisible ? "FP-Intro is-visible" : "FP-Intro"} ref={blockRef}>
        <Container>
            <Row className="align-items-center">
                <Col className="d-none d-md-block" md="6">
                    <div className="image">
                        <Image src="#" webp="#" />
                        <div className="hex"></div>
                    </div>
                </Col>
                <Col md="6" className="text"><div dangerouslySetInnerHTML={{ __html: text }}></div></Col>
            </Row>
        </Container>
    </div>;
}

export default Intro;