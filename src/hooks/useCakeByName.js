import {useState, useEffect} from "react";
import {JSON_API} from "../services/apiCakes.js";

export const useCakeByName = (cakeName) => {
    const [cake, setCake] = useState(null);

    useEffect(() => {
        // Find the Cake name in the 'cakes_available' array from the JSON mock
        const foundCake = JSON_API.cakes_available.find((cakeItem) => cakeName === cakeItem.name);

        if (foundCake) {
            setCake(foundCake);
        }
    }, [cakeName]);

    return cake;
};
