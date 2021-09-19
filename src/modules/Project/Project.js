import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import {Container, Row, Col} from 'react-bootstrap';

import Image from './../Image/Image'
import nl2br from './../../functions/nl2br'

import './Project.scss';

const Project = (props) => {
    const {projectdata,isreversed} = props;
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef);
    var rowClass = "align-items-center ";
    if(isreversed){
        rowClass+='flex-row-reversed'
    }else{
        rowClass+='flex-row'
    }
    //console.log(props);
    return <div className={isVisible ? "FP-Project is-visible" : "FP-Project"} ref={blockRef}>
        <Container>
            <Row className={rowClass}>
                <Col md="6" className="text">
                    <h3 dangerouslySetInnerHTML={{__html:projectdata.nom}}></h3>
                    <div dangerouslySetInnerHTML={{__html:nl2br(projectdata.texte,true,true)}}></div>
                </Col>
                <Col md="6" className="image">
                    <Image src={projectdata.image_src} webp={projectdata.image_src_webp} alt={projectdata.nom} />
                </Col>
            </Row>
        </Container>
    </div>
}

export default Project;