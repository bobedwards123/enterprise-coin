import React from 'react';
import RenderProjects from './RenderProjects';
import {Card} from 'semantic-ui-react';
const ProjectGroup = ()=>{
    return (
        <Card.Group fluid stackable centered>
            <RenderProjects />
        </Card.Group>
    )
}
export default ProjectGroup;
