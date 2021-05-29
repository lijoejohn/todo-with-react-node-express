import React from "react";

import { setLsValue } from "../../utils/helper";
const LSVariable = process.env.REACT_APP_LS_VAR;

const Header = ({ history }) => {
	const logout = () => {
		setLsValue(LSVariable, null);
		history.push("/signin");
	};
	return (
		<div className="header">
			<div className="logout" onClick={logout}>
				Logout
			</div>
		</div>
	);
};
export default Header;
