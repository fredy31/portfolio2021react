import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Job from './../../modules/Job/Job';

import './Experience.scss';

const Experience = (props) => {
    const {experience,titre} = props;
    var expObj = JSON.parse(experience);
    return <div className="FP-Experience" id="experience">
        <Container>
            <h2 dangerouslySetInnerHTML={{__html:titre}}></h2>
            <Row className="gx-4 gy-4 justify-content-center">
                {Object.keys(expObj).map((keyName, i) => (
                    <Col key={"project_" + i} sm="6" lg="4">
                        <Job name={expObj[keyName].nom} annee={expObj[keyName].annes} src={expObj[keyName].image_src} webp={expObj[keyName].image_src_webp} color={expObj[keyName].couleur} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>;
}

export default Experience;