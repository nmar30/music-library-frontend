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
            <form onSubmit={this.handleSubmit}>
                <table className="table">
                    <tbody>
                        <tr className="table-success">
                            <td>
                                <input type='text' name='title' value={this.state.title} onChange={this.handleChange} placeholder='Title' />      
                            </td>
                            <td>
                                <input type='text' name='album' value={this.state.album} onChange={this.handleChange} placeholder='Album' />
                            </td>
                            <td>
                                <input type='text' name='artist' value={this.state.artist} onChange={this.handleChange} placeholder='Artist' />
                            </td>
                            <td>
                                <input type='text' name='genre' value={this.state.genre} onChange={this.handleChange} placeholder='Genre' />
                            </td>
                            <td>
                                <input type='date' name='release_date' value={this.state.release_date} onChange={this.handleChange} placeholder='Release Date' />
                            </td>
                            <td>
                                <input type='submit' value='Add' className="btn btn-success" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
         );
    }
}
 
export default SongCreator;