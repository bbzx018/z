import { useTodoStore } from "../store/TodoStore";

const TodoList = () => {
  const { tasks, removeTask } = useTodoStore();

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.title}
          <button onClick={() => removeTask(t.id)}>ลบ</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
