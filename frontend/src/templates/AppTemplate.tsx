import * as React from "react";

import App from "../components/App";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class AppTemplate extends App {
	render(): JSX.Element {
		return (
			<div>
				<h1>Get ready for corgs!</h1>
				<canvas
					ref="canvas"
					width={this.screen.width * this.screen.ratio}
					height={this.screen.height * this.screen.ratio}
				/>
			</div>
		);
	}
}
