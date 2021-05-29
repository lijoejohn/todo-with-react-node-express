import React from "react";
import { Form } from "react-bootstrap";

const RenderField = ({ input, meta: { touched, error, warning } }) => {
	return (
		<>
			<Form.Control {...input} />
			{touched && ((error && <span className="form-error-span">{error}</span>) || (warning && <span>{warning}</span>))}
		</>
	);
};
export default RenderField;
