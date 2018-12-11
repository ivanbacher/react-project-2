import React, { Component } from 'react';
import './App.css';


class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
        playingUrl: '',
        audio: null,
        playing: false 
    }
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);

    if(!this.state.playing) {
        
        audio.play();
        
        this.setState({
            playing: true,
            playingUrl: previewUrl,
            audio: audio
        });
    } else {
        if(this.state.playingUrl === previewUrl) {
            this.state.audio.pause();
            this.setState({
                playing:false
            });
        } else {
            this.state.audio.pause();
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio: audio
            });
        }
    }

    

  }

  render() {

    const tracks = this.props.tracks;

    return (
        <div className="row pt-5 pb-5">
            {
                tracks.map( (track, i) => {
                    
                    const trackImg = track.album.images[0].url;

                    return(
                        <div key={i} className="col-4 pb-4" onClick={()=>this.playAudio(track.preview_url)}>
                            <img 
                                src={trackImg}
                                alt="track"
                                className="img-fluid rounded"
                            />
                            <div className="track-play">
                                <div className="track-play-inner">
                                    {
                                        this.state.playingUrl === track.preview_url
                                        ? <span>| |</span>
                                        : <span>&#9654;</span>
                                    }
                                </div>
                            </div>
                            <p className="track-text text-center">
                                {track.name}
                            </p>
                        </div>
                    )

                })
            }  
        </div>
    );
  }
}

export default Gallery;
