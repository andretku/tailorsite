import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from './ViewBlog.module.css'

import { useParams } from 'react-router-dom'

const ViewBlog = () => {

    const [Blog, setBlog] = useState([])
    const [Loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5555/Blogs/${id}`).then((res) => {
            setBlog(res.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])

    return (
        <>
            {/* <h1>Hey Blogs</h1> */}
            <section className={styles.ViewBlogHome}></section>

            {/* Main Part  */}
            <section className={styles.ViewBlog}>

                <div className={styles.ViewBlogRow}>

                    <div>
                        <img src={Blog.BlogImgUrl} alt={Blog.BlogTitle} />
                    </div>

                    <div className={styles.BlogContent}>
                        <h6>{Blog.BlogTitle}</h6>
                        <p className={styles.BlogIntro}>{Blog.BlogIntro}</p>
                        <p className={styles.BlogDesc}>{Blog.BlogDesc}</p>

                        <div>
                            <span>Blog Created At : <span>{new Date(Blog.createdAt).toUTCString().slice(4, 16)}</span></span>
                            <span>  Blog Created At : <span>{new Date(Blog.updatedAt).toUTCString().slice(4, 16)}</span></span>

                        </div>

                    </div>


                </div>



            </section>

        </>
    )
}

export default ViewBlog