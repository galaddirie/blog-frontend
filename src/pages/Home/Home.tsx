import './home.css'
import React, { Component, useEffect, useState } from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FeaturedPosts } from '../../components/Posts/Post';
import { ReactComponent as YourSvg } from './logoeyes.svg';
import { Link } from 'react-router-dom';
import { compile, morph } from 'svg-path-morph'

interface AnimatedSVGProps {
    id: string
    paths: {
        topLeft: string
        topRight: string
        botLeft: string
        botRight: string
    }


}

function AnimatedSVG({ }: AnimatedSVGProps) {

}

function SVGContainer() {
    const paths = {
        topLeft: "M1 113C7.83333 132.667 4 188 50.5 189C76.9939 189.57 102.055 148.324 126.555 138.324C153.489 127.331 149 -56.5 67 18.5C-15 93.5 5.5 34 15.0001 29C21 21.5 38 18.5 43.5 34.9999C30.5 40.5 14 39.5 8.99999 32.5C3.99999 21 -0.0124836 4.00012 26.5553 6.32433C76.5 10.6936 40.736 34.508 29 64.5C20 87.5 47 78.5 56.5 78.5C64.1 78.5 69.1667 85.6666 70.5 87.5M21 113C25.1667 111.5 33.3 102.2 40.5 107C44 109.333 48.0746 107.606 50.5 107C54.5 106 56.5 111.5 72.5 116.5C85.3 120.5 87 121.333 87.5 120.5C76 132.833 40.5 139.5 20.5 115C29 118.333 51.5 121.5 90 120.5M80 34.9999C91.5 18.5 113 18 128 39C121.5 40.5 98 45 80 34.9999Z",
        topRight: "M25 130.5C37 139 42 174 80 178.5C106.316 181.616 119 171 120.5 169.5C139.182 150.819 143.353 -87.9039 66.7648 37.4225C28.2648 100.422 5.50001 70.5001 14 50.0001C17.5 40.0001 40 26.5001 53.5 51.0001C38 55.5001 22.5 57.0001 10.7647 50.9222C-15.8336 37.1465 19.522 13.9678 46.0781 16.4222C94.7649 20.9222 81.8113 46.4215 100 73C113.687 93 86.3123 89.1578 83.5 90C74.1999 92.7853 73 91 72 89M50 127.5C55 127.5 76 114 80 113C91.1566 110.211 91.5 117 93.5 115.5C95.5 114 97.5 111.771 103 113C106.5 113.782 120 128.333 120.5 127.5C119.5 131.5 78.5 141 48.5 126.5C60.4997 133.5 80.5 112 123 128.5M90.7649 48.0001C95.2649 38.5001 120.928 21.5001 127.428 51.0001C120 53.0001 111.5 54.0001 90.7649 48.0001Z",
        botLeft: "M39.5 134.5C51.5 143 39.5 171.5 77.5 176C103.816 179.116 110 142 134.5 132C161.433 121.007 172.105 -67.395 60 27.5C10 69.8243 -4.49997 40.5 5.00007 35.5C11 30 25 32 34.5 39C21.5001 49 9.99998 44.5 7.00002 36C2.00002 24.5 -8.49999 11.9999 18 14.9999C44.5 17.9999 39.3478 59.5328 30.5 90.5C23.5 115 48 106.5 57.5554 102.5C66.5107 98.7512 68.1667 103.667 69.5 105.5M41.5 118.5C46.5 118.5 54.5554 122 57.5554 124C59.8054 125.5 64.5 124.5 66.5 123C68.5 121.5 75 121.271 80.5 122.5C84 123.282 99 121.833 99.5 121C92.5 134 49 154 42 119.5C52.5 128 61 133 103 120M75.5 38C82.5554 37 105.5 38 123.5 31.5C116.5 44.5 91.5 60.5 75.5 38Z",
        botRight: "M23.0001 152.5C35.0001 161 37.0001 191.5 75.0001 196C101.316 199.116 99.5 169 114 149.5C131.358 126.156 142.089 -85.3262 65.4999 40.0001C26.9999 103 -10.5002 60.4999 11.4998 49.5004C17.4998 44.0004 42.5001 47.0004 53 49.5004C41.5501 66.4999 20.4999 60.76 9.49985 53.4999C-15.5001 36.9999 18.2571 16.5455 44.8132 18.9999C93.5 23.4999 84.3487 70.6738 96.5 100.5C107.5 127.5 70.5759 110.924 68.5 113C67 114.5 67.5 115 67.5 116.5M41 139C46 139 57.5 140 61.5 139C72.6566 136.211 75.5 141.5 77.5 140C79.5 138.5 81.5 137.771 87 139C90.5 139.782 105.5 132.833 106 132C98.5 157.5 70.5 166.5 42 139C69.5 140 74 157 107.5 131M97.4998 49.5001C106.313 42.0001 115.5 46.5 133.5 40C126.5 53 117 69.5001 97.4998 49.5001Z",
    }
    const compiled = compile([paths.topLeft, paths.topRight, paths.botLeft, paths.botRight])
    const [morphed, setMorphed] = React.useState('M12.1119 18.4379C18.4452 12.6046 35.8039 3.28955 48.1119 18.4379C54.6119 26.4379 4.11187 26.4379 2.11187 23.4379C-0.388129 18.6046 -0.28813 7.63793 20.1119 2.43793C45.6119 -4.06207 55.1118 13.438 55.1118 15.9379C55.1118 18.4379 51.5573 35.4337 48.1119 50.9379C46.1118 59.9379 46.1118 64.9379 49.6118 63.9379C50.9451 62.7712 53.9118 60.6379 55.1118 61.4379C56.6118 62.4379 58.1118 67.4379 60.6118 66.4379C63.1118 65.4379 65.1118 59.4379 67.1118 60.4379C69.1118 61.4379 71.6118 64.9379 73.1118 63.9379C74.6118 62.9379 75.6118 61.4379 75.6118 56.4379C75.6118 52.4379 72.2785 27.7712 70.6118 15.9379C70.9451 10.9379 75.9118 1.43787 93.1118 3.43787C110.312 5.43787 113.945 12.6046 113.612 15.9379C113.945 19.7712 110.712 27.2379 95.1118 26.4379C79.5118 25.6379 76.9451 21.1045 77.6118 18.9379C78.6118 16.2712 82.7118 11.1379 91.1118 11.9379C101.612 12.9379 107.112 17.9379 110.612 26.4379C113.412 33.2379 111.778 54.9379 110.612 64.9379C109.945 71.1045 104.212 84.1379 86.6118 86.9379C84.96 87.2007 83.2894 87.4303 81.6118 87.6299M81.6118 87.6299C65.4141 89.5576 48.559 88.693 41.6118 87.9379C42.2785 84.6045 45.1118 77.9379 51.1118 77.9379C58.6118 77.9379 57.1118 81.9379 61.1118 81.9379C65.1118 81.9379 67.1118 77.9379 71.6118 77.9379C76.1118 77.9379 82.1118 83.822 81.6118 87.6299ZM81.6118 87.6299C81.6118 91.2326 77.7204 100.961 61.1118 101.938C52.6118 102.438 45.2785 98.1045 47.6118 94.4379C49.2785 92.7712 53.3118 91.5379 56.1118 99.9379C58.9118 108.338 61.1118 120.438 61.1118 125.938C61.1118 136.938 61.1118 159.738 61.1118 162.938')



    const cauluateWeights = (e) => {
        const dist = (x1, y1, x2, y2) => {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
        }
        const bounds = e.target.getBoundingClientRect()
        let x = e.clientX / window.innerWidth
        let y = e.clientY / window.innerHeight
        const clamp = (value, min, max) => {
            return Math.min(Math.max(value, min), max)
        }


        if (x < 0 || x > 1 || y < 0 || y > 1) {
            x = 0
            y = 0
        }

        const distToMiddle = Math.sqrt(2) / 2

        const topLeftPct = 1 - clamp(dist(x, y, 0, 0) / distToMiddle, 0, 1)
        const topRightPct = 1 - clamp(dist(x, y, 1, 0) / distToMiddle, 0, 1)
        const botLeftPct = 1 - clamp(dist(x, y, 0, 1) / distToMiddle, 0, 1)
        const botRightPct = 1 - clamp(dist(x, y, 1, 1) / distToMiddle, 0, 1)


        return [topLeftPct, topRightPct, botLeftPct, botRightPct]

    }

    const handleMouseMove = (e) => {
        const weights = cauluateWeights(e)
        setMorphed(morph(compiled, weights))
        console.log(weights)
        return weights
    }
    useEffect(() => {

        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])



    return (
        <div id="figures">
            <div id="result">
                <svg width="115" height="163" viewBox="0 0 115 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <path id="morphed" d="M12.1119 18.4379C18.4452 12.6046 35.8039 3.28955 48.1119 18.4379C54.6119 26.4379 4.11187 26.4379 2.11187 23.4379C-0.388129 18.6046 -0.28813 7.63793 20.1119 2.43793C45.6119 -4.06207 55.1118 13.438 55.1118 15.9379C55.1118 18.4379 51.5573 35.4337 48.1119 50.9379C46.1118 59.9379 46.1118 64.9379 49.6118 63.9379C50.9451 62.7712 53.9118 60.6379 55.1118 61.4379C56.6118 62.4379 58.1118 67.4379 60.6118 66.4379C63.1118 65.4379 65.1118 59.4379 67.1118 60.4379C69.1118 61.4379 71.6118 64.9379 73.1118 63.9379C74.6118 62.9379 75.6118 61.4379 75.6118 56.4379C75.6118 52.4379 72.2785 27.7712 70.6118 15.9379C70.9451 10.9379 75.9118 1.43787 93.1118 3.43787C110.312 5.43787 113.945 12.6046 113.612 15.9379C113.945 19.7712 110.712 27.2379 95.1118 26.4379C79.5118 25.6379 76.9451 21.1045 77.6118 18.9379C78.6118 16.2712 82.7118 11.1379 91.1118 11.9379C101.612 12.9379 107.112 17.9379 110.612 26.4379C113.412 33.2379 111.778 54.9379 110.612 64.9379C109.945 71.1045 104.212 84.1379 86.6118 86.9379C84.96 87.2007 83.2894 87.4303 81.6118 87.6299M81.6118 87.6299C65.4141 89.5576 48.559 88.693 41.6118 87.9379C42.2785 84.6045 45.1118 77.9379 51.1118 77.9379C58.6118 77.9379 57.1118 81.9379 61.1118 81.9379C65.1118 81.9379 67.1118 77.9379 71.6118 77.9379C76.1118 77.9379 82.1118 83.822 81.6118 87.6299ZM81.6118 87.6299C81.6118 91.2326 77.7204 100.961 61.1118 101.938C52.6118 102.438 45.2785 98.1045 47.6118 94.4379C49.2785 92.7712 53.3118 91.5379 56.1118 99.9379C58.9118 108.338 61.1118 120.438 61.1118 125.938C61.1118 136.938 61.1118 159.738 61.1118 162.938" stroke="black" /> */}
                    <path id='morphed' d={morphed} stroke="#FF2867" stroke-width="5" />
                    <path id='morphed' d={morphed} stroke="black" stroke-width="1" transform="translate(5,0)" />
                </svg>

            </div>
        </div>
    )
}

