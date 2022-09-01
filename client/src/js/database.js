import { openDB } from 'idb'
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    //we are creating a new database named 'contact_db' which will be using version 1 of the database.
    openDB('contact_db', 1, {
        // add our database scheme if ti has not already been initialized. 
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists');
                return;
            }
            // create a new object store for the data and give it a key name of 'id' which will increment automatically
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            console.log('contacts store created');
        }
    })
}