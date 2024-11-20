# To-Do List Application

This is a full-stack To-Do List application built as a portfolio project to showcase my skills in modern web development. The application uses **React**, **TypeScript**, **Tanstack Query**, and **React Router** on the frontend, while the backend is powered by **NestJS** and **Prisma**. It features a simple and responsive UI with a focus on reusable components and efficient data handling.

## Getting Started

Follow these steps to run the application locally:

1. Clone the repository:
   ```
   git clone https://github.com/akella64/todo-app.git
   ```

**Backend setup:**:

1. Navigate to the backend directory:

```
cd ./backend
```

2. Install dependencies:

```
npm i
```

3. Create the **.env** file

```
cp .env-sample .env
```

4. Run the initial Prisma migration:

```
npm run prisma:init-migrate
```

5. Start the backend application:

```
npm run dev
```

**Frontend setup:**:

1. Open a new terminal window and navigate to the frontend directory:

```
cd ./frontend
```

2. Install dependencies:

```
npm i
```

3. Create the **.env** file

```
cp .env-sample .env
```

4. Start the backend application:

```
npm run dev
```

Once both the backend and frontend are running, you can access the application in your browser at http://localhost:5173 (or the port shown in your terminal).
