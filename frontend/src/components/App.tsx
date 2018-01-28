import * as React from "react";

import AppModel from "../models/AppModel";
import Lane from "../models/Lane";
import { NUMBER_OF_LANES } from "../data/Constants";

// App Controller that handles of the functionality of the main App View
export default class App extends React.Component<{}> {
	lanes: Lane[] = [];
	laneCount: number = 0;
	model: AppModel;
	canvas: HTMLCanvasElement;
	screen: any;

	constructor(args: any) {
		super(args);
		this.model = new AppModel();
		this.screen = {
			width: 300,
			height: 500
		};
	}

	componentDidMount(): void {
		this.setUpGame();
		window.requestAnimationFrame(() => this.update());
	}

	private update(): void {
		for (let i = 0; i < this.lanes.length; i += 1) {
			this.lanes[i].update();
			if (this.lanes[i].outOfSight) {
				this.lanes.splice(i, 1);
				const factor = this.canvas.height / NUMBER_OF_LANES;
				this.laneCount += 1;
				const lane = new Lane(
					0,
					0 + factor,
					this.canvas.width,
					factor,
					this.laneCount
				);
				this.lanes.push(lane);
			}
		}
		window.requestAnimationFrame(() => this.update());
	}

	private setUpGame(): void {
		const context = this.canvas.getContext("2d");
		context.beginPath();
		const height = this.canvas.height;
		const factor = this.canvas.height / NUMBER_OF_LANES;
		for (let i = 0; i < height; i += factor) {
			this.laneCount += 1;
			const lane = new Lane(
				0,
				i,
				this.canvas.width,
				factor,
				this.laneCount
			);
			this.lanes.push(lane);
		}
	}
}
