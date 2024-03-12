# Dirik's backend

## ℹ️ General Info

This is the repository responsible for Dirik's backend.

## 📑 Requirements

- [NodeJS](https://nodejs.org/en/) (18.x.x or higher);
- [NPM](https://www.npmjs.com/) (9.x.x or higher);
- Run **`npx simple-git-hooks`** at the project's root before the start (it will set the [pre-commit hook](https://www.npmjs.com/package/simple-git-hooks) for any commits).

## 🚀️ Simple Start

1. Clone this repository, then run **`cd dirik-backend`** **`npm install`**
2. Fill the **`.env`** file. Use the **`.env.example`** file as an example.
3. **`npx simple-git-hooks`**
4. **`npm run start:dev`** to start the dev server

👉 To format files with prettier, run **`npm run prettify`**

## ⚙️ Technologies

- [Express](https://expressjs.com/) — a backend framework.
- [PostgreSQL](https://www.postgresql.org/) - a database.
- [Prisma](https://www.prisma.io/) — an ORM.

## 📝 Git Naming Conventions

#### 🏅 Pull Request flow

```
<project-prefix>-<issue-number>: <ticket-title>
```

##### Example

- `dirik-12: Implement user authentication logic`

#### 🌳 Branch flow

```
<type>/<project-prefix>-<issue-number>-<short-desc>
```

##### Types

- task
- fix

##### Examples

- `task/dirik-12-implement-user-authentication`
- `fix/dirik-16-fix-cashbox-processing-bug`

#### 🗂 Commit flow

```
<project-prefix>-<issue-number>: <description>
```

##### Examples

- `dirik-12: Implement user authentication logic`
- `dirik-16: Fix issue with cashbox status not updating`
