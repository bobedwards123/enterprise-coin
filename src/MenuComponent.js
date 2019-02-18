import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import RenderProjects from './RenderProjects';
import MobileContainer from './MobileContainer';
import HomepageHeading from './HomepageHeading';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card
} from 'semantic-ui-react'
const MenuComponent = ({fixed})=> (

    <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Container>
          <Link to="/">
          <Menu.Item as='a'>Home</Menu.Item>

          </Link>
          <Link to="/about">
          <Menu.Item as='a'>About</Menu.Item>

          </Link>
          <Link to="/projects">
          <Menu.Item as='a'>Projects</Menu.Item>

          </Link>
          <Link to="/users">
          <Menu.Item as='a'>Users</Menu.Item>

          </Link>
          <Link to="/analytics">
          <Menu.Item as='a'>Analytics</Menu.Item>

          </Link>
          
       
          <Menu.Item position='right'>
            <Button as='a' inverted={!fixed}>
              Log in
            </Button>
            <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
              Sign Up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>  
)
export default MenuComponent;
