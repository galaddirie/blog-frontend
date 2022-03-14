import './home.css'
import React, { Component, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FeaturedPosts } from '../../components/Posts/Post';
import { ReactComponent as YourSvg } from './logoeyes.svg';
import { Link } from 'react-router-dom';
function HeroLogo() {
    useEffect(() => {

        var Rx = 50,
            Ry = 35,
            eyeLeft = document.querySelector('#l-iris'),
            eyeRight = document.querySelector('#r-iris'),

            eyeLeftPos = {
                x: parseInt(eyeLeft.getAttribute('cx')),
                y: parseInt(eyeLeft.getAttribute('cy'))
            },
            eyeRightPos = {
                x: parseInt(eyeRight.getAttribute('cx')),
                y: parseInt(eyeRight.getAttribute('cy'))
            },
            restL = eyeLeftPos,
            restR = eyeRightPos,
            midX = window.innerWidth >> 1,
            midY = window.innerHeight >> 1,
            mouseX = 0,
            mouseY = 0,
            maxDist = 50;

        var distanceBetween = function (x1, y1, x2, y2) {
            var dx = x2 - x1,
                dy = y2 - y1;

            return Math.sqrt(dx * dx + dy * dy);
        }

        var mouseMoveHandler = function (e) {
            mouseX = e.clientX || e.x;
            mouseY = e.clientY || e.y;

            var mouseDist = distanceBetween(midX, midY, mouseX, mouseY),
                applyRx = Rx * (mouseDist / maxDist),
                applyRy = Ry * (mouseDist / maxDist),
                angle = Math.atan2(mouseY - midY, mouseX - midX),
                diffX = Math.cos(angle) * applyRx,
                diffY = Math.sin(angle) * applyRy;

            eyeLeft.setAttribute('cx', eyeLeftPos.x + diffX);
            eyeLeft.setAttribute('cy', eyeLeftPos.y + diffY);

            eyeRight.setAttribute('cx', eyeRightPos.x + diffX);
            eyeRight.setAttribute('cy', eyeRightPos.y + diffY);
        }

        var resetEyes = function (e) {

            eyeLeft.setAttribute('cx', restL.x);
            eyeLeft.setAttribute('cy', restR.y);

            eyeRight.setAttribute('cx', eyeRightPos.x);
            eyeRight.setAttribute('cy', eyeRightPos.y);
        }

        var init = function () {
            maxDist = distanceBetween(midX, midY, 0, midY * 2);
        }

        init();
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseleave', resetEyes);
    });


    return (
        <YourSvg />
    )

}

function Hero() {
    return (
        <header>
            <div className="hero">
                <div className='py-5'>
                    <Container className="px-5" variant="light">
                        <Row className="gx-5 align-items-center justify-content-center">
                            <Col xxl={6} lg={7} md={8}>
                                <div className="my-5 text-center text-lg-start">
                                    <h1 className="display-5 fw-bolder  mb-2">[im_galad]</h1>
                                    <h2 className="lead fst-italic fw-bold">stylized <span className='fw-normal'>/'stī(ə)līzd/</span></h2>
                                    <p className='p-0 m-0'>depicted or treated in a mannered and nonrealistic style.</p>
                                    <p className='mb-4 fst-italic'>"gracefully shaped vases decorated with stylized but recognizable white lilies"</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <Link to={`/blog`}><Button size='lg' variant="dark" className="px-4 me-sm-3">Blog</Button></Link>
                                        <a href='https://im-galad.gumroad.com/'><Button size='lg' variant='outline-dark' className="px-4 me-sm-3">Gumroad</Button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col xxl={6} lg={5} className="d-none d-lg-block text-center" aria-hidden={true}>
                                <div className='hero-img-container position-relative'>
                                    <HeroLogo />
                                    <div className='hero-img-background'>
                                        <img src={"img/home/heroPaint.svg"} alt="paint splater" />
                                    </div>
                                </div>

                            </Col>
                        </Row>
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

