import React, { Component } from 'react';
import axios from 'axios';
import MusicTable from './components/MusicTable/MusicTable';
import SongForm from './components/SongForm/SongForm';
import SearchBar from './components/SearchBar/SearchBar'

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
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({
                songs: response.data
            })
        }
        catch (error){
            console.log('Not gathering')
        }
    }

    async deleteSong(songid) {
        await axios.delete(`http://127.0.0.1:8000/music/${songid}`).then(response => {console.log(response)});
        this.getSongs()
    }

    async addSong(song) {
        await axios.post('http://127.0.0.1:8000/music/', song)
        this.getSongs()
    }

    searchSongs(search_query){
        console.log(search_query)
        const filtered_results = this.state.songs.filter(song => 
            song.title.includes(search_query) || song.artist.includes(search_query) || song.album.includes(search_query) || song.genre.includes(search_query) || song.release_date.includes(search_query))
        this.setState({
            songs: filtered_results
        })
    }

    renderTable() {
        return (
            this.state.songs.map((song) => 
            <MusicTable song={song} deleteSong={this.deleteSong.bind(this)} getSongs={this.getSongs.bind(this)}/>
            )
        )
    }

    render() { 
        return (
        <div className="container">
            <h1>Music Library</h1>
            <SearchBar searchSongs={this.searchSongs.bind(this)} />
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
            <SongForm addSong={this.addSong.bind(this)}/>
        </div>
        );
    }
}
 
export default App;