import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Chart } from "react-google-charts";

import { getDashboard, showLoader } from "../../store/actions";

const CardBlock = () => {
	const dispatch = useDispatch();
	const { data, reload } = useSelector((state) => state.Dashboard);

	useEffect(() => {
		dispatch(showLoader(true));
		dispatch(
			getDashboard(
				() => {
					dispatch(showLoader(false));
				},
				() => {
					dispatch(showLoader(false));
				}
			)
		);
	}, [reload]);

	return (
		<Row className="content-area">
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<div className="box-item">
					<h2>Tasks Completed</h2>
					<span className="completed-count">{data?.tasksCompleted}</span>
					<span className="total-count">/ {data?.totalTasks}</span>
				</div>
			</Col>
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<div className="box-item">
					<h2>Latest Created Tasks</h2>
					<ul className="a">
						{data?.latestTasks.map(({ name, completed, id }) => (
							<li key={id} className={`${completed ? "completed" : ""}`}>
								{name}
							</li>
						))}
					</ul>
				</div>
			</Col>
			<Col className="box" lg={4} md={4} sm={12} xs={12}>
				<div className="box-item">
					<Chart
						height={"130px"}
						width={"auto"}
						chartType="PieChart"
						loader={<div>Loading Chart</div>}
						data={[
							["Tasks", "Total Task"],
							["Completed Task", data?.tasksCompleted],
							["Pending Task", data?.totalTasks],
						]}
						options={{
							legend: "none",
							pieSliceText: "label",
							title: "Total Task",
							pieStartAngle: 100,
							slices: {
								1: { color: "#537178" },
								0: { color: "#5285ec" },
							},
						}}
						rootProps={{ "data-testid": "6" }}
					/>
				</div>
			</Col>
		</Row>
	);
};
export default CardBlock;
