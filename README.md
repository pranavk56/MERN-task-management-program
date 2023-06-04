# Task Management Program

Basic task management CRUD operations

## Features

- Add task
- Update task
- View tasks
- Delete tasks

## Tools and Technologies

- HTML
- CSS
- Javascript
- Tailwind CSS
- Node.js
- Express.js
- React
- Mongodb

## Prerequisites

- Node.js and MongoDB must be installed.

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install-all
   ```

2. Create a file named ".env" inside the backend folder. Add data from .env.example file.

3. Start the application

   ```sh
   npm run dev
   ```

4. Run MongoDB service in another terminal with the command

   ```sh
   mongod
   ```

5. Go to http://localhost:3000 and play!

## Backend API

<pre>
- GET      /api/tasks
- GET      /api/tasks/:taskId
- POST     /api/tasks
- PUT      /api/tasks/:taskId
- DELETE   /api/tasks/:taskId
</pre>

## Frontend pages

<pre>
- /                 Home Screen and tasks dashboard
- /tasks/add        Create new task
- /tasks/:taskId    Edit a task
</pre>
