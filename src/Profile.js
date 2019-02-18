import React from 'react';
import {Card, Segment, Image, Icon} from 'semantic-ui-react';
import FundedProjects from './FundedProjects';


const Profile = ()=>{
    return (
        <Segment>
            <Card.Group centered stackable>
                <Card>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Content>
                    <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
                </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                    <Card.Header>
                        Funded Projects
                    </Card.Header>
                    <FundedProjects />

                    </Card.Content>


                   
                </Card>
            </Card.Group>
        </Segment>
    )
}
export default Profile;