/* Player class */
export default class Player {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	move(x: number, y: number): void {
		// update position
		this.x = x;
		this.y = y;
	}

	render(keys: any): void {
		const c = document.getElementById("myCanvas") as HTMLCanvasElement;
		const context = c.getContext("2d");
		let newX: number = this.x;
		let newY: number = this.y;
		if (keys["up"] === true) {
			newY -= 10;
		}
		if (keys["left"] === true) {
			newX -= 10;
		}
		if (keys["right"] === true) {
			newX += 10;
		}

		// console.log(keys);
		this.move(newX, newY);
		context.beginPath();
		context.arc(newX, newY, 5, 0, 2 * Math.PI);
		context.stroke();
		context.closePath();
	}
}
