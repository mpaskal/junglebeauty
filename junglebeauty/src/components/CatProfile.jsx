import Carousel from 'react-multi-carousel';
import { Link, NavLink } from "react-router-dom";
import { GetAllImages, GetCatFilepath, ConvertDate, fileExists } from './Functions';
import ParentProfile from './ParentProfile';
import './../App.css';

const CatProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;
    const images = [];
    const filepath = GetCatFilepath(cat);

    var dateString;

    if (date) {
        dateString = ConvertDate(date);
    }

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
            <h3>{name} collar {sex == 'male' ? 'boy' : 'girl'}. {dateString}</h3>
            <p>Mother: <Link to='/queens' state={mother}>{mother}</Link></p>
            <p>Father: <Link to='/kings' state={father}>{father}</Link></p>

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
        </div>
    );
}

export default CatProfile;