import React, { useEffect } from 'react'

import styles from './Suits&Office.module.css'

const SuitsOffice = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section className={styles.SuitsOffice}>

                <div className={styles.SuitsOfficeContent}>
                    <h6>Buy Suits For <br /> Your Office</h6>
                </div>

            </section>
        </>
    )
}

export default SuitsOffice