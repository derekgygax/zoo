# Zoo Management System

This is a **Next.js** project built to manage a zoo. It provides tools for **staff** to manage animals and updates, and for **visitors** to explore zoo-related information. This project uses **OpenAPI** for backend schema management and **Zod** for validation.

## Features

- **Staff Dashboard**: Manage animals, health records, and zoo updates.
- **Visitor Exploration**: Browse animal details, zoo schedules, and more.
- **Schema Automation**: OpenAPI-driven type generation and validation.
- **Modern Stack**: Next.js, React, TypeScript, and Zod for scalable development.

---

## Getting Started

### Prerequisites

Ensure you have the following tools installed:
- **[Bun](https://bun.sh/)** (recommended for speed)
- **Node.js v18+**
- **npm**, **pnpm**, or **yarn** (optional alternatives)

---

### Installation

Clone the repository:

```bash
git clone https://github.com/derekgygax/zoo.git
cd zoo
```

Install dependencies:

```bash
bun install
# or, optionally
npm install
```

---

### Generate Types and Zod Schemas to match the API microservices

To ensure everything is up-to-date with the microservices, run:

```bash
bun run generate-api-contracts
```

This will:
1. Fetch the latest microservice specifications.
2. Generate TypeScript client code for API calls.
3. Generate Zod schemas for front-end validation.
4. Generate form configurations for dynamic form rendering.

---

### Run the Development Server

Start the development server:

```bash
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the project.

---

### Scripts Overview

| Command                                | Description                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------|
| `bun run dev`                          | Start the development server with linting.                                                     |
| `bun run build`                        | Build the project for production.                                                              |
| `bun run start`                        | Start the production server.                                                                   |
| `bun run lint`                         | Run ESLint for code quality checks.                                                            |
| `bun run generate-api-contracts`| Generate API contracts. Use `-s` to specify services (space-separated or `all`) and `-t` for tasks (e.g., `openapi`, `types`, `zod`, `clean-zod`). |


### Example Usage for `generate-api-contracts`
- Generate for all services and all tasks:
  ```bash
  bun run script-generate-api-contracts -- -s all -t openapi types zod clean-zod
  ```
- Generate for specific services and tasks:
  ```bash
  bun run script-generate-api-contracts -- -s animals-service food-service -t openapi types
  ```
```

---

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Validation**: Zod
- **API Integration**: OpenAPI-driven (TypeScript client)
- **State Management**: React Hooks, Redux, and Server Actions
- **Styling**: Sass

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "Add feature XYZ"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

---

## Learn More

To learn more about the tools used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features.
- [Zod Documentation](https://zod.dev) - Schema validation made simple.
- [OpenAPI Generator](https://openapi-generator.tech/) - Generate TypeScript client code.
- [Bun](https://bun.sh) - A fast JavaScript runtime.

---

## License

This project is licensed under the MIT License.

---

## Contact

For any inquiries or issues, please reach out via [GitHub Issues](https://github.com/derekgygax/zoo/issues).

---

### Notes

- **Recommended**: Use `bun` for all scripts to ensure speed and compatibility.
- Run `bun run generate-all-api-contracts` whenever the backend schemas change.

