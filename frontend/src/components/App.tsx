import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component {
    render() {
        return <h1>Get ready for corgs!</h1>;
    }
}