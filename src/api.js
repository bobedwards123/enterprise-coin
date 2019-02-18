import React from 'react';
import {API} from 'aws-amplify';
import axios from 'axios';
import {ENDPOINT} from './CONFIG';


export default class api extends React.Component {
    post = async () => {
        console.log('calling api');
        const body = {
                name: 'hello amplify!',
                description: 'a great project',
                goal: 100,
                funded: 80
              }
          
        axios.post(ENDPOINT + '/projects', body).then(res => console.log(res)).catch(err => console.log(err))

        // alert(JSON.stringify(response, null, 2));
      }
      get = async () => {
        console.log('calling api');
        // const response = await API.get('projectsApi', '/items/object/1');
        axios.get(ENDPOINT + '/projects').then(res => console.log(res)).catch(err => console.log(err))

        // const response = await API.get('projectsApi', '/items/asd123');

        // alert(JSON.stringify(response, null, 2));
      }
      getProject = async ()=>{
        const id = '09374ba0-123b-11e9-9dbb-ad40f10836d0';
        axios.get(ENDPOINT + '/projects/' + id).then(res => console.log(res)).catch(err => console.log(err))

      }
      getWallets = async ()=>{
        axios.get(ENDPOINT + '/wallets').then(res => console.log(res)).catch(err => console.log(err))

      }

      render(){
          return (
            <div className="App">
            <button onClick={this.post}>POST</button>
            <button onClick={this.get}>GET</button>
            <button onClick={this.getProject}>GET PROJECT</button>
            <button onClick={this.getWallets}>GET Wallets</button>


            
          </div>
          )
      }
}