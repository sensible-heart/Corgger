import * as Backbone from "Backbone";

export default class AppModel extends Backbone.Model {
	defaults(): Backbone.ObjectHash {
		return <Backbone.ObjectHash>{
			context: null
		};
	}
	cleanUp(): void {
		this.stopListening();
		this.attributes = {};
	}
}
