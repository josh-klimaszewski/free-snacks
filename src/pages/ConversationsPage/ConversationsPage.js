import React from 'react';
import YouTube from 'react-youtube';
import Booths from './Booths';
import './style.css';

const ConversationsPage = () => {
    // const opts = {
    //     // height: '200',
    //     width: '100%'
    //   };
    return (
        <div className="conversations-page">
            <div className="title">Conversations</div>
            <div className="videos-container">
                <div className="video-1">
                    <YouTube
                        videoId='4jJpK35lPrs'                 // defaults -> null
                        id='4jJpK35lPrs'  
                        // opts={opts}                    // defaults -> null
                        // containerClassName='video-1'       // defaults -> ''
                    />
                    <div className="desc">(Silent and Subtitled.)</div>
                </div>
                <div className="video-2">
                    <YouTube
                        videoId='EiZK9aX_ezA'                 // defaults -> null
                        id='EiZK9aX_ezA'  
                        // opts={opts}                      // defaults -> null
                        // containerClassName='video-2'       // defaults -> ''
                    />
                    <div className="desc">Stephanie Hall. This or That. Graphics on TV.</div>
                    <div className="desc">Excerpts from (free snacks) converstions with sound by Josh Klimaszewski.</div>
                </div>
            </div>
            <Booths />
        </div> 
        
       );
}


export default ConversationsPage;