import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { showLoader, getTaskList, updateTask, deleteTask } from "../../store/actions";
import deleteIcon from "../../assets/trash-solid.svg";

const TaskTable = ({ searchTeram }) => {
	const dispatch = useDispatch();
	const { reload, taskList } = useSelector((state) => state.Dashboard);

	const [activeRecord, setActiveRecord] = useState({ show: false });
	const [list, setList] = useState([]);

	// Initial page load
	useEffect(() => {
		dispatch(showLoader(true));
		dispatch(
			getTaskList(
				(result) => {
					dispatch(showLoader(false));
					setList(result);
				},
				() => {
					dispatch(showLoader(false));
				}
			)
		);
	}, [reload]);

	//Search logic
	useEffect(() => {
		if (searchTeram !== "") {
			const updatedList = taskList.filter((item) => {
				return item.name.includes(searchTeram);
			});
			setList(updatedList);
		} else {
			setList(taskList);
		}
	}, [searchTeram]);

	const onStatusChange = (data) => {
		const postData = { ...data, completed: !data.completed };
		dispatch(updateTask(postData));
	};

	const onDeleteTask = (data) => {
		setActiveRecord(data);
	};

	const confirmDelete = () => {
		dispatch(deleteTask(activeRecord, () => setActiveRecord({ show: false })));
	};

	return (
		<>
			<Row className="table-list">
				<Row className="table-row">
					{list?.map(({ name, completed, id }) => (
						<Col key={id} className="box table-row-item" lg={12} md={12} sm={12} xs={12}>
							<div
								onClick={() => onStatusChange({ completed, id })}
								className={`${completed ? "checked" : "unchecked"} checkbox`}>
								&nbsp;
							</div>
							<h4 className={`task-name ${completed ? "completed" : ""}`}>{name}</h4>
							<div className="icon-group">
								<img
									onClick={() => onDeleteTask({ id, show: true })}
									className="icon"
									alt="icon"
									src={deleteIcon}
								/>
							</div>
						</Col>
					))}
				</Row>
			</Row>
			<Modal show={activeRecord.show} onHide={() => setActiveRecord({ show: false })} animation={false}>
				<Modal.Body>
					<p className="no-task-tittle">Are you shure want to delete ?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => confirmDelete()} variant="primary">
						Yes
					</Button>
					<Button onClick={() => setActiveRecord({ show: false })} variant="secondary">
						No
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
export default TaskTable;
