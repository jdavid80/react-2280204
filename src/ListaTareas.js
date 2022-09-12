import React, { Component } from 'react';

class ListaTareas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "David",
            todoItems: [/* {
                        accion: "Endulzar a mi amigo secreto",
                        done: false,
                    },
                    {
                        accion: "Calificar Resultados",
                        done: true,
                    },
                    {
                        accion: "Comprar Almuerzo",
                        done: false,
                    }, */
                ],
            newItemText: "",
        }
    }

    UpdateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value });
    }

    CreateNewTodo = () => {
        if (!this.state.todoItems
            .find(item => item.accion === this.state.newItemText)) {
                this.setState({
                    todoItems: [...this.state.todoItems,
                    { accion: this.state.newItemText, done: false}],
                    newItemText: "",
            });
        }
    }

    ToggleTodo = (todo) => this.setState({ todoItems: 
        this.state.todoItems.map(item => item.accion === todo.accion
            ? { ...item, done: !item.done } : item) });

    TodoTableRows = () => this.state.todoItems.map(item => 
        <tr key={ item.accion}>
            <td>{ item.accion }</td>
            <td>
                <input type="checkbox" checked= { item.done }
                    onChange={ () => this.ToggleTodo(item)} ></input>
            </td>
        </tr>
        );

    render = () =>
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    Lista de Tareas de { this.state.userName}
                    ({ this.state.todoItems.filter(t => !t.done).length } Cosas por hacer )
                </h4>
                <div className="container-fluid">
                    <div className="my-1">
                        <input className="form-control"
                            value={ this.state.newItemText }
                            onChange={ this.UpdateNewTextValue }></input>
                        <button className="btn btn-primary mt-1"
                            onClick={ this.CreateNewTodo }>Add</button>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Descripción</th></tr>
                        </thead>
                        <tbody> { this.TodoTableRows() }</tbody>
                    </table>
                </div>
            </div>
}

export default ListaTareas;