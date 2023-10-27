import React from 'react';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { OutlinedInput } from "@mui/material";

function BuyerForm({ onSubmit, values, handleChange }) {
    return (
        <form onSubmit={onSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel htmlFor="name">Nombre</InputLabel>
                    <OutlinedInput
                        id="name"
                        label="Nombre"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel htmlFor="lastName">Apellido</InputLabel>
                    <OutlinedInput
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel htmlFor="phone">Teléfono</InputLabel>
                    <OutlinedInput
                        id="phone"
                        label="Teléfono"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput
                        id="email"
                        label="Email"
                        name="email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                    />
                </FormControl>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <FormControl>
                    <InputLabel htmlFor="email2">Repita email por favor</InputLabel>
                    <OutlinedInput
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
                style={{ width: '100%', marginTop: '20px', backgroundColor: '#be9397' }}
                type="submit"
            >
                Comprar
            </Button>
        </form>
    );
}

export default BuyerForm;
