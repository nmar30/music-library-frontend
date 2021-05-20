import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            songs: [],
          }
    }

    componentDidMount(){
        this.getSongs()
    }
    
    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music')
        this.setState({
            songs: response.data
        })
        console.log(this.songs)
    }

    render() { 
        return (
        <div>

        </div>
        );
    }
}
 
export default App;