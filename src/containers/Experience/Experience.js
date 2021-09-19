import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import {Container, Row, Col} from 'react-bootstrap';

import Job from './../../modules/Job/Job';

import './Experience.scss';

const Experience = (props) => {
    const {experience,titre} = props;
    var expObj = JSON.parse(experience);
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef);
    return <div className={isVisible ? "FP-Experience is-visible" : "FP-Experience"} id="experience" ref={blockRef}>
        <Container>
            <h2 dangerouslySetInnerHTML={{__html:titre}}></h2>
            <Row className="gx-4 gy-4 justify-content-center">
                {Object.keys(expObj).map((keyName, i) => (
                    <Col key={"project_" + i} sm="6" lg="4" className="experience">
                        <Job name={expObj[keyName].nom} annee={expObj[keyName].annes} src={expObj[keyName].image_src} webp={expObj[keyName].image_src_webp} color={expObj[keyName].couleur} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>;
}

export default Experience;