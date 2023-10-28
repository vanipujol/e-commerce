import {doc, getDoc, getFirestore} from "firebase/firestore";
import {useEffect, useState} from "react";
import useIsLoading from "./useLoading";

/**
 * A custom hook for fetching a single item by its ID from a Firestore database.
 *
 * @param {string} id - The ID of the item to fetch.
 * @returns {Object} An object containing the fetched item and loading state.
 */
export default function useItemById(id) {
    const [item, setItem] = useState(null);
    const {stopLoading, isLoading} = useIsLoading();

    useEffect(() => {
        const db = getFirestore();

        const itemRef = doc(db, "items", id);
        getDoc(itemRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                } else {
                    console.log("No existe el documento");
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                stopLoading();
            });
    }, [id, stopLoading]);

    return {
        item,
        isLoading,
    };
}