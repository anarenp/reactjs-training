import React, { Component } from 'react';


export default class TodoItems extends React.Component {

	constructor() {
		super();
		this.state={
			todoItems: []
		}

	}

	handleClick() {
		const todoItems = this.state.todoItems;
		todoItems.push(this.textbox.value);
		this.textbox.value = "";

		this.setState({

			todoItems: todoItems
		});

	}

handleRemove(data) {
		console.log("remove----"+data.item);
		const todoItems = this.state.todoItems;
		var index = todoItems.indexOf(data.item);
		if (index !== -1) todoItems.splice(index,1);
		console.log("indexof ---->"+index);

		


		this.setState({

			todoItems: todoItems
		});
}
	


	render() {
		return (

			<div className = "TodoItems">
				<input
					type="text"
					ref={textbox=>this.textbox=textbox}
				/>
				<button onClick={this.handleClick.bind(this)}>
					Add Item 
				</button>
				<p>Todo Items</p>
				<ul>
					{this.state.todoItems.map(item => <li>{item}
						<button onClick={this.handleRemove.bind(this,{item})}>
							Remove Item
						</button>

					</li>)}
					
				</ul>
			</div>


			);


	}

}