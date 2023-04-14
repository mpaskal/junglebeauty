import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CatsProvider, useCats } from '../contexts/CatsContext';
import { getCatFilepath } from '../components/Functions';
import { QueryCats } from '../components/FirebaseFunctions';
import CatCardCarousel from '../components/CatCardCarousel';
import VideoList from '../lists/VideoList';
import CatCard from '../components/CatCard';
import VideoFrame from '../components/VideoFrame';
import './../App.css';

const Home = () => {
    var cats = useCats();
    if (cats) {
        cats = cats.kittens.filter((cat) => cat.status == 'available');
    } else {
        cats = [];
    }

    return (
        <div className='page-background'>
            <CatCardCarousel cats={cats} autoplay={true} />

            <h1>Hello! We are happy to welcome you to our website!</h1>
            <p>
                Do you want to have a small and tame leopard at home? You have come to the right place. Welcome to our Junglebeauty Cattery of Bengals. 
                Our cattery is registered in the international felinology system: TICA and certified as a trusted breeder by Bengal Cat Club. Also, we 
                are an official partner of Royal Canin. Our Cattery is located in Kitchener, Ontario, Canada.
            </p>

            <Row className='columns-container'>
                <Col sm={3}>
                    <p>
                        Our best offers! <b>Please note:</b> we match the price for these kittens! It means if you see the TICA kitten of the same quality, 
                        offered with the same options and benefits - we will make our price the same for you!
                    </p>
                    <div className='cat-card-column'>
                        {cats.filter(cat => cat.type == 'kitten' && cat.status == 'available').sort((a, b) => a.date > b.date ? -1 : 1).slice(0, 5).map((cat) => {
                            return (
                                <div key={cat.id} className='card-container'>
                                    <CatCard cat={cat}/>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col sm={6}>
                    <p>
                        Here you can buy a Bengal kitten, outwardly similar to a wild inhabitant of the jungle and savannah, but affectionate and tame, like all domestic cats.
                    </p><p>
                        The Junglebeauty Cattery has been breeding Bengal cats since 2018. We have Bengal kittens of both rare and traditional colors. All of them are active, 
                        affectionate, friendly with each other and cuddly with people. Our kittens grow up in love, and from an early age, they know how to respond to affection. 
                        Of course, the characters of Bengal kittens are different, but in general, they are human-oriented, sociable, and very smart.
                    </p><p>
                        If you decide to let a small tame leopard into your house, which will fill it with fun and love, you must understand that you have a huge responsibility. 
                        Since we are responsible for those we have tamed, it is essential for us where our kittens move!
                    </p><p>
                        All our kittens are purebred, healthy and socialized, brought up in love and affection.
                    </p><p>
                        We will be in touch with you before and after you take your furriend home. Please be advised that not only you choose a kitten in our Cattery, but we are 
                        also interested in making our graduates happy. After all, you get not a toy but a living being that requires care and love.
                    </p><p>
                        Do you want to find a healthy, joyful and great companion at your home? Then welcome to our cattery.
                    </p>
                    <Link className='text-link' to='why-choose-junglebeauty'>
                        <h3>So, why buy a Bengal Kitten from Junglebeauty Cattery?</h3>
                    </Link>
                </Col>
                <Col sm={3}>
                    <p>
                        Best videos of Junglebeauty Bengals Cattery!
                    </p>
                    <div className='video-column'>
                        {VideoList.slice(0, 5).map((video) => {
                            return (
                                <>
                                    <VideoFrame key={video.id} id={video.id}/>
                                    <p>{video.desc}</p>
                                </>
                            )
                        })}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home;