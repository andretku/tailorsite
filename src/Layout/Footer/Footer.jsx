import React from 'react'

import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

// For Icons
import { FaAnglesRight } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const CompanyLinks = [
    {
        LinkText: "Privacy",
        LinkTo: "/",
    }, {
        LinkText: "T&C",
        LinkTo: "/",
    }, {
        LinkText: "Help Center",
        LinkTo: "/",
    }, {
        LinkText: "Contact us",
        LinkTo: "/",
    },
]


const ImportantLinks = [
    {
        LinkText: "Home",
        LinkTo: "/",
    }, {
        LinkText: "About",
        LinkTo: "/",
    }, {
        LinkText: "Blogs",
        LinkTo: "/",
    }, {
        LinkText: "Buy Now",
        LinkTo: "/",
    },
]




const Footer = () => {
    return (
        <>

            <section className={styles.Footer}>

                <footer>
                    <div>
                        <img src="/assets/logoMain.png" alt="" />
                    </div>

                    <div className={styles.LinksMain}>
                        {
                            CompanyLinks.map(({ LinkTo, LinkText }, index) => (
                                <Link key={index} to={LinkTo}><FaAnglesRight /> {LinkText}</Link>
                            ))
                        }
                    </div>

                    <div className={styles.LinksMain}>
                        {
                            ImportantLinks.map(({ LinkTo, LinkText }, index) => (
                                <Link key={index} to={LinkTo}><FaAnglesRight /> {LinkText}</Link>
                            ))
                        }
                    </div>

                </footer>

                {/* For Social Icons */}
                <div className={styles.SocialIcons}>
                    <div>
                        <h6>&copy; All Right Reserved</h6>
                    </div>

                    <div>
                        <h6>&copy; Easy Coding Tutorial</h6>
                    </div>

                    <div>
                        <Link to={'https://www.instagram.com/easycodingtutorial/'} target='_blank'>
                            <IoLogoInstagram />
                        </Link>

                        <Link to={'https://github.com/EasyCodingTutorial'} target='_blank'>
                            <FaGithub />
                        </Link>

                        <Link to={'https://www.linkedin.com/in/amanyadaveasycodingtutorial/'} target='_blank'>
                            <FaLinkedin />
                        </Link>


                    </div>


                </div>


            </section>

        </>
    )
}

export default Footer