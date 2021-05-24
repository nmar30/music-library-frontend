import React from 'react';

function MusicTable(props){
    return (
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.album}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td><button type="button" className="btn btn-danger" onClick={() => props.deleteSong(props.song.id)}>Delete</button></td>
        </tr>
    )
}


export default MusicTable;