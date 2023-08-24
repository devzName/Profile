import dsa from "../assets/img/dsa.png"
import mongodb from "../assets/img/mongodb.png"
import typescript from "../assets/img/typescript.png"
import tailwind from "../assets/img/tailwind.ico"
import python from "../assets/img/python.ico"
import mysql from "../assets/img/mysql-icon.ico"
import bitbucket from "../assets/img/bitbucket.ico"
import { useEffect, useRef, useState } from "react"


const Skills = (props) => {
    const {t} = props
    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef(null)


    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting)
        },
        { rootMargin: "0px" })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>{t('lng_skill')}</h2>
                            <p>{t('lng_describe_skill_1')}<br/>{t('lng_describe_skill_2')}</p>
                            <div className="experience__container">
                                <main ref={ref}>
                                    <div className={`${isIntersecting === true ? "slide-in" : ""} experience__frontend`}>
                                        {/* <h3>Frontend Development</h3> */}
                                            <div className="experience__content">
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-html5"/> HTML</span>
                                                        <small className="text-light">Experienced</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-css3"/> CSS</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-javascript"/> JavaScript</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-bootstrap"/> Bootstrap 5</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><img src={tailwind} alt='tailwind'/> Tailwind CSS</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-react"/> React - NextJS</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><i className="bx bxl-redux"/> Redux</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                                <article className="experience__details">
                                                    <div>
                                                        <span><img src={typescript} alt='typescript'/> Typescript</span>
                                                        <small className="text-light">Intermediate</small>
                                                    </div>
                                                </article>
                                            </div>
                                    </div>
                                    <div className={`${isIntersecting === true ? "slide-in" : ""} experience__backend`}>
                                        {/* <h3>Backend Development</h3> */}
                                        <div className="experience__content">
                                            <article className="experience__details">
                                                <div>
                                                    <span><i className="bx bxl-nodejs"/> Node.JS</span>
                                                    <small className="text-light">Intermediate</small>

                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><img src={mongodb} alt='mongodb'/> MongoDB</span>
                                                    <small className="text-light">Intermediate</small>

                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><img src={mysql} alt='mysql'/> MySQL</span>
                                                    <small className="text-light">Intermediate</small>

                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><i className="bx bxl-git"/> Git</span>
                                                    <small className="text-light">Intermediate</small>
                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><img src={bitbucket} alt='bitbucket'/> Bitbucket</span>
                                                    <small className="text-light">Intermediate</small>
                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><img src={python} alt='python'/> Python</span>
                                                    <small className="text-light">Intermediate</small>
                                                </div>
                                            </article>
                                            <article className="experience__details">
                                                <div>
                                                    <span><img src={dsa} alt='dsa'/> Data Structures and Algorithms</span>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-img-left" src={colorSharp} alt="img" /> */}
        </section>
    )
}

export default Skills
