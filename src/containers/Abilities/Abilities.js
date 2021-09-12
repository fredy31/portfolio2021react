import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Ability from './../../modules/Ability/Ability';

const Abilities = (props) => {
    const {abilities} = props;
    var abObj = JSON.parse(abilities);
    //console.log(abObj);
    return <Container className="FP-Abilities">
        <Row>
            <Col lg="3" md="4" sm="6" xs="12" >
                {Object.keys(abObj).map((keyName, i) => (
                    <Ability key={"ability_"+i} ability={abObj[keyName]}></Ability>
                ))}
            </Col>
        </Row>
    </Container>;
}

export default Abilities;