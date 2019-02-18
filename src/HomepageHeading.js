import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import RenderProjects from './RenderProjects';
import MobileContainer from './MobileContainer';

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


const HomepageHeading = ({ mobile }) => {
    if(mobile){
        return (
            <Segment>
            <Grid>
                <Segment>
                <Card.Group itemsPerRow={1}>
                <RenderProjects />
            </Card.Group>
        
                </Segment>
            </Grid>
            </Segment>  
        )
    } else {
        return (
            <Segment>
            <Grid>
                <Segment>
                <Card.Group itemsPerRow={3}>
                <RenderProjects />
            </Card.Group>
        
                </Segment>
            </Grid>
            </Segment>  
        )
    }

}

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;
