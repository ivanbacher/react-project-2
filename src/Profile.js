import React, { Component } from 'react';
import './App.css';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {

    
    let artist = { 
        name: '', 
        followers: { total: '' }, 
        images: [{url:''}], 
        genres:[] 
    };
    
    artist = this.props.artist !== null ? this.props.artist : artist;

    return (
        <div className="row profile">
            <div className="col-4">
                <img 
                    alt="profile"
                    className="img-fluid rounded-circle mx-auto profile-img"
                    src={artist.images[0].url}
                />
            </div>

            <div className="col-8 text-center">
                <div> 
                    <h3>
                        {artist.name} 
                    </h3>
                </div>
                
                <div> 
                    Followers: {artist.followers.total}  
                </div>

                <div>
                    {
                        artist.genres.map( (genre,i) => {
                            genre = genre !== artist.genres[artist.genres.length-1] 
                                          ? ` ${genre},` : ` & ${genre}`;

                            return (
                                <span key={i}>{genre}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
  }
}

export default Profile;
