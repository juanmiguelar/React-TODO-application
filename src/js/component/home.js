import React, { useState } from "react";

//create your first component
export function Home() {
	const [task, setTask] = useState("");

	const handleOnKeyDown = e => {
		if (e.key === "Enter") {
			//code to execute here
			console.log("La tarea es " + task);
		}
	};

	return (
		<div className="container">
			<h1 className="text-muted text-center">todos</h1>
			<input
				type="text"
				className="form-control mb-2 text-secondary"
				value={task}
				placeholder="Type your task"
				onChange={e => setTask(e.target.value)}
				onKeyDown={e => handleOnKeyDown(e)}
			/>
			<ul className="list-group">
				<li className="list-group-item text-secondary">
					<p className="d-inline-block ml-4">Make the bed</p>
					<button className="btn btn-outline-secondary float-right">
						<i className="fas fa-times"></i>
					</button>
				</li>
			</ul>
			<div className="card">
				<ul className="list-group list-group-flush">
					<li className="list-group-item text-secondary ml-4">
						4 items left
					</li>
				</ul>
			</div>
		</div>
	);
}
