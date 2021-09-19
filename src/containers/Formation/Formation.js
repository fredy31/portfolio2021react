import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import {Container, Row, Col} from 'react-bootstrap';
import Job from './../../modules/Job/Job';
import './Formation.scss';

const Formation = (props) => {
    const {formation,titre} = props;
    var expObj = JSON.parse(formation);
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef);
    //console.log(expObj);
    return <div className={isVisible ? "FP-Formation is-visible" : "FP-Formation"} id="formation" ref={blockRef}>
        <Container>
            <h2 dangerouslySetInnerHTML={{__html:titre}}></h2>
            <Row className="gx-4 gy-4 ">
                {Object.keys(expObj).map((keyName, i) => (
                    <Col key={"project_" + i} sm="6" lg="4" className="formation">
                        <Job name={expObj[keyName].nom} annee={expObj[keyName].annes} src={expObj[keyName].image_src} webp={expObj[keyName].image_src_webp} color={expObj[keyName].couleur} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>;
}

export default Formation;