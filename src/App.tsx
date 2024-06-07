import AddTodoForm from "./components/common/add-todo-form";
import TodoList from "./components/common/todo-list";
import useTodos from "./hooks/use-todos";

function App() {
  const { addTodo, todos } = useTodos();
  return (
    <div className="max-w-lg mx-auto border border-accent p-3 rounded-md">
      <div>
        <h1 className="text-xl font-medium mb-5">Todo List</h1>
        <AddTodoForm onSubmit={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
