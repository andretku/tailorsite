import React, { useEffect } from 'react'

import styles from './BlogsPage.module.css'

import { Link } from 'react-router-dom'
import AllOurBlogs from '../../Components/OurBlogs/AllOurBlogs'

// For Components 


const BlogsPage = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <>
            <section className={styles.BlogsPage}>
                <div className={styles.BlogsPageContent}>
                    <h6>Our Blogs</h6>
                    <Link to={"/BlogsPage/AddNewBlog"}>Add New Blog Now</Link>
                </div>
            </section>


            {/* For Blogs */}


            <AllOurBlogs />

        </>
    )
}

export default BlogsPage