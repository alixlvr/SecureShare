"use client";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import axios from 'axios';


const SignupForm = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setMdp] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/api/users/signup', {
            nom,
            prenom,
            email,
            password,
          });
          console.log(response.data.message);
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh'}}>
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <div style={{ backgroundColor: '#0E1C37', padding: '1rem', borderRadius: '5px', margin: '-1rem' }}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                        type="text"
                        label="Nom"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(event) => setNom(event.target.value)}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff'} }}
                        />
                        <TextField
                        type="text"
                        label="Prénom"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(event) => setPrenom(event.target.value)}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff'} }}
                        />
                        <TextField
                        type="email"
                        label="Email"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(event) => setEmail(event.target.value)}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        />
                        <TextField
                        type="password"
                        label="Mot de passe"
                        required
                        fullWidth
                        margin="normal"
                        onChange={(event) => setMdp(event.target.value)}
                        InputLabelProps={{ style: { color: '#fff' } }}
                        InputProps={{ style: { color: '#fff' } }}
                        />
                        <Button type="submit" variant="contained" color="primary" margin="normal">
                            S'inscrire
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default SignupForm;