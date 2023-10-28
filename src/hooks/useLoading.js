/**
 * A custom hook for managing loading state in components.
 *
 * @returns {Object} An object containing the loading state and functions to start and stop loading.
 */

import {useState} from "react";

export default function useIsLoading() {
    const [isLoading, setIsLoading] = useState(true);

    const startLoading = () => setIsLoading(true);

    const stopLoading = () => setIsLoading(false);

    return {
        isLoading,
        startLoading,
        stopLoading,
    };
}