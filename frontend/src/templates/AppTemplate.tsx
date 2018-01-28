import * as React from "react";

import App from "../components/App";

export default class AppTemplate extends App {
	render(): JSX.Element {
		return (
			<div>
				<h1>Get ready for corgs!</h1>
				<canvas
					ref={ref => (this.canvas = ref)}
					id="myCanvas"
					width={300}
					height={500}
				/>
			</div>
		);
	}
}
