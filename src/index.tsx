
import 'core-js'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './my-module'


class App extends React.Component {
	render() {
		return <Hello />;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
