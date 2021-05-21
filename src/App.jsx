import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable'

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
    }

    async deleteSong(props) {
        let response = await axios.delete('http://127.0.0.1:8000/music/'[props.song.id])
        this.getSongs()
    }

    renderTable = () => {
        return (
            this.state.songs.map((song) => 
            <MusicTable song={song} deleteSong={this.deleteSong}/>
            )
        )
    }

    render() { 
        return (
        <div className="container">
            <h1>Music Library</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        </div>
        );
    }
}
 
export default App;