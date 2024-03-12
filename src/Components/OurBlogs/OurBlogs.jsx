import { useEffect, useState } from 'react'
import styles from './OurBlogs.module.css'
import { Link } from 'react-router-dom'
import Content from '../Content/Content'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'

const OurBlogs = () => {


    const [Blogs, setBlogs] = useState([])
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5555/Blogs').then((res) => {
            setBlogs(res.data.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [])





    return (
        <>


            {
                Loading ? <Spinner /> : (

                    <section className={styles.OurBlogs}>
                        <Content h6Text={"Our Blogs"} />

                        <div className={styles.Blogsrow}>
                            {
                                Blogs.slice(0, 2).map((Item) => (
                                    <div className={styles.BlogsBox} key={Item._id}>
                                        <img src={Item.BlogImgUrl} alt={Item.BlogTitle} />
                                        <div className={styles.BlogsBoxContent}>
                                            <h6>{Item.BlogTitle}</h6>
                                            <p>
                                                {Item.BlogIntro}
                                            </p>


                                            <Link to={`/BlogsPage/${Item._id}`} className={styles.LinkBtn}>Read Blog</Link>
                                        </div>
                                    </div>
                                ))
                            }







                            <div className={styles.BlogsBox}>
                                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_640.jpg" alt="" />
                                <div className={styles.BlogsBoxContent}>
                                    <h6>We Are Working on This Blog</h6>
                                    <p>This Blog is Coming Soon, Thanks For Your Patience!</p>
                                </div>
                            </div>








                        </div>

                    </section>
                )
            }




        </>
    )
}

export default OurBlogs