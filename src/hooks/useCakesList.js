import {useEffect, useState} from "react";
import {JSON_API} from "../services/apiCakes.js";

export const useCakesList = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        // Setting the 'cakes' state to the list of available cakes from the JSON API mock
        setCakes(JSON_API.cakes_available)
    }, []);

    return {
        cakes
    };
}