import React from 'react';
import {Image, Grid, Segment, Header, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Landing = ()=>{
    return (
        <Segment>
        <h1 className="main_heading">IncCoin fueling innovation</h1>
        <div className="centered">
        <Link to={`/projects/`}>
                        <Button color="green">
                            View Projects
                        </Button>
                        </Link>
                        <Link to={`/create/project/`}>
                        <Button color="teal">
                            Create Project
                        </Button>
                        </Link>
                        <Link to={`/about`}>
                        <Button color="blue">
                            Learn More
                        </Button>
                        </Link>
        </div>
      
        <Segment>
 

        <Grid stackable columns={1}>
        {/* <Grid.Column>
        <Image className="filter" centered rounded src="https://images.unsplash.com/photo-1536821623786-3b863033b81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />

        </Grid.Column> */}
        <Grid.Column>
        <Image fluid className="main_image" rounded src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />

        </Grid.Column>
        {/* <Grid.Column>
        <Image className="filter" centered rounded src="https://images.unsplash.com/photo-1536821623786-3b863033b81b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />

        </Grid.Column> */}

        </Grid>
        </Segment>
  
        </Segment>
        
    )
}

export default Landing;