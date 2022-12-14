import { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import CatCardCarousel from './CatCardCarousel';
import ImageCarousel from './ImageCarousel';
import { GetAllImages, GetCatDescription, fileExists } from './Functions';
import { QueryCats } from './DBFunctions';
import './../App.css';

const ParentProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date } = cat;
    const [kittens, setKittens] = useState([]);
    const images = GetAllImages(cat);

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

    return (
        <div>
            <div>
                <h3>{description}</h3>
            </div>

            <ImageCarousel images={images} />

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