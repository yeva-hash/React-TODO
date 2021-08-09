import React from "react";
import {TodoList} from "./TodoList"
import cuid from 'cuid';

export class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.arrOfItems = []
    }
    addItemToArr = () => {
        const input = document.querySelector(".item-name")
        const item = {
            id: cuid(),
            name: input.value
        }
        this.arrOfItems.push(item)
    }
    render() {
        if(this.arrOfItems.length > 0) {
            return(<TodoList items = {this.arrOfItems}/>)
        } else {
          return(
            <>
            <div className = "form-container">
                <input type = "text" className = "item-name" />
                <button onClick = {this.addItemToArr} className="item-add">Add item</button>
            </div>
            </>
        )  
        }
    }
    
}