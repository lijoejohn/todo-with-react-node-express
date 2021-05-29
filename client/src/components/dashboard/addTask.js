import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { createTask } from "../../store/actions";
import { useDispatch } from "react-redux";

const AddTask = ({ showAdd, setShowAdd }) => {
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState("");

	const onCreate = () => {
		const sucess = () => {
			setTaskName("");
			setShowAdd(false);
		};
		const postData = { name: taskName };
		dispatch(createTask(postData, sucess));
	};
	return (
		<Modal show={showAdd} onHide={() => setShowAdd(false)} animation={false}>
			<Modal.Body>
				<p className="no-task-tittle">+ New Task</p>
				<form className="add-support-staff-form">
					<Form.Control
						className="search-box"
						type="text"
						onChange={(e) => {
							setTaskName(e.target.value);
						}}
						value={taskName}
					/>
				</form>
			</Modal.Body>

			<Modal.Footer>
				<Button onClick={() => onCreate()} variant="primary">
					+ New Task
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
export default AddTask;
