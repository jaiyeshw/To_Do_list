# MERN To-Do List App

A full-stack to-do list app using:

- MongoDB
- Express
- React
- Node.js

## Features

- Add tasks
- View all tasks
- Delete tasks
- Mark tasks as complete
- Clean responsive website UI

## Local Setup

### 1. Setup MongoDB

Create a free MongoDB Atlas database and copy your connection string.

### 2. Setup Server

```bash
cd server
npm install
copy .env.example .env
```

Put your MongoDB connection string inside `.env`:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Run the server:

```bash
npm run dev
```

### 3. Setup Client

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The React app will run at:

```text
http://localhost:5173
```

For local development, the app uses:

```env
VITE_API_URL=http://localhost:5000/api/tasks
```

Do not upload real `.env` files to GitHub.

## Before Pushing To GitHub

Commit these files:

- `client`
- `server`
- `.gitignore`
- `README.md`
- `server/.env.example`
- `client/.env.example`
- `package-lock.json` files

Do not commit these:

- `.env`
- `node_modules`
- `dist`
- real passwords or MongoDB connection strings

If a MongoDB password was ever shared publicly, reset it in MongoDB Atlas before deploying.

## Local Setup Commands

Server:

```bash
cd server
npm install
npm run dev
```

Client:

```bash
cd client
npm install
npm run dev
```

## Deploy

### Backend

Deploy the `server` folder on Render.

Add this environment variable on Render:

```env
MONGODB_URI=your_mongodb_connection_string
```

### Frontend

Deploy the `client` folder on Vercel.

Add this environment variable on Vercel:

```env
VITE_API_URL=https://your-render-backend-url.onrender.com/api/tasks
```

Then rebuild the frontend.
