import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCats } from '../contexts/CatsContext';
import CatCardCarousel from '../components/CatCardCarousel';
import VideoList from '../lists/VideoList';
import CatCard from '../components/CatCard';
import VideoFrame from '../components/VideoFrame';
import VideoColumn from '../components/VideoColumn';
import './../App.css';

const Home = () => {
    var cats = useCats();
    if (cats) {
        cats = cats.kittens.filter((cat) => cat.status === 'available');
    } else {
        cats = [];
    }

    return (
        <div className='page-background paragraph-container'>
            <CatCardCarousel cats={cats} autoplay={true} />

            <h1 className='page-header padded-header'>Hello! We are happy to welcome you to our website!</h1>
            <p>
                Do you want to have a small and tame leopard at home? You have come to the right place. Welcome to our Junglebeauty Bengal Cattery. 
                Our cattery is registered in the international felinology system TICA and certified as a trusted breeder by Bengal Cat Club. Also, we 
                are an official partner of Royal Canin. Our Cattery is located in Kitchener, Ontario, Canada.
            </p>

            <Row className='columns-container'>
                <Col sm={3}>
                    <p>
                        Our best offers! <b>Please note:</b> we match the price for these kittens! This means if you see a TICA kitten of the same quality, 
                        offered with the same options and benefits - we will make our price the same for you!
                    </p>
                    <div className='cat-card-column'>
                        {cats.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, 5).map((cat) => {
                            return (
                                <div key={cat.id} className='card-container'>
                                    <CatCard cat={cat} size='small'/>
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col sm={6} className='paragraph-container'>
                    <p>
                        Here you can buy a Bengal kitten, outwardly similar to a wild inhabitant of the jungle and savannah, but affectionate and tame, like all domestic cats.
                    </p>
                    <p>
                        The Junglebeauty Cattery has been breeding Bengal cats since 2018. We have Bengal kittens of both rare and traditional colors. All of them are active, 
                        affectionate, friendly with each other and cuddly with people. Our kittens grow up in love, and from an early age, they know how to respond to affection. 
                        Of course, the characters of Bengal kittens are different, but in general, they are human-oriented, sociable, and very smart.
                    </p>
                    <p>
                        If you decide to let a small tame leopard into your house, which will fill it with fun and love, you are taking on a great responsibility. 
                        Since we are responsible for those we have tamed, we care about where our kittens move!
                    </p>
                    <p>
                        All our kittens are purebred, healthy and socialized, brought up in love and affection.
                    </p>
                    <p>
                        We will be in touch with you before and after you take your furry friend home. Please be advised that we are interested in
                        making our graduated kittens happy. After all, they are not a toy but a living being that requires care and love.
                    </p>
                    <p>
                        Do you want to find a healthy, joyful and great companion for your home? Then welcome to our cattery.
                    </p>
                    <Link className='text-link' to='why-choose-junglebeauty'>
                        <h2 className='page-subheader'>So, why buy a Bengal Kitten from Junglebeauty Cattery?</h2>
                    </Link>
                </Col>
                <Col sm={3}>
                    <p>
                        Best videos of Junglebeauty Bengals Cattery!
                    </p>
                    <VideoColumn />
                </Col>
            </Row>
        </div>
    );
}

export default Home;