import React, { useState, useEffect } from "react";
import "./style.scss";
import { Icons } from "../../constants/assets";
import { withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Header = (props) => {

    const headerContentList = [{ title: "home", route: "/" },
    { title: "about", route: "/about" },
    { title: "portfolio", route: "/portfolio" },
    { title: "contact", route: "/contact" }];
    const [selectedRoute, getSelectedRoute] = useState("");
    const [activeRoute, setActiveRoute] = useState(null);
    const navigator = (data) => {
        props.history.push(data.route);
        setActiveRoute();
    }
    return (
        <Navbar bg="dark" expand="lg" variant={"dark"}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {
                        headerContentList.map((data) => {
                            return (
                                <Nav.Link onClick={() => navigator(data)} className={props.location.pathname === data.route ? "active-route" : "link-route"}>
                                    { data.title.toUpperCase()}</Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )

}
export default withRouter(Header);