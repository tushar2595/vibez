import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import { Icons, Image } from "../../constants/assets";
import { withRouter } from "react-router-dom";
const About = (props) => {
    return (
        <div className={"about-container m-3"}>
            <div className={"about-us-title-container"}>
                <p className={"about-title"}> About</p>
            </div>
            <Row>
                <Col className={"content"}>
                    <div className={"menu-item-container"}>
                        <div className={"menu-icon-container"}>
                            <img src={Icons.meterIcon} />
                        </div>
                    </div>
                    <div className={"title-container"}>
                        <span className={"content-title"}>Fast</span>
                    </div>
                    <div className={"content-para"}>
                        <p>Fast load times and lag free interaction, my highest priority.</p>
                    </div>
                </Col>
                <Col className={"content "}>
                    <div className={"menu-item-container"}>
                        <div className={"menu-icon-container"}>
                            <img src={Icons.devicesIcon} />
                        </div>
                    </div>
                    <div className={"title-container"}>
                        <span className={"content-title"}>Fast</span>
                    </div>
                    <div className={"content-para"}>
                        <p>My layouts will work on any device, big or small.</p>
                    </div>
                </Col>
                <Col className={"content "}>
                    <div className={"menu-item-container"}>
                        <div className={"menu-icon-container"}>
                            <img src={Icons.bulbIcon} />
                        </div>
                    </div>
                    <div className={"title-container"}>
                        <span className={"content-title"}>Intutive</span>
                    </div>
                    <div className={"content-para"}>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                    </div>
                </Col>
                <Col className={"content "}>
                    <div className={"menu-item-container"}>
                        <div className={"menu-icon-container"}>
                            <img src={Icons.interestIcon} />
                        </div>
                    </div>
                    <div className={"title-container"}>
                        <span className={"content-title"}>Dynamic</span>
                    </div>
                    <div className={"content-para"}>
                        <p>Websites don't have to be static, I love making pages come to life.</p>
                    </div>
                </Col>
            </Row>
            <Row >
                <Col lg={8} >
                    <Col className={"self-image-container"}>
                        <img src={Image.selfImage} className={'self-image'} />
                    </Col>

                    <Col className={'self-intro-container-title'}>
                        <span className={"self-intro-title"}>Who's this guy?</span>
                    </Col>
                    <Col className={"self-intro-container"}>
                        <div className={"self-intro"}>
                            <p>I'm a Front-End Developer.
                            I have serious passion for UI effects,
                            animations and creating intuitive,
                             dynamic user experiences.</p>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        props.history.push("/contact")
                    }} className={"self-intro-container"}>
                        <p><span className={"contact"}>Let's make something special.</span></p>
                    </Col>
                </Col>
                <Col lg={4} >
                    <Row className={"skill-row  m-3"}>
                        <Col lg={2} xs={2} className={"skills-title"}>
                            <div>
                                HTML
                            </div>
                        </Col>
                        <Col lg={6} xs={6} className={"skills-strength"}>

                        </Col>
                        <Col lg={4} xs={4} className={"skills-container"}>

                        </Col>
                    </Row>
                    <Row className={"skill-row m-3"} lg={6}>
                        <Col lg={2} xs={2} className={"skills-title"}>
                            <div>
                                CSS
                                </div>
                        </Col>
                        <Col lg={5} xs={5} className={"skills-strength"}>

                        </Col>
                        <Col lg={5} xs={5} className={"skills-container"}>

                        </Col>
                    </Row>
                    <Row className={"skill-row m-3"} lg={6}>
                        <Col lg={2} xs={2} className={"skills-title"}>
                            javascript
                        </Col>
                        <Col lg={7} xs={7} className={"skills-strength"}>

                        </Col>
                        <Col lg={3} xs={3} className={"skills-container"}>

                        </Col>
                    </Row>
                    <Row className={"skill-row m-3"} lg={6}>
                        <Col lg={2} xs={2} className={"skills-title"}>
                            React js
                        </Col>
                        <Col lg={8} xs={8} className={"skills-strength"}>

                        </Col>
                        <Col lg={2} xs={2} className={"skills-container"}>

                        </Col>
                    </Row>
                </Col>
            </Row>

        </div >
    )
}
export default withRouter(About);