import React from 'react';

import {Container} from 'react-bootstrap';
import Project from './../../modules/Project/Project';

import './Projects.scss';

const Projects = (props) => {
    const {projects, titre} = props;
    var projObj = JSON.parse(projects);
    //console.log(projObj)
    return <div className="FP-Projects" id="projects">
        <Container><h2 dangerouslySetInnerHTML={{__html:titre}}></h2></Container>
        {Object.keys(projObj).map((keyName, i) => (
            <Project key={"project_"+i} projectdata={projObj[keyName]} isreversed={i%2} />
        ))}
    </div>;
}

export default Projects;