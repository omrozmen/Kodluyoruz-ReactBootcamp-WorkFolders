import React from "react";

export default function Button({
	className = "btn btn-outline-info",
	fullwidth = false,
	...props
}) {
	return (
		<button
			style={{ width: fullwidth ? "100%" : "auto" }}
			onClick={props.onClick}
			className={className}
			{...props}
		>
			{props.children}
		</button>
	);
}
