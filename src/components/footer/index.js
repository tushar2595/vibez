import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import { Icons } from "../../constants/assets";
const Footer = () => {
    return (
        <div className={"footer-container"}>
            <Row className={"mt-1 d-flex align-items-center"}>
                <Col className={"social-icon-container"}>
                    <img src={Icons.fbIcon} className={"social-icon"} />
                </Col>
                <Col>
                    <img src={Icons.inIcon} className={"social-icon"} />
                </Col>
                <Col>
                </Col>
                <Col>
                    <span className={"name-container "}>
                        <span className={"m-1"}> TUSHAR</span>
                        <img src={Icons.copyRightIcon} className={"copy-right-icon m-1"} />
                        <span className={"year-label m-1"}>2021</span>
                    </span>
                </Col>
            </Row>
        </div>
    )
}
export default Footer;