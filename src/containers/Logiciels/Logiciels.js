import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import Image from './../../modules/Image/Image';

import './Logiciels.scss';

import {Container, Row, Col} from 'react-bootstrap';

const Logiciels = (props) => {
    const {logiciels, titre} = props;
    var logiObj = JSON.parse(logiciels);
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef);
    //console.log(logiObj);
    return <div className={isVisible ? "FP-Logiciels is-visible" : "FP-Logiciels"} id="logiciels" ref={blockRef}>
        <Container>
            <h2 dangerouslySetInnerHTML={{__html:titre}}></h2>
            <Row className="gy-4">
                {Object.keys(logiObj).map((keyName, i) => (
                    <Col key={"logiciel_type_"+i} lg="3" md="4" sm="6" xs="12" className="logiciel">
                        <h3 dangerouslySetInnerHTML={{__html:logiObj[keyName].categorie}}></h3>
                        <Row className="align-items-center justify-content-center">
                            {Object.keys(logiObj[keyName].autres).map((keyName_autre, i_autre) => (
                                <Col key={"logo_"+i_autre} sm="3" xs="3">
                                    <Image 
                                        src={logiObj[keyName].autres[keyName_autre].autre_logo_src} 
                                        webp={logiObj[keyName].autres[keyName_autre].autre_logo_src_webp} 
                                        alt={logiObj[keyName].autres[keyName_autre].autre_text} 
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
}

export default Logiciels;