import { getDownloadURL, ref, uploadBytes, getMetadata } from "firebase/storage";
import { storage } from "../firebase";
import { getStorage, } from "firebase/storage";
import { createMemory } from "./database";


// TODO: Upload Image to Buckets
export const handleLoadOfImage = async (uri, fileName) => {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        }
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("network request failed"));
        }
        xhr.responseType = "blob";
        xhr.open("GET", uri, true)
        xhr.send(null);
    })

    // only refers to where it should be stored and what it should be called
    const imageRef = ref(storage, fileName) // the blob is whatever we wnat to call the image 

    const uploadResult = await uploadBytes(imageRef, blob)

    blob.close()

    console.log(await getDownloadURL(imageRef)) // <-- return the url of the image on firebase

    const savedMemory = await createMemory("Images", { name: fileName, link: await getDownloadURL(imageRef) })
}