import {useState, useEffect} from "react";
import {JSON_API} from "../services/apiCakes.js";

export const useCategory = (Category) => {
    const [category, setCategory] = useState(null);

    useEffect(() => {
        // Filtering cakes based on the provided 'Category' value
        const filterCategory = JSON_API.cakes_available.filter((cake) => Category === cake.category);

        // If cakes matching the category are found, we update the 'category' state
        if (filterCategory) {
            setCategory(filterCategory);
        }
    }, [Category]);

    return category;
};