import React from 'react';

const VideoListItem = ({ video, setMainVideo }) => (
    <li className='list-group-item' onClick={() => setMainVideo(video)} id={video.id}>
        <div className='video-list media '>
            <div className='media-left'>
                <img className='media-object' width='120px' src={video.thumbnails?video.thumbnails.default.url: `http://gifimage.net/wp-content/uploads/2017/10/colorful-loader-gif-11.gif`} alt='thumbnail' />
            </div>
            <div className='media-body card-body'>
                <div className='media-heading'>{video.title} </div>
            </div>
        </div>
    </li>
)

export default VideoListItem