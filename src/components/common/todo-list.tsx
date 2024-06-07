import { Todo } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import useTodos from "@/hooks/use-todos";

const TodoCard = (item: Todo) => {
  const { deleteTodo } = useTodos();
  return (
    <div className="p-2 border border-slate-200 shadow-sm rounded-lg max-h-28 overflow-y-auto scrollbar relative group">
      <h3 className="text-lg font-semibold mb-0 text-primary">{item.title}</h3>
      <p className="text-sm text-primary/80 mt-1">{item.content}</p>
      <span className="text-xs text-gray-600 flex justify-end mt-2">
        {formatDate(item.created_at)}
      </span>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="absolute top-1 right-1 group-hover:flex md:hidden flex"
        onClick={() => deleteTodo(item.id)}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
};

interface TodoListProps {
  todos: Todo[];
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div className="mt-3 flex flex-col gap-4">
      {todos.map((item) => (
        <TodoCard key={item.id} {...item} />
      ))}
    </div>
  );
}
