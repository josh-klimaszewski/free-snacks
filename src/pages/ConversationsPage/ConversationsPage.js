import React from 'react';
import YouTube from 'react-youtube';
import Booths from './Booths';
import './style.css';

const ConversationsPage = () => {
    return (
        <div className="conversations-page">
            <div className="videos-container">
                <div className="video-1">
                    <YouTube
                        videoId='4jJpK35lPrs'                 // defaults -> null
                        id='4jJpK35lPrs'                      // defaults -> null
                        containerClassName='video-1'       // defaults -> ''
                    />
                    <div>(Silent and Subtitled.)</div>
                </div>
                <div className="video-2">
                    <YouTube
                        videoId='EiZK9aX_ezA'                 // defaults -> null
                        id='EiZK9aX_ezA'                      // defaults -> null
                        containerClassName='video-2'       // defaults -> ''
                    />
                    <div>Stephanie Hall.<span>This or That. </span>Graphics on TV.</div>
                    <div>Excerpts from (free snacks) converstions with sound by Josh Klimaszewski.</div>
                </div>
            </div>
            <Booths />
        </div> 
        
       );
}


export default ConversationsPage;