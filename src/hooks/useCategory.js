import { useState, useEffect } from "react";
import { JSON_API } from "../services/apiCakes.js";

export const useCategory = (Category) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        const filterCategory = JSON_API.cakes_available.filter((cake) => Category === cake.category);
        if (filterCategory) {
            setCategory(filterCategory);
        }
    }, [Category]);

    return category;
};