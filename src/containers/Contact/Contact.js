import React from 'react';

import {Container} from 'react-bootstrap';

import nl2br from './../../functions/nl2br'

import './Contact.scss';

const Contact = (props) => {
    const {text} = props;
    return <div className="FP-Contact" id="contact">
        <Container>
            <div dangerouslySetInnerHTML={{__html:nl2br(text)}}></div>
        </Container>
    </div>;
}

export default Contact;