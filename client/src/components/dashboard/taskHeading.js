import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

const TaskHead = ({ setShowAdd, searchTeram, setSearchTeram }) => {
	return (
		<Row className="content-area">
			<Col className="box table-cols" lg={6} md={6} sm={12} xs={12}>
				<h2>Tasks</h2>
			</Col>
			<Col className="box table-cols mr-2" lg={3} md={3} sm={12} xs={12}>
				<Form.Control
					className="search-box"
					onChange={(e) => setSearchTeram(e.target.value)}
					value={searchTeram}
					type="text"
					placeholder="Search..."
				/>
			</Col>
			<Col className="box table-cols" lg={3} md={3} sm={12} xs={12}>
				<Button variant="primary" onClick={() => setShowAdd(true)} className="w-100" type="submit">
					+ New Task
				</Button>
			</Col>
		</Row>
	);
};
export default TaskHead;
