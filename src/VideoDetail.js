import React from 'react';
import Youtube from 'react-youtube'

const VideoDetail = ({video, removeVideo}) => {
    if (!video) {
        return <div>Loading ...</div>;
    }

    const opts = {
      playerVars: { 
        autoplay: 1
      }
    };

    return (
        <div>
            <div className='ui embed'>
                <Youtube videoId={video.id} opts={ opts } onEnd={removeVideo} />
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        )
    }
    
export default VideoDetail;