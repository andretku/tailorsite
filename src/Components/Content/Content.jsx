import React from 'react'

import styles from './Content.module.css'

const Content = ({ h6Text }) => {
    return (
        <>
            <div className={styles.Content}>
                <h6>{h6Text}</h6>
            </div>
        </>
    )
}

export default Content