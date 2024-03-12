import React from 'react'

import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <>
            <div className={styles.SpinnerParent}>
                <div className={styles.Spinner}></div>
            </div>
        </>
    )
}

export default Spinner