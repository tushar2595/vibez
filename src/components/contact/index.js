import React from "react";
import "./style.scss";
import { Col } from "react-bootstrap";
import { Icons } from "../../constants/assets";
const Contact = () => {
    return (
        <div className={"contact-container"}>
            <div className={"contact-title pt-3"}>
                CONTACT
            </div>
            <div className={"contact-title-container"}>
                Have a question or want to work together?
            </div>
            <div className={'d-flex justify-content-center mt-4'}>
                <div >
                    <Col className={'m-3'}>
                        <input placeholder={"Name"} className={"input-portfolio"} />
                    </Col>
                    <Col className={'m-3'}>
                        <input placeholder={"Email"} className={"input-portfolio"} />
                    </Col>
                    <Col className={'m-3'}>
                        <textarea placeholder={"Your Message"} className={"input-portfolio-mesage"} />
                    </Col>
                    <Col className={"d-flex justify-content-end mr-4 "}>
                        <button className={"submit-btn-container"}>Submit</button>
                    </Col>
                    <Col className={"contact-title-container"}>
                        OR
                    </Col>
                    <Col className={"d-flex justify-content-center mt-3"}>
                        <img src={Icons.mailIcon} className={"mail-icon"} />
                    </Col>
                    <div className={"contact-title-container"}>
                        tushardhawan25@gmail.com
                    </div>

                </div>
            </div>
        </div >
    )
}
export default Contact;