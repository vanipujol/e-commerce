import {useEffect, useState} from "react";
import {JSON_API} from "../services/apiCakes.js";

export const useCakesList = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        setCakes(JSON_API.cakes_available)
    }, []);

    return {
        cakes
    };
}