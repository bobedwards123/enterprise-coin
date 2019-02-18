import React from 'react';
import {menuItems, createUsers} from './TestData';
import { Menu, Button, Dropdown, Image, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import {Auth} from 'aws-amplify';

export default class MenuDesktop extends React.Component {

    state = {
      items: menuItems,
      user: 'joe'
  }

  
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderItems = (activeItem)=>{
        return this.state.items.map((item, key)=>{
            return (

                <Menu.Item
                name={item.name}
                active={activeItem === item.name}
                onClick={this.handleItemClick}
              >
                <Link to={item.url}>

              {item.name}
              </Link>


              
              </Menu.Item>

            )
        })
  }

  componentDidMount(){
    const authStatus = Auth.currentUserInfo().then(user => {
        console.log(user)
        this.setState({user})
        return true
      }).catch(err => {
          console.log(err)
        return false
      });
  }

  signOut = ()=>{
      Auth.signOut()
          .then(data => {
            console.log(data)
            return this.props.history.push('/')

          })
          .catch(err => console.log(err));
  }

  render() {
    const { activeItem, user } = this.state



    return (
      <Segment>
        <div className="desktop_nav">
        <Menu  stackable fixed>
      <Menu.Item>
                {/* <img src='https://react.semantic-ui.com/logo.png' />
             */}
            <img src='https://image.freepik.com/free-icon/piggy-bank_318-138599.jpg' />
                IncCoin
                </Menu.Item>
        {this.renderItems(activeItem)}
        
        <Menu.Menu position='right'>
             <Menu.Item>
             {user.username}
             <Dropdown item text='User Details'>
            <Dropdown.Menu>
              <Dropdown.Item>
              <Image src="https://react.semantic-ui.com/images/avatar/small/lena.png" size="mini" circular />
              </Dropdown.Item>
              <Dropdown.Item>
                  Total Inc: 4
              </Dropdown.Item>
              <Dropdown.Item>
                  Total Investments: 10
              </Dropdown.Item>
              <Dropdown.Item>
                  <Link to={`/profile/${user.id}`}>
                  <Button>
{user.username}'s Profile
</Button>
                  </Link>
                 
                  
              </Dropdown.Item>
             
             
            </Dropdown.Menu>
          </Dropdown>
            <Button onClick={this.signOut.bind(this)} warning>Sign Out</Button>

          </Menu.Item>
        </Menu.Menu>
     

      
      </Menu>
        </div>
        <div className="mobile_nav">
        <div className="centered">
        <img className="" src='https://image.freepik.com/free-icon/piggy-bank_318-138599.jpg' />

        <h1 className="">IncCoin</h1>
        </div>

        
        <Dropdown item text='Menu'>
        <Dropdown.Menu>
         
          <Dropdown.Item>
          <Link to="/">
                 Home
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item>
          <Link to="/about">
                 About
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item>
          <Link to="/projects">
                 Projects
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item>
          <Link to="/create/project">
                 Create Project
                 </Link>
               </Dropdown.Item>
               <Dropdown.Item>
               <Button onClick={this.signOut.bind(this)} warning>Sign Out</Button>

                 </Dropdown.Item>
          
            
             </Dropdown.Menu>
        </Dropdown>
            
          
        </div>

      </Segment>
      
    )
  }
}