function HeroLogo() {
    // useEffect(() => {

    //     var Rx = 50,
    //         Ry = 35,
    //         eyeLeft = document.querySelector('#l-iris'),
    //         eyeRight = document.querySelector('#r-iris'),

    //         eyeLeftPos = {
    //             x: parseInt(eyeLeft.getAttribute('cx')),
    //             y: parseInt(eyeLeft.getAttribute('cy'))
    //         },
    //         eyeRightPos = {
    //             x: parseInt(eyeRight.getAttribute('cx')),
    //             y: parseInt(eyeRight.getAttribute('cy'))
    //         },
    //         restL = eyeLeftPos,
    //         restR = eyeRightPos,
    //         midX = window.innerWidth >> 1,
    //         midY = window.innerHeight >> 1,
    //         mouseX = 0,
    //         mouseY = 0,
    //         maxDist = 50;

    //     var distanceBetween = function (x1, y1, x2, y2) {
    //         var dx = x2 - x1,
    //             dy = y2 - y1;

    //         return Math.sqrt(dx * dx + dy * dy);
    //     }

    //     var mouseMoveHandler = function (e) {
    //         mouseX = e.clientX || e.x;
    //         mouseY = e.clientY || e.y;

    //         var mouseDist = distanceBetween(midX, midY, mouseX, mouseY),
    //             applyRx = Rx * (mouseDist / maxDist),
    //             applyRy = Ry * (mouseDist / maxDist),
    //             angle = Math.atan2(mouseY - midY, mouseX - midX),
    //             diffX = Math.cos(angle) * applyRx,
    //             diffY = Math.sin(angle) * applyRy;

    //         eyeLeft.setAttribute('cx', eyeLeftPos.x + diffX);
    //         eyeLeft.setAttribute('cy', eyeLeftPos.y + diffY);

    //         eyeRight.setAttribute('cx', eyeRightPos.x + diffX);
    //         eyeRight.setAttribute('cy', eyeRightPos.y + diffY);
    //     }

    //     var resetEyes = function (e) {

    //         eyeLeft.setAttribute('cx', restL.x);
    //         eyeLeft.setAttribute('cy', restR.y);

    //         eyeRight.setAttribute('cx', eyeRightPos.x);
    //         eyeRight.setAttribute('cy', eyeRightPos.y);
    //     }

    //     var init = function () {
    //         maxDist = distanceBetween(midX, midY, 0, midY * 2);
    //     }

    //     init();
    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     document.addEventListener('mouseleave', resetEyes);
    // });


    return (
        <SVGContainer />
    )

}

