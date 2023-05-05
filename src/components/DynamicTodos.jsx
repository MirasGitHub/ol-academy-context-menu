import React from 'react'
import useFetchAllTodos from '../hooks/useFetchAllTodos';
import useFetchTodo from '../hooks/useFetchTodo' 

const DynamicTodos = () => {

    const { todo } = useFetchTodo({ id: 7});
    const { todos } = useFetchAllTodos();

  return (
    <div>
      <h1>Dynamic Todos</h1>
      
      {/* <div key={todo.id}>
                    <h2>
                        <b>Title:</b> {todo.title}
                    </h2>
                    <p>
                        <b>Completed:</b> {todo.completed ? "Yes" : "No"}
                    </p>
                    <p>
                        <b>Id:</b> {todo.id}
                    </p>
                    <p>
                        <b>User Id:</b> {todo.userId}
                    </p>
            </div>  */}


        {todos && todos.map((todo) => {
            return (
            <div key={todo.id}>
                <h2>
                    <b>Title:</b> {todo.title}
                </h2>
                <p>
                    <b>Completed:</b> {todo.completed ? "Yes" : "No"}
                </p>
                <p>
                    <b>Id:</b> {todo.id}
                </p>
                <p>
                    <b>User Id:</b> {todo.userId}
                </p>
            </div> )
        })}

      {!todos && <p>Loading...</p>}


    </div>
  )
  
}

export default DynamicTodos
