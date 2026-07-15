# To-Do List App

A full-stack To-Do List application built with the MERN stack. The app lets users add tasks, view their task list, mark tasks as complete, and delete tasks through a clean responsive web interface.

This repository also includes the original Python command-line version of the project.

## Features

- Add new tasks
- View all tasks
- Mark tasks as complete
- Delete tasks
- Responsive React UI
- MongoDB database storage
- Express REST API
- Original Python CLI version included

## Tech Stack

### Frontend

- React
- Vite
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Other

- Git
- GitHub
- MongoDB Atlas

## Project Structure

```text
todo-mern-app/
  client/
    src/
      App.jsx
      main.jsx
      styles.css
    index.html
    package.json

  server/
    models/
      Task.js
    routes/
      taskRoutes.js
    index.js
    package.json

  to_do_list.py
  README.md
  .gitignore
```

## Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```


For frontend deployment, use:

```env
VITE_API_URL=https://your-backend-url.com/api/tasks
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/jaiyeshw/To_Do_list.git
cd To_Do_list
```

### 2. Start the backend

```bash
cd server
npm install
npm run dev
```

The backend runs on:

```text
http://localhost:5000
```

### 3. Start the frontend

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/tasks` | Get all tasks |
| POST | `/api/tasks` | Add a new task |
| PATCH | `/api/tasks/:id/complete` | Mark a task as complete |
| DELETE | `/api/tasks/:id` | Delete a task |

## Python Version

The original beginner-friendly Python version is available in:

```text
to_do_list.py
```

Run it with:

```bash
python to_do_list.py
```

## Deployment

Recommended deployment:

- Frontend: Vercel or Netlify
- Backend: Render or Railway
- Database: MongoDB Atlas

When deploying, add your MongoDB connection string as an environment variable on the backend hosting platform.

## What I Learned

- Building a full-stack MERN application
- Creating REST API routes with Express
- Connecting Node.js to MongoDB using Mongoose
- Managing frontend state in React
- Using environment variables safely

## Author

Made by [Jaiyesh Wadhwa](https://github.com/jaiyeshw)
