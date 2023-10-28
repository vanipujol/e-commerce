import React from 'react';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

/**
 * React component for rendering a footer section with social media icons.
 *
 * This component displays Instagram and WhatsApp icons as clickable links.
 *
 * @returns {JSX.Element} The rendered footer with social media icons.
 */
function Footer() {
    const instagramURL = "https://www.instagram.com/reposteria.elda";
    const whatsappURL = "https://w.app/reposteriaelda";

    const handleInstagramClick = () => {
        window.open(instagramURL, '_blank');
    };

    const handleWhatsappURL = () => {
        window.open(whatsappURL, '_blank');
    };


    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '4em auto',}}>
            <IconButton className="rosedark-color" onClick={handleInstagramClick}>
                <InstagramIcon style={{fontSize: 35}}/>
            </IconButton>
            <IconButton className="rosedark-color" onClick={handleWhatsappURL}>
                <WhatsAppIcon style={{fontSize: 35}}/>
            </IconButton>
        </div>
    );
}

export default Footer;