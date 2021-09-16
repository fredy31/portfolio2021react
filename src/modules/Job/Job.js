import React, {useRef, useEffect} from 'react';

import Image from '../Image/Image';

import './Job.scss';

import {Row, Col} from 'react-bootstrap';

const Job = (props) => {
    const {name,annee,src,webp,color} = props;
    const hexJob = useRef();
    //console.log(expObj);
    useEffect(() => {
        //console.log(hexJob.current.getElementsByClassName('hex')[0] );
        function handleResizeJob() {
            if(hexJob){
                hexJob.current.getElementsByClassName('hex')[0].style.height = hexJob.current.getElementsByClassName('hex')[0].width + 'px'
            }
        }
        window.addEventListener('resize', handleResizeJob)
        handleResizeJob();
    }, [])
    return <Row className="FP-Job align-items-center" ref={hexJob}>
        <Col sm="4">
            <div className="hex" style={{backgroundColor:color}}>
                <Image src={src} webp={webp} alt={name} />
            </div>
        </Col>
        <Col sm="8">
            <h3 dangerouslySetInnerHTML={{__html:name}}></h3>
            <p className="dates" dangerouslySetInnerHTML={{__html:annee}}></p>
        </Col>
    </Row>;
}

export default Job;