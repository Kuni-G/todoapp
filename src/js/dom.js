/**
 * DOM module
 * Responsible for all UI rendering logic.
 * No business logic lives here — it only reads state and updates the DOM.
 */

import { saveTodos } from './storage.js';

// ── Internal helpers ──────────────────────────────────────────────────────────

function updateStats(todos) {
  const done     = todos.filter((t) => t.done).length;
  const progress = todos.filter((t) => !t.done).length;
  document.getElementById('count-done').textContent     = done;
  document.getElementById('count-progress').textContent = progress;
}

function saveEdit(todos, index, newText, onRender) {
  const trimmed = newText.trim();
  if (trimmed !== '') todos[index].text = trimmed;
  saveTodos(todos);
  onRender();
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Re-render the entire todo list.
 *
 * @param {Array}    todos    - Current todos array
 * @param {Function} onDelete - (index) => void
 * @param {Function} onToggle - (index) => void
 * @param {Function} onRender - () => void  (re-renders the list)
 */
export function renderTodos(todos, { onDelete, onToggle, onRender }) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  if (todos.length === 0) {
    list.innerHTML = '<p class="empty">No todos yet. Add one above!</p>';
    updateStats(todos);
    return;
  }

  todos.forEach((todo, index) => {
    // Container
    const item = document.createElement('div');
    item.className = `todo-item${todo.done ? ' done' : ''}`;

    // Text
    const textDiv = document.createElement('div');
    textDiv.className = 'todo-text';
    textDiv.textContent = todo.text;

    // Actions
    const actions = document.createElement('div');
    actions.className = 'actions';

    // Delete
    const btnDelete = document.createElement('button');
    btnDelete.className = 'btn-delete';
    btnDelete.textContent = '🗑';
    btnDelete.title = 'Delete';
    btnDelete.addEventListener('click', () => onDelete(index));

    // Edit
    const btnEdit = document.createElement('button');
    btnEdit.className = 'btn-edit';
    btnEdit.textContent = '✏️';
    btnEdit.title = 'Edit';
    btnEdit.addEventListener('click', () => {
      const editInput = document.createElement('input');
      editInput.type  = 'text';
      editInput.value = todos[index].text;
      textDiv.textContent = '';
      textDiv.appendChild(editInput);
      editInput.focus();
      editInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') saveEdit(todos, index, editInput.value, onRender);
      });
      editInput.addEventListener('blur', () => {
        saveEdit(todos, index, editInput.value, onRender);
      });
    });

    // Toggle done
    const btnDone = document.createElement('button');
    btnDone.className = 'btn-done';
    btnDone.textContent = '✅';
    btnDone.title = 'Mark as done';
    btnDone.addEventListener('click', () => onToggle(index));

    actions.append(btnDelete, btnEdit, btnDone);
    item.append(textDiv, actions);
    list.appendChild(item);
  });

  updateStats(todos);
}
