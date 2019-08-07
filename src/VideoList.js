import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect, removeVideoEspc}) => {

    const renderedVideos = Object.keys(videos).map((video) => {
        return <VideoItem key={video} video={videos[video]} handleVideoSelect={handleVideoSelect}  removeVideoEspc={removeVideoEspc}/>
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;