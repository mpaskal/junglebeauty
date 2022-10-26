import './../../App.css';

const CatProfile= ( {cat} ) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default CatProfile;