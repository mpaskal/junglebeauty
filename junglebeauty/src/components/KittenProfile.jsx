import { Link } from "react-router-dom";
import { GetAllImages, GetCatFilepath, ConvertDate, GetReleaseDate, fileExists } from './Functions';
import ImageCarousel from "./ImageCarousel";
import './../App.css';

const KittenProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother, price } = cat;
    const filepath = GetCatFilepath(cat);
    const images = GetAllImages(GetCatFilepath(cat));
    const birthDate = ConvertDate(date);
    const releaseDate = GetReleaseDate(date);
    const currentDate = new Date();

    return (
        <div>
            <h3>{name} collar {sex == 'male' ? 'boy' : 'girl'}. Born {birthDate}.</h3>
            <p>Mother: <Link to='/queens' state={mother}>{mother}</Link></p>
            <p>Father: <Link to='/kings' state={father}>{father}</Link></p>
            <p>Date of release: {releaseDate <= currentDate ? 'ready to go!' : ConvertDate(releaseDate)}</p>
            {price ? <p>Price: ${price}</p> : ''}

            <ImageCarousel images={images} />
        </div>
    );
}

export default KittenProfile;