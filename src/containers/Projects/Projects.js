import React from 'react';

//import {Container, Row, Col} from 'react-bootstrap';
import Project from './../../modules/Project/Project';

const Projects = (props) => {
    const {projects} = props;
    var projObj = JSON.parse(projects);
    //console.log(projObj)
    return <div className="FP-Projects">
        {Object.keys(projObj).map((keyName, i) => (
            <Project key={"project_"+i} projectdata={projObj[i]} />
        ))}
    </div>;
}

export default Projects;