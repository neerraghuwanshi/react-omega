import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../css/Footer.module.css'


function Footer() {

    const {link, activeLink, omega, navLinksContainer, copyright, container} = styles

    return (
        <footer>
            <div className={container}>
                <div className={omega}>
                    Omega
                </div>
                <div className={navLinksContainer}>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/support'>
                        Support
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink} 
                        exact 
                        to='/pp'>
                        Privacy Policy
                    </NavLink>
                    <NavLink 
                        className={link} 
                        activeClassName={activeLink}
                        exact 
                        to='/tc'>
                        Terms and Conditions
                    </NavLink>
                </div>
                <div className={copyright}>
                    &#169; 2020 UXTheme, &nbsp;All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer