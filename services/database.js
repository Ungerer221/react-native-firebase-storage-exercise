import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, writeBatch } from "firebase/firestore";
import { db } from "../firebase";

// Create Item
export const createMemory = async (collectionName, item) => {
    try {
        // docRef - is reference to our newly cretaed document
        const docRef = await addDoc(collection(db, collectionName), item);
        console.log("Document written with ID: ", docRef.id);
        return true
    } catch (e) {
        console.error("Error adding document: ", e);
        return false
    }
};

// Get All Items
export const getAllIMemories = async (collectionName, sortBy, sortOrder, limit) => {
    try {
        var allItems = [];

        var q = query(collection(db, collectionName))
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            allItems.push({ id: doc.id, ...doc.data() })
        });

        return allItems

    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}