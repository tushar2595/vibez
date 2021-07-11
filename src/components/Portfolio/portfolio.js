import React from "react";
import "./style.scss";
import { Row, Col } from "react-bootstrap";
import { Image } from "../../constants/assets";
const Portfolio = () => {
    return (
        <div className={"portfolio-container"}>
            <div className={"projects-title"}>
                PROJECTS
            </div>
            <Row>
                <Col className={"project-container"}>
                    <div style={{ background: "#A2DBFA", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }} className={"d-flex justify-content-center shadow m-2"}>
                        <img src={Image.sendbiz} className={"project-image"} />
                    </div>
                    <div className={"project-detail shadow"}>
                        <p>Sendbiz is a platform that allows micro, small and medium sized companies to present information,
                        jobs , products / service and events, they offer in an ergonomic way. Worldwide, we give great
                        visibility to millions of companies who can promote themselves, recruit , sell their products
                          / services.</p>
                    </div>

                </Col>
                <Col className={"project-container"}>
                    <div style={{ background: '#9B72AA', borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }} className={"d-flex justify-content-center shadow m-2"}>
                        <img src={Image.music} className={"project-image"} />
                    </div>
                    <div className={"project-detail shadow"}>
                        <p >Sendbiz is a platform that allows micro, small and medium sized companies to present information,
                        jobs , products / service and events, they offer in an ergonomic way. Worldwide, we give great
                        visibility to millions of companies who can promote themselves, recruit , sell their products
                          / services.</p>
                    </div>
                </Col>
                <Col className={"project-container "}>
                    <div style={{ background: "#B8DFD8", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }} className={"d-flex justify-content-center shadow m-2"}>
                        <img src={Image.sendbiz} className={"project-image"} />
                    </div>
                    <div className={"project-detail shadow"}>
                        <p>Sendbiz is a platform that allows micro, small and medium sized companies to present information,
                        jobs , products / service and events, they offer in an ergonomic way. Worldwide, we give great
                        visibility to millions of companies who can promote themselves, recruit , sell their products
                          / services.</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Portfolio;