function Hero() {
    return (
        <header>
            <div className="hero">
                <div className='py-5'>
                    <Container className="px-5" variant="light">
                        <div className="gx-5 align-items-center d-flex justify-content-center justify-content-lg-between">
                            <div className=''>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-5 fw-bolder  mb-2">[im_galad]</h1>
                                    <h2 className="lead fst-italic fw-bold">stylized <span className='fw-normal'>/'stī(ə)līzd/</span></h2>
                                    <p className='p-0 m-0 mb-4'>depicted or treated in a mannered and nonrealistic style.</p>
                                    {/* <p className='mb-4 fst-italic'>"The rock drawings depict a variety of stylized mythological figures and patterns."</p> */}


                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <Link to={`/blog`}><Button size='lg' variant="dark" className="px-4 me-sm-3">Blog</Button></Link>
                                        <a href='https://im-galad.gumroad.com/'><Button size='lg' variant='outline-dark' className="px-4 me-sm-3">Gumroad</Button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-none d-lg-block text-center" aria-hidden={true}>
                                <div className='hero-img-container position-relative'>
                                    <HeroLogo />
                                    <div className='hero-img-background'>
                                        <img src={"img/home/heroPaint.svg"} alt="paint splater" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </header >
    )
}



function MailingListCTA() {
    return (
        <Container>
            <aside className="bg-dark text-light  rounded-3 p-4 p-sm-5 my-5">
                <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                    <div className="mb-4 mb-xl-0">
                        <div className="fs-3 fw-bold ">Subscribe to My Newsletter</div>
                        <div className="">Sign up for a monthly collection of the best of Blender NPR.</div>
                    </div>
                    <div className="ms-xl-4">
                        <div className="input-group mb-2">
                            <input className="form-control" type="text" placeholder="Email address..." aria-label="Email address..." aria-describedby="button-newsletter" />
                            <button className="btn btn-outline-light" id="button-newsletter" type="button">Sign up</button>
                        </div>
                        <div className="small">We care about privacy, and will never share your data.</div>
                    </div>
                </div>
            </aside>
        </Container>

    )
}

export default class Home extends Component {
    render() {
        return (
            <>

                <Hero />


                <FeaturedPosts />
                <MailingListCTA />

            </>

        )
    }
}

