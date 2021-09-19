import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import Job from './../../modules/Job/Job';
import './Formation.scss';

const Formation = (props) => {
    const {formation,titre} = props;
    var expObj = JSON.parse(formation);
    //console.log(expObj);
    return <div className="FP-Formation" id="formation">
        <Container>
            <h2 dangerouslySetInnerHTML={{__html:titre}}></h2>
            <Row className="gx-4 gy-4 ">
                {Object.keys(expObj).map((keyName, i) => (
                    <Col key={"project_" + i} sm="6" lg="4">
                        <Job name={expObj[keyName].nom} annee={expObj[keyName].annes} src={expObj[keyName].image_src} webp={expObj[keyName].image_src_webp} color={expObj[keyName].couleur} />
                    </Col>
                ))}
            </Row>
        </Container>
    </div>;
}

export default Formation;