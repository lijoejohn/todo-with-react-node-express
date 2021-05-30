import React, { useState } from "react";
import { Container, Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import CardBlock from "./cardBlock";
import TaskHead from "./taskHeading";
import TaskTable from "./taskTable";
import Header from "./header";
import AddTask from "./addTask";
import "./dashboard.scss";

const Dashboard = ({ history }) => {
	const { data } = useSelector((state) => state.Dashboard);

	const [showAdd, setShowAdd] = useState(false);
	const [searchTeram, setSearchTeram] = useState("");

	return (
		<Container className="dashboard-wrap">
			<Header {...{ history }} />
			<CardBlock />
			<TaskHead {...{ setShowAdd, searchTeram, setSearchTeram }} />
			<TaskTable {...{ setShowAdd, searchTeram }} />
			<AddTask {...{ showAdd, setShowAdd }} />
			{data?.totalTasks === 0 && !showAdd && (
				<Modal show={!data.totalTasks && !showAdd} animation={false}>
					<Modal.Body>
						<p className="no-task-tittle">You have no task.</p>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={() => setShowAdd(true)} variant="primary">
							+ New Task
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</Container>
	);
};
export default Dashboard;
