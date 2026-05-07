/**
 * index.js — Entry point
 * Wires together storage, todo factory, and DOM rendering.
 */



import createTodo          from './todo.js';
import { loadTodos, saveTodos } from './storage.js';
import { renderTodos }         from './dom.js';

// ── State ──────────────────────────────────────────────────────────────────────
let todos = loadTodos();

// ── Render helper ─────────────────────────────────────────────────────────────
function render() {
  renderTodos(todos, { onDelete, onToggle, onRender: render });
}

// ── Handlers ──────────────────────────────────────────────────────────────────
function addTodo() {
  const input = document.getElementById('todo-input');
  const text  = input.value.trim();

  if (!text) {
    alert('Please type something first!');
    return;
  }

  todos.push(createTodo(text));
  input.value = '';
  saveTodos(todos);
  render();
}

function onDelete(index) {
  todos.splice(index, 1);
  saveTodos(todos);
  render();
}

function onToggle(index) {
  todos[index].done = !todos[index].done;
  saveTodos(todos);
  render();
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
document.getElementById('btn-add').addEventListener('click', addTodo);

document.getElementById('todo-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodo();
});

render();
