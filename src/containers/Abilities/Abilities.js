import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import Ability from './../../modules/Ability/Ability';

import './Abilities.scss';

const Abilities = (props) => {
    const {abilities} = props;
    var abObj = JSON.parse(abilities);
    //console.log(abObj);
    return <div className="FP-Abilities"><Container>
        <Row className="justify-content-center gy-4">
            {Object.keys(abObj).map((keyName, i) => (
                <Col lg="2" md="4" sm="6" xs="12" key={"ability_"+i}>
                    <Ability key={"ability_"+i} ability={abObj[keyName]}></Ability>
                </Col>
            ))}
        </Row>
    </Container></div>;
}

export default Abilities;