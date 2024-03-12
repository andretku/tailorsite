import styles from './Home.module.css'
import Button from '../../Components/Button/Button'
import AboutUs from '../../Components/Aboutus/Aboutus'
import WhyChooseus from '../../Components/WhyChooseus/WhyChooseus'
import SecondHeader from '../../Components/SecondHeader/SecondHeader'
import OurBlogs from '../../Components/OurBlogs/OurBlogs'


const Home = () => {

    return (
        <>
            <section className={styles.Home}>
                <div className={styles.HomeContent}>
                    <h4>Vector Style</h4>
                    <h3>Непринужденная элегантность <br /> для каждого события!</h3>
                    <p className='content'>
                        Побалуйте себя органичным сочетанием стиля и изысканности с нашей коллекцией, предлагающей легкую элегантность на любой случай! Поднимите свой имидж и примите изысканную моду, гарантируя, что вы будете безупречно одеты в каждый момент, от случайных встреч до официальных мероприятий. Откройте для себя гардероб, который легко дополнит ваш образ жизни, ярко заявив о себе, при этом не говоря ни слова.
                    </p>
                    <Button linkText={"Подробнее"} linkTo={"/blog"} />
                </div>

                <div>
                    <img src="/assets/HomeMain.png" alt="HomeMain" />
                </div>

            </section>

            <AboutUs />
            <WhyChooseus />
            <SecondHeader />
            <OurBlogs />
        </>
    )
}

export default Home