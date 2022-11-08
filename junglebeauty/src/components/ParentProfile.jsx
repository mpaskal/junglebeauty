import Carousel from 'react-multi-carousel';
import CatList from './CatList'
import { GetAllImages, GetCatFilepath, fileExists } from './Functions';
import './../App.css';

const ParentProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date } = cat;
    const images = [];
    const filepath = GetCatFilepath(cat);
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
                {sex == 'male'
                    ? ``
                    : ``
                }
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
                        <img className='cat-img' key={image} src={image}/>
                    )
                })}
            </Carousel>

            {sex == 'male'
                ? <CatCardCarousel cats={CatList.filter(child => child.father == name)}/>
                : <CatCardCarousel cats={CatList.filter(child => child.mother == name)}/>
            }
        </div>
    );
}

export default ParentProfile;