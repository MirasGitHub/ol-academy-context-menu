import React, { useState } from "react";

import { ContextMenu } from "./ContextMenu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ListsPage.css";
import ListItem from "./ListItem";

const listItems = [
	{
		id: 1,
		text: "text 1",
		backgroundColor: "#C179B9",
	},
	{
		id: 2,
		text: "text 2",
		backgroundColor: "#A42CD6",
	},
	{
		id: 3,
		text: "text 3",
		backgroundColor: "#502274",
	},
	{
		id: 4,
		text: "text 4",
		backgroundColor: "#A1CDF4",
	},
	{
		id: 5,
		text: "text 5",
		backgroundColor: "#6E8898",
	},
];

const ListsPage = ({ handleClick, item, id }) => {
	const [isShow, setIsShow] = useState(false);

	const [points, setPoints] = useState({
		x: 50,
		y: 50,
	});

	const [contextMenu, setContextMenu] = useState("");

	const handleEdit = (id) => {
		console.log("edit", id);
		setIsShow(false);
	};

	const handleRemove = (id) => {
		console.log("remove", id);
		setIsShow(false);
	};

	return (
		<div>
			<div className="context-menu">
				<h1>Context Menu Task</h1>

				{isShow && (
					<ContextMenu
						contextMenu={contextMenu}
						handleClose={() => setIsShow(false)}
						handleClick={handleClick}
						top={points.y}
						left={points.x}
						handleRemove={handleRemove}
						handleEdit={handleEdit}
					/>
				)}
			</div>
			<ListItem
				listItems={listItems}
				setIsShow={setIsShow}
				setPoints={setPoints}
				setContextMenu={setContextMenu}
			/>
		</div>
	);
};

export default ListsPage;
