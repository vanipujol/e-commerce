/**
 * A custom hook for managing form state and handling form input changes.
 *
 * @param {Object} initialValues - The initial values of the form fields.
 * @returns {Array} An array containing the form values, handleChange function, and handleReset function.
 */

import {useState} from "react";

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    function handleReset() {
        setValues(initialValues);
    }

    return [values, handleChange, handleReset];
}
