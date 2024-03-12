import styles from './Button.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const Button = ({ linkTo, linkText }) => {
    return (
        <>
            <Link to={linkTo} className={styles.btn}>{linkText}</Link>
        </>
    )
}

export default Button

Button.propTypes = {
    linkTo: PropTypes.string,
    linkText: PropTypes.string 
}