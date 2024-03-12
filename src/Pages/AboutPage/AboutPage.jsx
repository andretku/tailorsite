import React, { useEffect } from 'react'

import styles from './AboutPage.module.css'


// For Components
import Aboutus from '../../Components/Aboutus/Aboutus'
import SecondHeader from '../../Components/SecondHeader/SecondHeader'
import WhyChooseus from '../../Components/WhyChooseus/WhyChooseus'

const AboutPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section className={styles.AboutPage}>
                <div className={styles.AboutPageContent}>
                    <h6>About us</h6>
                </div>
            </section>

            <Aboutus />
            <SecondHeader />
            <WhyChooseus />

        </>
    )
}

export default AboutPage