
import ReactDOM from "react-dom";
import App from "./component/app";
import React from "react";
import store from "./redux/reduxStore";



const rerenderEntireTree = (state) => {

    ReactDOM.render(<App
        state={state}
        store={store}
        dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


