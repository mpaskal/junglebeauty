import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import VideoFrame from './VideoFrame';
import { getCatFilepath } from './Functions';
import { GetAllImages } from './FirebaseFunctions';
import './../App.css';

const VideoCarousel = ({ videos = [] }) => {  
    return (
        <Carousel 
            infinite
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30    
                }
            }}
            rewind={false}
            showDots
        >
            {videos.map((video) => {
                return (
                    <VideoFrame key={video} id={video} />
                )
            })}
        </Carousel>
  );
};

export default VideoCarousel;