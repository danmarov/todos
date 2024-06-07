import { type TodoItem } from "@/components/common/add-todo-form";
import { Todo } from "@/lib/types";
import { create } from "zustand";

type Store = {
  todos: Todo[];
  addTodo: (todo: TodoItem, reset: () => void) => void;
  deleteTodo: (id: number) => void;
};

const useTodos = create<Store>()((set) => ({
  todos: [],
  addTodo: (todo, reset) => {
    const newItem: Todo = {
      ...todo,
      created_at: new Date(),
      id: Date.now(),
    };
    set((state) => ({
      todos: [newItem, ...state.todos],
    }));
    reset();
  },
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));

export default useTodos;
