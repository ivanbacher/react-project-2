import React, { Component } from 'react';
import logo from './logo.svg';

import Profile from './Profile.js';
import Gallery from './Gallery.js';

import './App.css';

// FONT AWESOME STUFF - https://www.npmjs.com/package/@fortawesome/react-fontawesome

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      artist: null,
      tracks: null
    }
  }

  search() {
    //https://developer.spotify.com/console/get-search-item/?q=tania%20bowra&type=artist&market=&limit=&offset=

    const TOKEN = 'BQDTNI1-Ce214a4QS_KsF6FXybIRgNE2JkQT5wOoxdpN4Fsz9g0F8maRK0pHsWXhgoYc7NjlD1EE8AUTCggTyxpFe1F3U5bxMjfQ8ayclzaIJTNTG1njgRJZ9YeVupyq-imoPckS2pEgz0Ej3NCl';


    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists`;

    
    fetch(FETCH_URL, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${TOKEN}` }
    })
    .then( response => response.json() )
    .then( json => { 

      if(json.error) {
        console.log('error ', json.error)
        return
      }
      
      console.log(json.artists.items[0])

      const artist = json.artists.items[0]; //because we limit to 1 in query
      this.setState({artist: artist});

      let FETCH_URL = `${ALBUM_URL}/${artist.id}/top-tracks?country=US&`;
      
      fetch(FETCH_URL, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${TOKEN}` }
      })
      .then( response => response.json() )
      .then( json => { 
        if(json.error) {
          console.log('error ', json.error)
          return
        }
        console.log(json)
        const tracks = json.tracks;
        this.setState({tracks: tracks});
      })

    });
  }

  render() {
    return (
      <div className="container">

        {/* Row 1 */}
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              Music Master
            </h1>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-12">
            <div className="input-group">
              <input 
                className="form-control" 
                placeholder="Search for an artist ...." 
                value={this.state.query} 
                onChange={ event => this.setState( { query: event.target.value }) }
                onKeyPress={event => { if(event.key === "Enter") { this.search(); } }}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={() => this.search()}>Search</button>
                </div>
            </div>
          </div>
        </div>
        
        
        {/* Row 3 */}

        {
          this.state.artist !== null 
          ?
            <Profile 
              artist={this.state.artist}
            />
          : 
            <div></div>
        }
        

        {/* Row 4 */}

        {
          this.state.tracks !== null 
          ?
            <Gallery 
              tracks={this.state.tracks}
            /> 
          : 
            <div></div>
        }
        
      </div>
    );
  }
}

export default App;
