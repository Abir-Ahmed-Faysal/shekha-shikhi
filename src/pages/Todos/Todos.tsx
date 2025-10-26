import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await axios.get('https://shekha-shikhi-server.vercel.app/api/todos');
        setTodos(res.data.data || []);
        setError(null);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch todos');
        setTodos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Todos List</h2>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {todos.map((todo) => (
            <div
              key={todo._id}
              className={`p-4 rounded-lg shadow-md border ${
                todo.completed ? "bg-green-100 border-green-300" : "bg-yellow-100 border-yellow-300"
              }`}
            >
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="mt-2 text-sm">
                Status:{" "}
                <span className={todo.completed ? "text-green-700" : "text-yellow-800"}>
                  {todo.completed ? "Done" : "Pending"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todos;
