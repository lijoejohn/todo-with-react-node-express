import React from "react";
import { Toast } from "react-bootstrap";
const Toaster = ({ message = "" }) => {
	return (
		<Toast>
			<Toast.Header closeButton={false}>
				<strong className="me-auto">Alert</strong>
			</Toast.Header>
			<Toast.Body>{message}</Toast.Body>
		</Toast>
	);
};
export default Toaster;
