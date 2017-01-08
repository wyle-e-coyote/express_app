import * as React from "react";
import * as ReactDOM from "react-dom";

import "./less/style.less";
import Hello from "./components/hello";


document.addEventListener("DOMContentLoaded", () => {
    const helloMessage = document.getElementById("message").innerHTML;

    ReactDOM.render(
       <Hello message="Testing" />,
       document.getElementById("hello_message"),
    );
});
