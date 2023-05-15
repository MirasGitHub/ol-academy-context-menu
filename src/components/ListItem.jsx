import React from "react";

const ListItem = ({ setIsShow, setPoints, setContextMenu, listItems }) => {
	return (
		<div>
			<ul>
				{listItems.map((item) => {
					return (
						<li
							key={item.id}
							style={{ backgroundColor: item.backgroundColor }}
							onContextMenu={(e) => {
								console.log(item.id, item.text);
								e.preventDefault();
								setIsShow(true);
								setPoints({
									x: e.pageX,
									y: e.pageY,
								});
								setContextMenu(item.text);
							}}
						>
							{item.text}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ListItem;
