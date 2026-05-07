# Todo List

A modular, Webpack-bundled to-do list app built with vanilla JS.

## Project Structure

```
todo-list/
├── dist/                  # Webpack build output
├── src/
│   ├── css/
│   │   └── style.css      # Stylesheets
│   ├── js/
│   │   ├── index.js       # Entry point
│   │   ├── dom.js         # UI rendering logic
│   │   ├── storage.js     # localStorage handling
│   │   ├── todo.js        # Todo factory/class
│   │   └── project.js     # Project factory/class
│   └── index.html         # Base HTML file
├── package.json
├── .babelrc
├── .env                   # (if necessary)
├── .gitignore
├── webpack.config.js
└── README.md
```

## Getting Started

```bash
npm install
npm run dev     # Start dev server at http://localhost:9000
npm run build   # Production build → dist/
```
