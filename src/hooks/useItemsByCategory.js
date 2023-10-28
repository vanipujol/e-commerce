/**
 * A custom hook for fetching a list of items from a Firestore database filtered by category.
 *
 * @param {string} category - The category by which to filter the items.
 * @returns {Object} An object containing the list of fetched items and loading state.
 */

import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import useIsLoading from "./useLoading";

export default function useItemsByCategory(category) {
    const [items, setItems] = useState([]);
    const {stopLoading, isLoading} = useIsLoading();

    useEffect(() => {
        const db = getFirestore();

        const q = query(
            collection(db, "items"),
            where("categoryId", "==", category)
        );

        getDocs(q)
            .then((snapshot) => {
                if (!snapshot.empty) {
                    setItems(
                        snapshot.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data(),
                            };
                        })
                    );
                }
            })
            .finally(() => [stopLoading()]);
    }, [category, stopLoading]);
    return {items, isLoading};
}