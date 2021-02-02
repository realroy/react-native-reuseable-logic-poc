import React, { createContext, FC, useState } from "react";
import { TodoItem } from "./models/TodoItem";

type TodoProviderValue = {
  text: string;
  setText: (s: string) => void;
  todoList: TodoItem[];
  addTodoItem: (content: string) => void;
};

const TodoContext = createContext<TodoProviderValue>({
  text: '',
  setText: () => {},
  todoList: [],
  addTodoItem: () => {},
});

const TodoProvider: FC<any> = (props) => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addTodoItem = (content: string) => {

    const todoItem: TodoItem = { id: todoList.length + 1, content }
    
    setTodoList([...todoList, todoItem ])
    setText('')
  } 

  return (
    <TodoContext.Provider
      value={{
        text,
        setText,
        todoList,
        addTodoItem,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

type WithTodoContextProps = TodoProviderValue

const withTodoProvider = (Component: React.ComponentType<WithTodoContextProps>) => (props: any) => (
  <TodoProvider>
    <TodoContext.Consumer>
      {(value) => <Component {...props} {...value} />}
    </TodoContext.Consumer>
  </TodoProvider>
)

export { TodoProviderValue, TodoContext, TodoProvider, withTodoProvider }
export default TodoProvider