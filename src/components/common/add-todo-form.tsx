import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "This field is required",
    })
    .max(50),
  content: z.string().min(1, {
    message: "This field is required",
  }),
});

export type TodoItem = z.infer<typeof formSchema>;

interface AddTodoFormProps {
  onSubmit: (data: TodoItem, reset: () => void) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const form = useForm<TodoItem>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const handleSubmit = (data: TodoItem) => {
    onSubmit(data, form.reset);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-3 space-y-3"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">Add Todo</Button>
      </form>
    </Form>
  );
}
