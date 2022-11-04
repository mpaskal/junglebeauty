import { Carousel } from 'react-bootstrap';
import { GetAllImages, GetCatFilepath, fileExists } from '../Functions';
import './../../App.css';

const CatProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;
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
            <h3>{name} collar {sex == 'male' ? 'boy' : 'girl'}. {date}</h3>
            <p>Mother: {mother}</p>
            <p>Father: {father}</p>
            <Carousel>
                {images.map((image) => {
                    return (
                        <Carousel.Item key={image}>
                            <img className='cat-img' src={image}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
}

export default CatProfile;