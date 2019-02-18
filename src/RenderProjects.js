import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid, Image, Icon, Card, Button, Message, Segment} from 'semantic-ui-react';
import './App.css';
import {projectData} from './TestData';
import {Link} from 'react-router-dom';
import {LinkedinIcon, FacebookIcon, GooglePlusIcon} from 'react-share';
import axios from 'axios';
import {ENDPOINT} from './CONFIG';
import moment from 'moment';


export default class RenderProjects extends React.Component {
    state = {
        projectData: ''
    }
    componentDidMount(){
        this.getData()
    }
    getData = ()=>{
        axios.get(ENDPOINT + '/projects')
        .then(res => {
            console.log(res)
            this.setState({projectData: res.data})
        }).catch(err => console.log(err))
    }
    checkStatus = (input)=>{
        if(input.funded > input.goal){
            return 'green'
        } else {
            return 'red'
        }
    }
    RenderProjectsData = ()=>{
        if(this.state.projectData !== ''){
            return this.state.projectData.map(project => {
                return (
                    <Card color={this.checkStatus(project)}>
                    <Image size="huge" src={project.image} />
                    <Card.Content>
                      <Card.Header>{project.name}</Card.Header>
                      <Card.Meta>Created {moment(project.date).fromNow()}</Card.Meta>
                      <Card.Description>{project.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='user' />
                        {/* {project.supporters.length} supporters */}
                      </a>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='money' />
                        ${project.goal} goal
                      </a>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='money' />
                        ${project.funded} funded
                      </a>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name='money' />
                        ${Math.round( (project.funded / project.goal) * 100 )}% funded
                      </a>
                    </Card.Content>
                    <Card.Content>

                    </Card.Content>
                    <Card.Content>
                        <Icon name="" />
                        <Message color={this.checkStatus(project)}>{this.checkStatus(project) === 'red' ? 'unfunded' : 'funded'}</Message>
            
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={`/projects/${project.id}`}>
                        <Button color="green">
                            View
                        </Button>
                        </Link>
                        
                        <Button color="blue">
                            Follow +
                        </Button>
                        <Button color="blue">
                            <Icon name="share" />
                        </Button>
                        <Grid centered>
                            <Grid.Column>
                            <LinkedinIcon size={25} round={true} />
        
                            </Grid.Column>
                            <Grid.Column>
                            <FacebookIcon size={25} round={true} />
        
                            </Grid.Column>
                            <Grid.Column>
                            <GooglePlusIcon size={25} round={true} />
        
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                  </Card>
        
                )
            })
        }
        
    }

    render(){
        return (
            <Card.Group stackable centered>
                {this.RenderProjectsData()}
            </Card.Group>
            )
    }
}







// const RenderProjects = ()=>{
//     return projectData.map(project => {
//         return (
//             <Card color={checkStatus(project)}>
//             <Image size="huge" src={project.image} />
//             <Card.Content>
//               <Card.Header>{project.name}</Card.Header>
//               <Card.Meta>{project.date}</Card.Meta>
//               <Card.Description>{project.description}</Card.Description>
//             </Card.Content>
//             <Card.Content extra>
//               <a>
//                 <Icon name='user' />
//                 {project.supporters.length} supporters
//               </a>
//             </Card.Content>
//             <Card.Content extra>
//               <a>
//                 <Icon name='money' />
//                 ${project.goal} goal
//               </a>
//             </Card.Content>
//             <Card.Content extra>
//               <a>
//                 <Icon name='money' />
//                 ${project.funded} funded
//               </a>
//             </Card.Content>
//             <Card.Content>
//                 <Icon name="" />
//                 <Message color={checkStatus(project)}>{checkStatus(project) === 'red' ? 'unfunded' : 'funded'}</Message>
    
//             </Card.Content>
//             <Card.Content extra>
//                 <Link to={`/projects/${project.id}`}>
//                 <Button color="green">
//                     View
//                 </Button>
//                 </Link>
                
//                 <Button color="blue">
//                     Follow +
//                 </Button>
//                 <Button color="blue">
//                     <Icon name="share" />
//                 </Button>
//                 <Grid centered>
//                     <Grid.Column>
//                     <LinkedinIcon size={25} round={true} />

//                     </Grid.Column>
//                     <Grid.Column>
//                     <FacebookIcon size={25} round={true} />

//                     </Grid.Column>
//                     <Grid.Column>
//                     <GooglePlusIcon size={25} round={true} />

//                     </Grid.Column>
//                 </Grid>
//             </Card.Content>
//           </Card>

//         )
//     })
    
// }


// export default RenderProjects;
