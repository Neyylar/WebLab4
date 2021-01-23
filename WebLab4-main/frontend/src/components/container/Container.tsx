import React, {FC} from "react";
import {Container_Styled} from "./Container.styled";

const Container: FC = ({children}) => (
    <Container_Styled>
        {children}
    </Container_Styled>
);

export default Container;