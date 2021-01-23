import React, {useRef, useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.styled";
import {useDispatch, useSelector} from "react-redux";
import {isLoggedIn, loggedUser, logout} from "../../store/ducks/Auth";
import {AppState} from "../../store/ducks";
import {Navbar_Styled} from "./Navbar.styled";
import ThemedSelect from "../theme-selector/ThemedSelect";

const Navbar = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));
    const authSession = useSelector((state: AppState) => loggedUser(state));
    const [responsiveOpen, setResponsiveOpen] = useState(false);
    function toggleResponsive() {
        setResponsiveOpen(!responsiveOpen);
    }
    return (
        <Navbar_Styled id="main-navbar" className={(responsiveOpen ? "responsive" : "")}>
            <b>ITMO 2020</b>
            <a href="https://github.com/joseortiz9/WebLab4">GitHub repository</a>
            {isAuthenticated ? (
                <>
                    <NavLink to="/">Home</NavLink>
                    <span className="nav-username">{authSession?.username}</span>
                    <a className={"default-btn btn-navbar"} href="#" onClick={() => dispatch(logout(authSession))}>Logout</a>
                </>
            ) : (
                <>
                    <NavLink to="/login">Login</NavLink>
                </>
            )}
            <a href="#" className="toggler-responsive" onClick={() => toggleResponsive()}>
                Nav
            </a>
            <ThemedSelect></ThemedSelect>

        </Navbar_Styled>
    );
}

export default Navbar;