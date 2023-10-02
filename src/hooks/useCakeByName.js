import { useState, useEffect } from "react";
import { JSON_API } from "../services/apiCakes.js";

export const useCakeByName = (cakeName) => {
    const [cake, setCake] = useState(null);

    useEffect(() => {
        const foundCake = JSON_API.cakes_available.find((cakeItem) => cakeName === cakeItem.name);
        if (foundCake) {
            setCake(foundCake);
        }
    }, [cakeName]);

    return cake;
};
