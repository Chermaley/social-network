import ReactDOM from "react-dom";
import React from "react";
import MainApp from './app';

it("render app without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<MainApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


