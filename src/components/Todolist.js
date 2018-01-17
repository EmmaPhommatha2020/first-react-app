import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Brack',
            newTodo:'',
            todos:["Walk the dog", "Take out Trash", "Clean dishes"]
        };
    }

    handleClick(){
        let newTodos = this.state.todos.slice();
        newTodos.push(this.state.newTodo);
    
        this.setState({
          todos:newTodos,
          newTodo:''
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={(event)=>{ 
                    event.preventDefault();
                    this.handleClick() 
                    }}>
                    New Todo: 
                    <input type="text" 
                    onChange={(event)=>{ this.setState({newTodo:event.target.value}) }}
                    placeholder="This is where we type"
                    value={this.state.newTodo}/>
                    <button type="submit" >Add New Todo!</button>
                </form>
                <div className="App-intro">
                This is { this.state.name }'s TODO App
                { this.state.todos.map( (todo) => (
                    <div key={todo} className="tiles">
                    { todo }
                    </div>
                ) ) }
                </div> 
            </div>
        )
    }
}

export default TodoList;