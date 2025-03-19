# arts

## Description

This project is a web application built using **Vite**, **React**, **TypeScript**, and **SCSS Modules**. It was developed as a **test task** for an internship at **Framework Team**, aimed at demonstrating proficiency in modern web development technologies and best practices.

The project utilizes:

- **React** for building the user interface.
- **TypeScript** for type safety and improved code reliability.
- **Redux Toolkit** for state management.
- **Axios** for making HTTP requests to an API.
- **SCSS Modules** for modular component styling.

## Features

- ⚡️ Fast builds with Vite
- 🛠️ Type safety with TypeScript
- � State management with Redux Toolkit
- 🌐 HTTP requests using Axios
- 🎨 Styling with SCSS Modules
- 🔄 Automatic CSS prefixing with Autoprefixer
- 📖 Pagination using the react-paginate library
- 🧹 Code linting with ESLint (Airbnb config)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/totato4/arts.git

   ```

2. Navigate to the project directory:
   cd arts

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

## Usage

After starting the development server, the application will be available at http://localhost:5173 (or another port if specified). You can interact with the application in your browser.

## Project Structure

Here’s a brief overview of the project structure:

arts/
├── public/ # Static assets
├── src/ # Source code
│ ├── api/ # API requests using Axios
│ ├── components/ # Reusable UI components
│ ├── hooks/ # Custom React hooks
│ ├── store/ # Redux store and slices and API requests using RTK query
│ ├── styles/ # Global styles and SCSS modules
│ ├── types/ # TypeScript types and interfaces
│ ├── App.tsx # Main application component
│ └── main.tsx # Entry point
├── .eslintrc.cjs # ESLint configuration
├── .prettierrc # Prettier configuration
├── .postcss.config.js # Postcss configuration
├── .gitignore # Git ignore file
├── package.json # Project dependencies and scripts
├── tsconfig.json, tsconfig.app.json, tsconfig.node.json # TypeScript configuration
└── vite.config.ts # Vite configuration

## TypeScript Configuration

The project uses multiple `tsconfig` files to handle different parts of the application:

- **`tsconfig.json`**: The base configuration file for the entire project.
- **`tsconfig.app.json`**: Configuration specific to the client-side application (React components).
- **`tsconfig.node.json`**: Configuration for Node.js-related files (e.g., Vite configuration).

Each file extends the base `tsconfig.json` and adds or overrides settings as needed.

## Available Scripts

In the project directory, you can run the following scripts:

npm run dev – Starts the development server.

npm run build – Builds the project for production.

npm run lint – Runs ESLint to check for code issues.

npm run preview – Serves the production build locally for testing.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

### `VITE_API_BASE_URL`

This variable stores the base URL for the API. It is used to make HTTP requests to the server.

Example:

```env
VITE_API_BASE_URL=https://test-front.framework.team
```

## Git Flow

This project follows the **Git Flow** workflow for branching and releases. Below is a brief overview of the main branches and their purposes:

### Main Branches

- **`main`**: The production-ready branch.
- **`develop`**: The main development branch.

### Supporting Branches

- **`feature/*`**: For developing new features.
- **`release/*`**: For preparing new releases.
- **`hotfix/*`**: For fixing critical production issues.

### Basic Workflow

1. Start a new feature:

   ```bash
   git checkout -b feature/your-feature-name develop

   ```

2. Finish a feature:

   git checkout develop
   git merge --no-ff feature/your-feature-name
   git branch -d feature/your-feature-name

3. Start a release:

   git checkout -b release/1.0.0 develop

4. Finish a release:

   git checkout main
   git merge --no-ff release/1.0.0
   git tag -a 1.0.0
   git checkout develop
   git merge --no-ff release/1.0.0
   git branch -d release/1.0.0

5. Start a hotfix:

   git checkout -b hotfix/your-hotfix-name main

6. Finish a hotfix:

   git checkout main
   git merge --no-ff hotfix/your-hotfix-name
   git tag -a 1.0.1
   git checkout develop
   git merge --no-ff hotfix/your-hotfix-name
   git branch -d hotfix/your-hotfix-name

For more details, refer to the Git Flow documentation.
