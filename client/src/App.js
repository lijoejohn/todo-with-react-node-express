import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLsValue } from "./utils/helper";
import { MainRouter, SessionRouter } from "./routers";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LSVariable = process.env.REACT_APP_LS_VAR;

function App({ location }) {
	const UI = useSelector((state) => state.UI);

	const desideRouter = () => {
		const getLSVariable = getLsValue(LSVariable);
		const userData = getLSVariable ? JSON.parse(getLSVariable) : null;
		if (userData) {
			return <MainRouter userData={userData} location={location} />;
		}
		return (
			<div className="root-div">
				<SessionRouter location={location} />
			</div>
		);
	};

	return (
		<>
			{desideRouter()}
			{UI.loading && (
				<>
					<div className="overlay show"></div>
					<div className="spanner show">
						<div className="loader"></div>
						<p>Please be patient.</p>
					</div>
				</>
			)}
		</>
	);
}

export default withRouter(App);
