import React, {FC} from "react";
import "./Styled.card";
import { Card_Styled } from "./Styled.card";
import {H1_Styled} from "../../styles/Grid.styled";

type ICardProps = {
    title?: string
}

const Card: FC<ICardProps> = ({children, title}) => {
    return (
        <Card_Styled>
            {title ? <H1_Styled className="text-align-center">{title}</H1_Styled> : "" }
            {children}
        </Card_Styled>
    );
};

export default Card;