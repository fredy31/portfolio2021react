import React,{useRef} from 'react';
import useOnScreen from '../../functions/useOnScreen';

import {Container} from 'react-bootstrap';

import nl2br from './../../functions/nl2br'

import './Contact.scss';

const Contact = (props) => {
    const {text} = props;
    const blockRef = useRef();
    const isVisible = useOnScreen(blockRef);
    return <div className={isVisible ? "FP-Contact is-visible" : "FP-Contact"} ref={blockRef} id="contact">
        <Container>
            <div dangerouslySetInnerHTML={{__html:nl2br(text)}}></div>
        </Container>
    </div>;
}

export default Contact;