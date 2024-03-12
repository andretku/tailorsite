import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { NavLinks } from '../../Containers/NavLinks'

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <img src="/assets/logo.png" alt="Logo" />

                <div>
                    {NavLinks.map((item, index) => (
                        <Link className={styles.navLink} key={index} to={item.linkTo}>{item.linkText}</Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar