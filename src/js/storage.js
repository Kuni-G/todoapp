/**
 * Storage module
 * Handles reading/writing the todo list to localStorage.
 */

const STORAGE_KEY = 'todos';

/**
 * Load todos array from localStorage.
 * @returns {Array}
 */
export const loadTodos = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

/**
 * Persist the todos array to localStorage.
 * @param {Array} todos
 */
export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};
