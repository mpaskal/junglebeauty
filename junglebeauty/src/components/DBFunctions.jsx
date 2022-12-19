import { useEffect, useState } from 'react';
import { collection, query, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function QueryCats(table, predicate) {
    const [cats, setCats] = useState();
    const attributes = {name:'', collar:'', colour:'', date:'', adj:'', sex:'', father:'', mother:''};
    const q = query(collection(db, table));
    
    const fetchCats = async () => {
        await getDocs(collection(db, table))
            .then((querySnapshot)=>{
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(), id:doc.id
                }))
                setCats(fetchedData);
            })
    };

    useEffect(()=>{
        fetchCats();
    }, []);

    console.log('????');
    console.log(cats);

    return cats;
}

export function InsertCat(table, cat) {
    const { name, colour, sex, adj, date, cattery, location, mother, father } = cat;

    const addCat = async () => {
        await addDoc(collection(db, table), {
            name: name,
            colour: colour,
            sex: sex,
            adj: adj,
            date: date,
            cattery: cattery,
            location: location,
            mother: mother,
            father: father
       })
    };

    useEffect(()=>{
        addCat();
    }, []);
}