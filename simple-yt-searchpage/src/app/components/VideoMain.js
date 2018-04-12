import React from 'react';

const VideoMain = ({ video, autoplay }) => {
    if (!video) {
        return <img src='http://gifimage.net/wp-content/uploads/2017/10/colorful-loader-gif-11.gif' alt='loader' />
    }

    const url = `https://www.youtube.com/embed/${video.id}${autoplay}`

    return (
        <div className='col-md-8'>
            <div className="video-detail card-body">
                <div className='embed-responsive embed-responsive-16by9'>
                    <iframe className='embed-responsive-item' src={url} title={video.id} allowFullScreen></iframe>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                    <p className="card-text">{video.description}</p>
                    <p className="card-text"><small className="text-muted"></small></p>
                </div>
            </div>
        </div>
    )
}
export default VideoMain;