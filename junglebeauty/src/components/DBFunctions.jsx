import { useEffect, useState } from 'react';
import { collection, doc, query, where, getDocs, addDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export async function QueryCats(table, predicate = []) {
    const cats = [];
    const q = query(collection(db, table), where(predicate[0], predicate[1], predicate[2]));

    const docRefs = await getDocs(q);

    docRefs.forEach(doc => {
        cats.push({...doc.data(), id: doc.id});
    })
    
    /*
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

    console.log(cats);
    */
    return cats;
}

export function InsertCat(table, cat) {
    const { name, collar, colour, sex, adj, date, cattery, location, mother, father } = cat;
    var id = name;

    if (date) {
        id = id + '.' + date;
    }

    const addCat = async () => {
        const docRef = doc(db, table, id);

        await setDoc(docRef, {});
    
        Object.keys(cat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        });
    };

    useEffect(()=>{
        addCat();
    }, []);
}