import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import RenderField from "./inputField";
import { Form, Button, Container } from "react-bootstrap";

import { required } from "../../constant/formValidators";
import { showLoader, sendLoginCredentials } from "../../store/actions";
import Toaster from "../sharedComponents/toaster";
import { setLsValue } from "../../utils/helper";
import "./session.scss";

const LSVariable = process.env.REACT_APP_LS_VAR;

const SignIn = ({ handleSubmit, history }) => {
	const dispatch = useDispatch();
	const [error, setError] = useState(false);

	const submitLogin = (values) => {
		dispatch(showLoader(true));
		dispatch(
			sendLoginCredentials(
				values,
				(result) => {
					setLsValue(LSVariable, result);
					history.push("/dashboard");
				},
				() => {
					dispatch(showLoader(false));
					setError(true);
				}
			)
		);
	};

	return (
		<Container className="container-div">
			<Form name="SignInForm" onSubmit={handleSubmit(submitLogin)}>
				<div className="row">
					<div className="col-12 sub-title">
						<h2>Login</h2>
						<hr className="heading-hr" />
					</div>
				</div>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>User Name</Form.Label>
					<Field
						name="userName"
						component={RenderField}
						type="text"
						className="form-control form-field"
						placeholder="User Name"
						validate={[required]}
					/>
				</Form.Group>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>API Key</Form.Label>
					<Field
						name="apiKey"
						label="API Key"
						showPassword={true}
						type="text"
						component={RenderField}
						validate={[required]}
						placeholder="API Key"
					/>
				</Form.Group>

				<Form.Group className="text-center">
					<Button variant="primary" className="mt-4 w-100" type="submit">
						Login
					</Button>
				</Form.Group>
			</Form>
			{error && (
				<div className="toaster-rwap">
					<Toaster message="Invalid login details"></Toaster>
				</div>
			)}
		</Container>
	);
};
export default reduxForm({
	form: "SignInForm",
})(SignIn);
