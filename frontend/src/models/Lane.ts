import Obstacle from "./Obstacle";
import Square from "./Square";

export default class Lane {
	laneNumber: number;
	x: number;
	y: number;
	width: number;
	height: number;
	obstacles: Lane[] = [];
	outOfSight: boolean = false;

	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		laneNumber: number
	) {
		this.x = x;
		this.y = y;
		this.laneNumber = laneNumber;
		this.width = width;
		this.height = height;
		this.draw();
	}

	update(): void {
		this.clear();
		const c = document.getElementById("myCanvas") as HTMLCanvasElement;
		this.y += 1;
		if (this.y <= c.height) {
			this.draw();
		} else {
			this.outOfSight = true;
		}
	}

	private clear(): void {
		const c = document.getElementById("myCanvas") as HTMLCanvasElement;
		const context = c.getContext("2d");
		context.beginPath();
		context.clearRect(this.x, this.y, this.width, this.height);
		context.closePath();
	}

	private draw(): void {
		const c = document.getElementById("myCanvas") as HTMLCanvasElement;
		const context = c.getContext("2d");
		context.strokeStyle = "red";
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
		context.closePath();
	}
}
