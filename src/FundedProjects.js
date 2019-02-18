import React from 'react';
import { Button, Image, List } from 'semantic-ui-react'




const FundedProjects = ()=>(
<List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button>View</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>Project 1</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>View</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
      <List.Content>Project 2</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>View</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
      <List.Content>Project 3</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated='right'>
        <Button>View</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
      <List.Content>Project 4</List.Content>
    </List.Item>
  </List>
)
export default FundedProjects;

