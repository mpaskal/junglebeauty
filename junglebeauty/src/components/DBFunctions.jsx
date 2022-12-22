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
            }).then((cats) => {
                return cats;
            });
    };

    useEffect(()=>{
        fetchCats();
    }, []);
}

export function InsertCat(table, cat) {
    const { name, collar, colour, sex, adj, date, cattery, location, mother, father } = cat;
    var fields = {};

    if (!name) {
        name = collar;
    }

    Object.keys(cat).map((key) => {
        fields.key = cat[key];
    });

    console.log(fields);

    const addCat = async () => {
        await addDoc(collection(db, table), {
            name: name
        })
    };

    useEffect(()=>{
        addCat();
    }, []);
}