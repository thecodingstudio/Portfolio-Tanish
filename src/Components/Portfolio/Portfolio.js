import React from "react";

import './Portfolio.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="portfolio">
            <div className="portfolio-main">
                <div data-aos="fade-right" className="port-title">
                    <div className="port-inner">
                        <span className="text">
                            My Project
                        </span>
                        <span className="line">
                        </span>
                    </div>
                    <h2 className="sevices-name">
                        My Portfolio
                    </h2>
                </div>
                <div className="portfolio-body">
                    <div data-aos="fade-left" className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655204898/V6_emlz2v.jpg" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                CERV APP
                            </div>
                            <div className="descrption">
                                CERV APP is an online catering service app where<br />
                                people can order their selected dishes and caterer. <br />
                            </div>
                            <a href="https://github.com/tanish7800/CERV" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                GOALS APP
                            </div>
                            <div className="descrption">
                                In this project, I have worked with the basics of React Native, <br />
                                building a general app that implements those basic functions using  <br />
                                expo-cli and Visual Studio Code.
                            </div>
                            <a href="https://github.com/tanish7800/goals-app" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655285931/t1_hy9re0.jpg" alt="icon" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project2">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655285954/t3_1_csycls.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                GUESS-NUMBER
                            </div>
                            <div className="descrption">
                                Guess a Number is a mini-project,It consists of a mobile app <br />
                                that receives a user number input. Then, the computer will try to <br />
                                guess which number that was, based on the user's hint.
                            </div>
                            <a href="https://github.com/tanish7800/guess-number" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                FOOTBALLERS-APP
                            </div>
                            <div className="descrption">
                                It is an E-Commerce Clothing Application where  people can <br />
                                purchase a product Admin can add or edit store and product’s <br />
                                category and Store can add or edit products and blogs.
                            </div>
                            <a href="https://github.com/tanish7800/footballers-app" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655285943/t2_1_m9dyfo.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

