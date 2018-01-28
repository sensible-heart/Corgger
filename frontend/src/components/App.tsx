import * as React from "react";
import Player from "../models/Player";

const KEY = {
	LEFT: 37,
	RIGHT: 39,
	UP: 38,
	A: 65,
	D: 68,
	W: 87
};

import AppModel from "../models/AppModel";
import Lane from "../models/Lane";
import { NUMBER_OF_LANES } from "../data/Constants";

// App Controller that handles of the functionality of the main App View
export default class App extends React.Component<{}> {
	lanes: Lane[] = [];
	laneCount: number = 0;
	model: AppModel;
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	screen: any;
	player: Player;
	keys: any;

	constructor(args: any) {
		super(args);
		this.model = new AppModel();
		this.keys = {
			left: false,
			right: false,
			up: false
		};
		this.screen = {
			width: 300,
			height: 500
		};
	}

	componentDidMount(): void {
		this.setUpGame();
		window.addEventListener("keyup", this.handleKeys.bind(this, true));
		requestAnimationFrame(() => {
			this.update();
		});
	}

	private update(): void {
		this.updatePlayer();
		/*
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
		}*/
		window.requestAnimationFrame(() => this.update());
	}

	private setUpGame(): void {
		const context = this.canvas.getContext("2d");

		this.player = new Player(
			this.canvas.width / 2,
			this.canvas.height - 20
		);
		context.beginPath();
		context.arc(this.player.x, this.player.y, 5, 0, 2 * Math.PI); // (0,0) is top left
		context.stroke();
		context.closePath();

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

	componentWillUnmount(): void {
		// this is probably wrong
		window.removeEventListener("keyup", this.handleKeys.bind(this, true));
	}

	handleKeys(value: boolean, e: any): void {
		console.log(e, value);
		const keys = this.keys;

		if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) {
			keys.left = value;
		}
		if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) {
			keys.right = value;
		}
		if (e["keyCode"] === KEY.UP || e.keyCode === KEY.W) {
			keys.up = value;
		}
		console.log(e.keyCode);
		this.setState({
			keys
		});
		this.updatePlayer();
		keys.left = false;
		keys.right = false;
		keys.up = false;
		this.setState({
			keys
		});
	}

	updatePlayer(): void {
		this.player.render(this.keys);
	}
}
