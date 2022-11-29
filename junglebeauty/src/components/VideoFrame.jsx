const VideoFrame = ({ id }) => {
    return (
        <iframe className='video-frame'
        src={'https://www.youtube.com/embed/' + id}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        />
    );
}

export default VideoFrame;