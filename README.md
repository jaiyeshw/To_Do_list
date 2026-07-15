# To-Do List App

This repository contains a MERN To-Do List website and the original Python command-line version.

## MERN Version

A full-stack to-do list app using:

- MongoDB
- Express
- React
- Node.js

### Features

- Add tasks
- View all tasks
- Delete tasks
- Mark tasks as complete
- Clean responsive website UI

### Local Setup

Server:

```bash
cd server
npm install
copy .env.example .env
npm run dev
```

Put your MongoDB connection string inside `server/.env`:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Client:

```bash
cd client
npm install
npm run dev
```

The React app will run at:

```text
http://localhost:5173
```

Do not upload real `.env` files to GitHub.

## Python Version

A simple command-line To-Do List app built with Python.

### Python Features

- Add new tasks
- View all tasks
- Delete tasks
- Mark tasks as complete
- Menu-based interface
- Basic input validation using `try/except`

### Run Python App

```bash
python to_do_list.py
```

## Deploy

Deploy the `server` folder on Render and the `client` folder on Vercel.

Backend environment variable:

```env
MONGODB_URI=your_mongodb_connection_string
```

Frontend environment variable:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com/api/tasks
```
