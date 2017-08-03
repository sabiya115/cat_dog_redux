import reducer from "./reducers/index";
import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import AppComponent from "./component/HomePage";
import {Provider} from "react-redux";

var store=createStore(reducer);

ReactDom.render(
	<Provider store={store}>
		< AppComponent />
	</Provider>,
	document.getElementById("root")
);

