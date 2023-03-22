const VideoFrame = ({ id }) => {
    return (
        <iframe className='video-frame'
        src={'https://www.youtube.com/embed/' + id}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
        />
    );
}

export default VideoFrame;