import React, { useState, useEffect } from "react";

type ToDo = {
  id: number;
  text: string;
  completed: boolean;
};

export const useTodoList = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos !== null ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo: ToDo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo: ToDo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, toggleTodo };
};

const ToDo = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useTodoList();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(e.target.elements.todoText.value);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo: ToDo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
