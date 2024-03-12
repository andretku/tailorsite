import React, { useState } from 'react'
import styles from './AddNewBlog.module.css'


import axios from 'axios'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'



const AddNewBlog = () => {

    const [BlogTitle, SetBlogTitle] = useState('')
    const [BlogImgUrl, SetBlogImgUrl] = useState('')
    const [BlogIntro, SetBlogIntro] = useState('')
    const [BlogDesc, SetBlogDesc] = useState('')
    const [Loading, setLoading] = useState(false)
    const Navigate = useNavigate()
    const { enqueueSnackbar } = useSnackbar()

    const SaveBlog = () => {

        const data = {
            BlogTitle, BlogImgUrl, BlogIntro, BlogDesc
        }

        setLoading(true)
            ;
        axios.post("http://localhost:5555/Blogs", data).then(() => {
            setLoading(false)
            enqueueSnackbar("New Blog Created", { variant: "success" })
            Navigate("/BlogsPage")
        }).catch((error) => {
            console.log(error)
            enqueueSnackbar("Something Went Wrong", { variant: "error" })
        })




    }

    return (
        <>

            <section className={styles.AddNewBlog}>
                <div className={styles.AddNewBlogContent}>
                    <h6>Add New Blog Now</h6>
                </div>
            </section>


            {/* Form For Adding New Blog */}
            <section className={styles.NewBlogForm}>

                <div className={styles.NewBlogFormContent}>
                    <h6>Add New Blog</h6>


                    <div className={styles.NewBlogFormBox}>
                        <input type="text" value={BlogTitle} onChange={(e) => SetBlogTitle(e.target.value)} placeholder='Enter Blog Title' />


                        <input type="text" value={BlogImgUrl} onChange={(e) => SetBlogImgUrl(e.target.value)} placeholder='Enter Blog Image URL' />


                        <textarea type="text" value={BlogIntro} onChange={(e) => SetBlogIntro(e.target.value)} placeholder='Enter Blog Intro' />


                        <textarea type="text" value={BlogDesc} onChange={(e) => SetBlogDesc(e.target.value)} placeholder='Enter Blog Description' />

                        <button className={styles.Btn} onClick={SaveBlog}>Save Blog Now</button>

                    </div>

                </div>

            </section>



        </>
    )
}

export default AddNewBlog