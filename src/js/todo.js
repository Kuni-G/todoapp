/**
 * Todo factory
 * Creates a plain-object representation of a single todo item.
 *
 * @param {string} text - The task description
 * @returns {{ id: string, text: string, done: boolean, createdAt: string }}
 */
const createTodo = (text) => ({
  id: `todo-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  text,
  done: false,
  createdAt: new Date().toISOString(),
});

export default createTodo;
