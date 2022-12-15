import { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
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
    }

    useEffect(()=>{
        fetchCats();
    }, [])

/*
    querySnapshot.forEach((doc) => {
        if (table == 'kittens') {
            attributes.name = doc.collar + ' collar';
            if (doc.sex == 'male') {
                attributes.name += ' boy';
            } else {
                attributes.name += ' girl';
            }
        } else {
            attributes.name = doc.id;
        }
        attributes.colour = doc.colour;
        console.log('look:');
        console.log(doc.id);
        console.log(doc.colour);
        attributes.date = doc.date;
        attributes.adj = doc.adj;
        attributes.sex = doc.sex;
        attributes.father = doc.father;
        attributes.mother = doc.mother;
        cats.push(attributes);
    });
    */

    return cats;
}