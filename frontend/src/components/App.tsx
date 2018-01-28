import * as React from "react";
import Player from "../models/Player";

const KEY = {
	LEFT:  37,
	RIGHT: 39,
	UP: 38,
	A: 65,
	D: 68,
	W: 87,
};

// App Controller that handles of the functionality of the main App View
export default class App extends React.Component {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	screen: any;
	player: Player;
	keys: any; 

	constructor() {
		super({});
		this.keys = {
			left : false,
			right : false,
			up : false
		}
		this.screen = {
			width: window.innerWidth,
			height: window.innerHeight,
			ratio: window.devicePixelRatio || 1
		};
	}

	componentDidMount():void {
		window.addEventListener('keyup', this.handleKeys.bind(this, true));
		this.context = this.canvas.getContext("2d"); // check not null
		this.player = new Player(this.screen.width/2, this.screen.height - 20);
		this.context.beginPath();
		this.context.arc(this.player.x, this.player.y, 5, 0, 2*Math.PI); // (0,0) is top left
		this.context.stroke();
		this.context.closePath();	
		requestAnimationFrame(() => {this.update()});
	}

	componentWillUnmount():void {
		// this is probably wrong
		window.removeEventListener('keyup', this.handleKeys.bind(this, true));
	}

	handleKeys(value:boolean, e:any):void{
		console.log(e, value);
		const keys = this.keys;

		if(e.keyCode === KEY.LEFT || e.keyCode === KEY.A){keys.left = value;}
		if(e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) {keys.right = value;}
		if(e["keyCode"] === KEY.UP || e.keyCode === KEY.W) {keys.up = value;}
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
		})
	}

	update():void{
		requestAnimationFrame(() => {this.update()});
	}

	updatePlayer():void{

		this.player.render(this.keys);
	}

}
