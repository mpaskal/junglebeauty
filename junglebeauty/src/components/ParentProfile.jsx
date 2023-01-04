import Carousel from 'react-multi-carousel';
import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import CatCardCarousel from './CatCardCarousel';
import { GetAllImages, GetCatFilepath, GetCatDescription, fileExists } from './Functions';
import { QueryCats } from './DBFunctions';
import './../App.css';

const ParentProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date } = cat;
    const [kittens, setKittens] = useState([]);
    const images = [];
    const filepath = GetCatFilepath(cat);

    var description = GetCatDescription(cat);
    var availableKittens;
    var graduatedKittens;

    const getCats = async () => {
        const kittens = await QueryCats('kittens', [sex == 'male' ? 'father' : 'mother', '==', name]);
        setKittens(kittens);
      }
    
      useEffect(() => {
        getCats();
    
        return () => {};
      }, [])

    availableKittens = kittens.filter(kitten => kitten.status = 'available');
    graduatedKittens = kittens.filter(kitten => kitten.status = 'graduated');

    //const images = GetAllImages(require.context(`/assets/${type}s/${date}/${name}`, false, /\.(png|jpe?g|svg)$/));
    
    /*
    var i = 0;
    while (fileExists(filepath + i + '.png')) {
        images.push(filepath + i + '.png');
        i++;
    }
    */

    for (let i = 0; i < 7; i++) {
        images.push(filepath + i + '.png');
    }

    return (
        <div>
            <div>
                <h3>{description}</h3>
            </div>

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
                {images.map((image) => {
                    return (
                        <img className='cat-img' key={image} src={image} alt={name}/>
                    )
                })}
            </Carousel>

            <Accordion className='accordion' defaultActiveKey='0' alwaysOpen>
                {availableKittens.length > 0
                    ?
                        <Accordion.Item className='accordion-item' eventKey='0'>
                            <Accordion.Header className='accordion-header'>
                                {name}'s available kittens:
                            </Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <CatCardCarousel cats={availableKittens}/>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    :
                    ''
                }
                {graduatedKittens.length > 0
                    ?
                        <Accordion.Item className='accordion-item' eventKey='1'>
                            <Accordion.Header className='accordion-header'>
                                {name}'s graduated kittens:
                            </Accordion.Header>
                            <Accordion.Body>
                                <CatCardCarousel cats={graduatedKittens}/>
                            </Accordion.Body>
                        </Accordion.Item>
                    :
                    ''
                }
              
                
            </Accordion>
        </div>
    );
}

export default ParentProfile;