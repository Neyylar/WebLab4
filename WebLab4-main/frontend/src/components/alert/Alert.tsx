import React from "react";
import "./alert.styled";
import {Alert_Styled} from "./alert.styled";

interface IAlert {
    type: "success" | "info" | "error"
    content?: string
}

const Alert = ({type, content}: IAlert) => {
    return (
        <Alert_Styled className={"alert " + type}>
            <span className="title-alert">{type}: </span>
            <span className="content-alert">{content}</span>
        </Alert_Styled>
    );
};

export default Alert;