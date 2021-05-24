import React, { Component } from 'react';

class SongCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            album: this.state.album,
            artist: this.state.artist,
            genre: this.state.genre,
            release_date: this.state.release_date
        }
        this.props.addSong(song);
        this.setState({
            title: '',
            album: '',
            artist: '',
            genre: '',
            release_date: ''
        })
    }

    render() { 
        return ( 
            <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type='text' name='title' value={this.state.title} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Album: </label>
                    <input type='text' name='album' value={this.state.album} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Artist: </label>
                    <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Genre: </label>
                    <input type='text' name='genre' value={this.state.genre} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Release Date: </label>
                    <input type='date' name='release_date' value={this.state.release_date} onChange={this.handleChange} />
                </div>
                <div>
                    <input type='submit' value='Add' />
                </div>
            </form> 
            </div>
         );
    }
}
 
export default SongCreator;