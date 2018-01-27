import * as React from "react";

// App Controller that handles of the functionality of the main App View
export default class App extends React.Component {
	screen: any;

	constructor() {
		super({});
		this.screen = {
			width: window.innerWidth,
			height: window.innerHeight,
			ratio: window.devicePixelRatio || 1
		};
	}
}
