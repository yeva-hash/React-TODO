import React from "react";
import {AddForm} from "./AddForm"

export class Container extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Todos</h1>
                <AddForm  />
            </div>
        )
    }
}