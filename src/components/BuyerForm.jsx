/**
 * React component for rendering a buyer information form.
 *
 * @param {Object} props - The component's props.
 * @param {function} props.onSubmit - The function to be called when the form is submitted.
 * @param {Object} props.values - An object containing the form field values.
 * @param {function} props.handleChange - The function to handle changes in form field values.
 * @returns {JSX.Element} The rendered buyer information form.
 */

import React from 'react';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {OutlinedInput} from "@mui/material";

function BuyerForm({onSubmit, values, handleChange}) {
    return (
        <form onSubmit={onSubmit} style={{maxWidth: '600px'}}>
            <div style={{marginBottom: '10px'}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="name">Nombre</InputLabel>
                    <OutlinedInput
                        style={{backgroundColor: 'white', width: '70%'}}
                        id="name"
                        label="Nombre"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{marginBottom: '10px'}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="lastName">Apellido</InputLabel>
                    <OutlinedInput
                        style={{backgroundColor: 'white', width: '70%'}}
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{marginBottom: '10px'}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="phone">Teléfono</InputLabel>
                    <OutlinedInput
                        style={{backgroundColor: 'white', width: '70%'}}
                        id="phone"
                        label="Teléfono"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{marginBottom: '10px'}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        style={{backgroundColor: 'white', width: '70%'}}
                        id="email"
                        label="Email"
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{marginBottom: '10px'}}>
                <FormControl style={{width: '100%'}}>
                    <InputLabel htmlFor="email2">Repita email por favor</InputLabel>
                    <OutlinedInput
                        style={{backgroundColor: 'white', width: '70%'}}
                        id="email2"
                        label="Repita email por favor"
                        name="email2"
                        type="text"
                        value={values.email2}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <Button
                variant="contained"
                style={{width: '70%', marginTop: '1rem', backgroundColor: '#be9397'}}
                type="submit"
            >
                Comprar
            </Button>
        </form>

    );
}

export default BuyerForm;
