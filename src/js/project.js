/**
 * Project factory
 * A project is a named container for todo items.
 *
 * @param {string} name - The project name
 * @returns {{ id: string, name: string, todos: Array }}
 */
const createProject = (name) => ({
  id: `project-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
  name,
  todos: [],
});

export default createProject;
