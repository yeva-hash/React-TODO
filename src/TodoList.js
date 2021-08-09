import React from "react";

export class TodoList extends React.Component {
    render() {
        if(this.props.items.length !== 0) {
            return this.props.items.map((e) => {
                return <p>todo form</p>
            })
        } else {
            return ""
        }
    }
}