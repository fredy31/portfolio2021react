import React,{useRef,useEffect} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import { Container, Row, Col } from 'react-bootstrap';

import Image from './../../modules/Image/Image'

import './Intro.scss';

const Intro = (props) => {
    const { text,img,webp } = props;
    const blockRef = useRef();
    const hexRef = useRef();
    const isVisible = useOnScreen(blockRef);
    useEffect(() => {
        console.log(hexRef.current.getElementsByClassName('hex')[0].clientWidth );
        function handleResize() {
            if(hexRef){
                hexRef.current.getElementsByClassName('hex')[0].style.height = hexRef.current.getElementsByClassName('hex')[0].clientWidth + 'px'
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize();
    }, [])
    return <div className={isVisible ? "FP-Intro is-visible" : "FP-Intro"} ref={blockRef}>
        <Container>
            <Row className="align-items-center">
                <Col className="d-none d-md-block col-img" lg="4" md="6">
                    <div className="image" ref={hexRef}>
                        <div className="hex"><Image src={img} webp={webp} /></div>
                    </div>
                </Col>
                <Col lg="8" md="6" className="text col-text"><div dangerouslySetInnerHTML={{ __html: text }}></div></Col>
            </Row>
        </Container>
    </div>;
}

export default Intro;