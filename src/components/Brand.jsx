/**
 * React component for rendering the brand logo as a clickable link.
 *
 * @returns {JSX.Element} The rendered brand component.
 */

import {NavLink} from "react-router-dom";
import * as React from "react";

const Brand = () => {
    return (
        <NavLink key="/" className={`nav-link`} to={`/`}>
            <img style={{marginTop: '0.2em'}} src="/assets/brand.png" width={100} height={100} alt="Repostería Elda"/>
        </NavLink>
    );
};

export default Brand;