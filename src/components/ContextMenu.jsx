import React, { useEffect, useRef } from "react";

import "./ContextMenu.css";

const ContextMenu = ({
	handleClose,
	top,
	left,
	contextMenu,
	handleEdit,
	handleRemove,
}) => {
	const contextMenuRef = useRef(null);

	useEffect(() => {
		const handleRightMouseClick = (e) => {
			e.preventDefault();
			if (contextMenuRef.current) {
				if (!contextMenuRef.current.contains(e.target)) {
					handleClose();
				}
			}
		};

		const handleClick = (e) => {
			if (contextMenuRef.current) {
				if (!contextMenuRef.current.contains(e.target)) {
					handleClose();
				}
			}
		};

		document.addEventListener("contextmenu", handleRightMouseClick);
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);

			document.removeEventListener("contextmenu", handleRightMouseClick);
		};
	}, []);

	return (
		<div>
			<div
				style={{ top: top, left: left }}
				className="contextMenuContainer"
				ref={contextMenuRef}
			>
				{contextMenu}
				<div className="btnsContainer">
					<button onClick={() => handleEdit()} className="btn btn-info">
						Edit
					</button>
					<button onClick={() => handleRemove()} className="btn btn-danger">
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export { ContextMenu };
