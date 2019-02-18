import React from 'react';
import { Form, Card, Grid, Segment, Button, Message } from 'semantic-ui-react'
import axios from 'axios'
import {ENDPOINT} from './CONFIG';

class createProject extends React.Component {
  state = { 
      name: '', 
      description: '', 
      goal: '',
      video: '',
      submittedName: '', 
      submittedDescription: '',
      submittedVideo: '',
      submittedImage: '',
      image: '',
      dataview: false,
        res: '',
        sent: false
    }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, description, goal, video, image } = this.state
    const data = {
        name,
        description,
        goal,
        video,
        image,
        funded: 0
    }

    this.setState({ submittedName: name, submittedGoal: goal, submittedDescription: description, submittedVideo: video })
    axios.post(ENDPOINT + '/projects', data).then(res => {
        this.setState({res, sent: true})
        this.props.history.push('/projects')
    })
  }

  render() {
    const { name, image, description,goal, video, submittedName, submittedGoal, submittedDescription, submittedVideo, submittedImage } = this.state

    return (
      <div>
          <Grid stackable columns={3}>
          <Grid.Column>

          </Grid.Column>
          <Grid.Column>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input  placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <br/>
            <Form.Input
              placeholder='description'
              name='description'
              value={description}
              onChange={this.handleChange}
            />
                        <br/>

                   <Form.Input 
              placeholder='Goal $'
              name='goal'
              value={goal}
              onChange={this.handleChange}
            />
                        <br/>

                    <Form.Input
              placeholder='Video URL'
              name='video'
              value={video}
              onChange={this.handleChange}
            />
                        <br/>

            <Form.Input
              placeholder='Image URL'
              name='image'
              value={image}
              onChange={this.handleChange}
            />
                        <br/>

            <Form.Button content='Submit' />
            
         
        </Form>
        <p>
        {this.state.sent ? <Message positive>Project Created</Message> : ''}

        </p>
              </Grid.Column>
              <Grid.Column>
              <Button onClick={()=>{
            this.setState({dataview: !this.state.dataview})
        }}>{this.state.dataview ? 'hide data': 'view data'}</Button>
        {this.state.dataview ? <Segment>
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, description, goal, video }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedDescription, submittedGoal, submittedVideo, submittedImage }, null, 2)}</pre>
        {JSON.stringify(this.state.res)}

        </Segment> : ''}
              
              </Grid.Column>

          </Grid>
       
      
      </div>
    )
  }
}

export default createProject;
