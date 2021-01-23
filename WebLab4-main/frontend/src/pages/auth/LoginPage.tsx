import React from "react";
import AuthForm from "../../components/auth-form/AuthForm";
import {useSelector} from "react-redux";
import {AppState} from "../../store/ducks";
import {isError, isLoggedIn} from "../../store/ducks/Auth";
import history from "../../routes/history";
import Alert from "../../components/alert/Alert";
import Card from "../../components/card/Card";
import {Grid_Styled, H1_Styled} from "../../styles/Grid.styled";
import {Jumbontron_Styled} from "../../styles/global.styled";

const LoginPage = () => {
    const isAuthenticated = useSelector((state: AppState) => isLoggedIn(state));

    return (
        <>
        {isAuthenticated ?
                history.push("/") :
                (
                    <>
                        <Jumbontron_Styled className="jumbotron">
                            <H1_Styled className="text-align-center">
                                Tarasova Natasha - Ortiz Jose <br/> - P3232 - Var. 2832
                            </H1_Styled>
                        </Jumbontron_Styled>

                        <Grid_Styled className="flex-container">
                            <Card title="WELCOME!">
                                <AuthForm />
                            </Card>
                        </Grid_Styled>
                    </>
                )
        }
        </>
    );
};

export default LoginPage;

