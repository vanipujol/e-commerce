import React from 'react';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <Container maxWidth={false} style={{ padding: 0 }}>
            <img
                src="/assets/footer-drip.jpg"
                alt="footer"
                style={{ width: '100%', objectFit: 'cover', maxHeight: '100vh', marginTop: '2rem' }}
            />
        </Container>
    );
};

export default Footer;