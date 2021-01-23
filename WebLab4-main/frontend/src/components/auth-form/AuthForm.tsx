import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AUTH_REQUEST_FAILURE, authRequest, isError} from "../../store/ducks/Auth";
import {AppState} from "../../store/ducks";
import Alert from "../alert/Alert";
import {validateUser} from "../../validators";
import {IUser} from "../../models/IUser";
import {Button_Styled, Form_Styled} from "../../styles/Forms.styled";
import {Grid_Styled} from "../../styles/Grid.styled";


const AuthForm = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector((state: AppState) => state.auth.fetching);
    const hasError = useSelector((state: AppState) => isError(state));
    const error = useSelector((state: AppState) => state.auth.error);
    const [inputs, setInputs] = useState({ username: '', password: '' } as IUser);
    const { username, password } = inputs;
    const [requestType, setRequestType] = useState('login');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const msg = validateUser(inputs);
        if (msg !== "") {
            dispatch({
                type: AUTH_REQUEST_FAILURE,
                payload: {name: "validation", message: msg} as Error
            });
            return;
        }

        dispatch(authRequest(requestType, {username, password}));
    };

    const changeRequestType = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        setRequestType((e.target as HTMLButtonElement).dataset.typerequest || 'login')


    return (
        <div>
            { hasError && <Alert type={"error"} content={error?.message} /> }

            <form onSubmit={handleSubmit}>
                <Form_Styled className="form-group">
                    <label className="main-label">Username</label>
                    <input type="text" name="username"
                           value={username} onChange={handleChange}
                           className={'default-text-input' + (hasError ? ' is-invalid' : '')} />
                </Form_Styled>
                <Form_Styled className="form-group">
                    <label className="main-label">Password</label>
                    <input type="password" name="password"
                           value={password} onChange={handleChange}
                           className={'default-text-input' + (hasError ? ' is-invalid' : '')} />
                </Form_Styled>
                <Form_Styled className="form-group">
                    <Grid_Styled  className="flex-container">
                        <Button_Styled className="default-btn btn-primary"
                                disabled={isFetching}
                                data-typerequest="login"
                                onClick={changeRequestType.bind(this)}
                        >
                            Login
                        </Button_Styled>
                        <Button_Styled className="default-btn btn-secondary"
                                disabled={isFetching}
                                data-typerequest="register"
                                onClick={changeRequestType.bind(this)}
                        >
                            Register
                        </Button_Styled>
                    </Grid_Styled>
                </Form_Styled>
            </form>
        </div>
    );
};

export default AuthForm;