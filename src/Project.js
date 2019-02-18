import React from 'react';
import {projectData} from './TestData';
import {Grid,Button, Card, Container,Input,Label, Message, Header, Progress, Image, Divider, Icon, Segment, Modal} from 'semantic-ui-react';
import axios from 'axios';
import {Auth} from 'aws-amplify';


import {ENDPOINT} from './CONFIG';
import { isNumber } from 'util';
export default class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            project: '',
            percent: '',
            supporters: '',
            balance: 4.00,
            transaction: '',
            message: null,
            following: true,
            sharedWith: 'nothing',
            userWallet: '',
            currentUser: ''
        }
    }
    getTestData = ()=>{
        return projectData.map((project, key) => {
            if(project._id == this.props.match.params.projectId){
                return this.setState({project})
            }
        })
    }

    getData = ()=>{
        const {projectId} = this.props.match.params;
        Auth.currentAuthenticatedUser()
            .then(data => console.log(data))
            .catch(err => console.log(err));
        Auth.currentUserInfo().then(res => {
            console.log(res)
            this.setState({currentUser: res})
        })
        axios.get(ENDPOINT + '/projects').then(res => {
            // console.log(res.data)
            return res.data.map(project => {
                // console.log(project.id, projectId)
                if(project.id === projectId){
                    this.setState({project})
                }
            })
        }).catch(err => console.log(err))
    }
    renderMessage = ()=>{
        if(this.state.message == null){
            return ''
        }
        if(this.state.message.type == 'error'){
            return <Message negative>{this.state.message.data}</Message>
        } else {
            return <Message positive>{this.state.message.data}</Message>

        }
    }

    handleFollow = ()=>{
        console.log('current follow status:' + this.state.following)
        if(this.state.following == true){
            return  (
                <Button onClick={this.toggleFollow} color="red">
                unfollow -
                    </Button>
            )
        } else {
            return (
                <Button onClick={this.toggleFollow} color="green">
                Follow +
                </Button>
            )
        }
    }

    getWallet = async ()=>{
        Auth.currentAuthenticatedUser()
            .then(data => {
                console.log(data, 'from getWALLET user data')
                const {email} = data.attributes;
                console.log(email)

                axios.get(ENDPOINT + '/wallets').then(res => {
                    const responseData = res.data;
                    return responseData.map(response =>{
                        console.log(response.userEmail, 'wallet details')
                        if(response.userEmail === email){
                            console.log('we found our wallet', response.id)
                            this.setState({userWallet: response})
                        }

                    })
                    
        
                }).catch(err => console.log(err))
            
            })
            .catch(err => console.log(err));
        

    }

    renderProgress = (funded, goal)=>{
        console.log(this.state.project, 'the project')

        const percent = Math.round((funded / goal) *100)
        if(percent > 100){
            return <Progress progress success percent={percent} />
        } else if (percent < 100 && percent > 40){
            return <Progress progress warning percent={percent} />
        } else if (percent < 40) {
            return <Progress progress error percent={percent} />
        }
        // console.log(percent)
        // return this.setState({percent})
        // return this.renderBar(percent)
            
    }


    renderBar = (percent)=>{
        console.log(percent, 'percent')
            
    }
        checkStatus = (input)=>{
            if(input.funded > input.goal){
                return 'green'
            } else {
                return 'red'
            }
        }

        updateTransaction = (e)=>{
            e.preventDefault();
            const transaction = e.target.value;
            console.log(this.state.transaction)
            return this.setState({transaction})
        }

        makeTransaction = ()=>{
            const {transaction, project} = this.state;
            if(transaction < 0){
            }
            
            const {balance, projectSupporters, id} = this.state.userWallet;
            let message;
            if(isNumber(transaction) ===false){
                message = {data:' you must enter a number', type: 'error'}
            }
            if(transaction > balance){
                message = {data: 'Error: The transaction is bigger than your avaliable balance', type: 'error'}
                this.setState({message})
                return console.log(message)
            } else if (transaction < 0){
                return this.setState({message: {data: 'Error: your transaction cannot be below zero', type: 'error'}})
            }     
            else {
                // create the data structure to send to the API
                const body = {
                    // get the data from the state
                    id,
                    balance: (balance - transaction)
                }

                axios.put(ENDPOINT + '/wallets', body).then(res => {
                    console.log(res, 'from function')

                    const projectBody = {
                        id: project.id,
                        funded: parseInt(project.funded),
                        additionalfunding: parseInt(transaction)
                      }
                      axios.put(ENDPOINT + '/projects', projectBody).then(res =>{
                        console.log(res, 'this is the res of posting to the api from project put')
                        return this.props.history.push('/projects')
                      }).catch(err => {
                            console.log(err)
                      })
                      
                    // this.setState({balance: res.Attributes.balance})
                }).catch(err =>{
                    console.log(err)
                })

                
                //make a post request to the axios API PUT /wallet to update the new wallet balance
                // update the  

                message = {data: 'Your transaction has been processed, you have ' + (balance - transaction) + ' remaining tokens', type: 'success'}

                this.setState({message, balance: (balance - transaction)})

                return console.log(message)
            }
            console.log('transaction made')
            
        }

        handleShare = (destination)=>{
            if(destination === 'facebook'){
                console.log('shared with facebook')
                return this.setState({sharedWith: destination})
            }else {
                console.log('share with something else')
                return this.setState({sharedWith: destination})

            }
        }

        toggleFollow = ()=>{
            return this.setState({following: !this.state.following})
        }
    renderData = ()=>{
        console.log(this.state.message)
    
        if(this.state.project !== null){  
            return (
                <Grid columns={1}>
            
                <Grid.Column>
                    {/* <Image rounded centered src={this.state.project.image} /> */}
                    <Divider />
                    <Header textAlign="center" as="h1">

                    <Icon name='users' circular />

                        {this.state.project.name}

                    </Header>
                    <Image centered size="huge" src={this.state.project.image} />

                    <Header as='h2' attached='top'>
                    Description
                    </Header>
                    <Segment attached>
                    {this.state.project.description}
                    </Segment>
                    <Segment>
                    {this.state.project.video?<iframe className="iframe_video" src={`https://www.youtube.com/embed/${this.state.project.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>: ''  }    

                    </Segment>
                    <Segment>
                        {this.state.project.funded !== ''? this.renderProgress(this.state.project.funded, this.state.project.goal) : ''}
                        {/* {this.state.percent !== ''? this.renderBar(this.state.percent) : undefined} */}
                        {/* {this.state.project.funded > 0? this.renderProgress(): '0%'} */}
                        {/* {this.state.project !== ''? parseInt(this.state.project.funded) / parseInt(this.state.project.goal) : '' } */}
                    </Segment>
                  
          
                <Card fluid color={this.checkStatus(this.state.project)}>
    
            <Card.Content extra>
              <a>
                <Icon name='user' />
              </a>

            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='money' />
                ${this.state.project.goal} goal
              </a>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='money' />
                ${this.state.project.funded} funded
              </a>
            </Card.Content>
            <Card.Content extra>
             
                
               
                {this.handleFollow()}
              
                {/* sharing modal */}
                <Modal trigger={ <Button color="blue">
                    <Icon name="share" />
                    Share
                </Button>}>
                <Header icon='share' content='Share with your friends' />
                <Modal.Content>
                    <p>
                        Share with your friends on Facebook/ Twitter
                    </p>
                    <Button onClick={()=>{
                        this.handleShare('facebook')
                    }}>
                    <Icon name="facebook" />

                        Facebook
                    </Button>
                    <Button onClick={()=>{
                        this.handleShare('twitter')
                    }}>
                    <Icon name="twitter" />

                        Twitter
                    </Button>
                    {this.state.shared !== 'nothing' ? <Message positive>Shared with {this.state.sharedWith}</Message> : undefined}
                    </Modal.Content>
                </Modal>

                {/* transaction modal */}
          
                <Modal trigger={ <Button onClick={this.getWallet} color="green">
                    <Icon name="money" />
                    Invest
                </Button>}>
                <Header icon='money' content='Invest your Inc$' />
                <Modal.Content>
                    {/* <button onClick={this.getWallet}>Click to view data re wallet</button> */}
                    <p>
                        Invest your Inc$ by selecting the amount and then clicking confirm
                    </p>
                    <p>

                        Your Avaliable Balance: {this.state.userWallet.balance} $Inc
                    </p>
                    <ul>
                        <li>User Wallet ID: {this.state.userWallet.id}</li>
                        <li>User Wallet Balance: {this.state.userWallet.balance}</li>
                        <li>User Wallet Registered Email: {this.state.userWallet.userEmail}</li>

                    </ul>
                    <Input labelPosition='right' type='text' placeholder='Amount'>
                <Label basic>$</Label>
                <input type="number" id="transaction" onChange={this.updateTransaction.bind(this)} />
                <Label>$Inc</Label>
                    </Input>
                    </Modal.Content>
                    <Modal.Content>
                        
                        {this.renderMessage()}
                    </Modal.Content>
                    <Modal.Actions>
                
        
                <Button onClick={this.makeTransaction} color='green'>
                    <Icon name='checkmark' /> Yes
                </Button>
                </Modal.Actions>
                </Modal>


            </Card.Content>
        
          </Card>
          


                </Grid.Column>
             
            <Grid.Column>
            
            </Grid.Column>
            </Grid>

            )
        }
    }
    componentDidMount(){
        this.getData()
    }
    render(){

     
        return (
            <div>
                        {/* {this.props.match.params.projectId} */}
                        {/* {this.state.project !== null? this.state.project._id : ''} */}
                        {this.renderData()}
            </div>
        )
    }
}

