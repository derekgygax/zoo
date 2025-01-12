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
| `bun run generate-api-contracts`| Generate API contracts. Use `-s` to specify services (space-separated or `all`) and `-t` for tasks (e.g., `openapi`, `types`, `zod`, `configure-schemas`). |


### Example Usage for `generate-api-contracts`
- Default does all services and all tasks:
  ```bash
  bun run script-generate-api-contracts
  ```
- Be explicit to do all services and all tasks:
  ```bash
  bun run script-generate-api-contracts -s all -t all
  ```
- Just do the tasks of building and cleaning the zod for animals-service and food-service:
  ```bash
  bun run script-generate-api-contracts -s animals-service food-service -t zod clean-zod
  ```
  
---

### Add a New Type

1. **Generate API Contracts**:  
   Run the following command to generate the updated API contracts for your service:  
   ```bash
   bun run generate-api-contracts -s YOUR_SERVICE
   ```

2. **Add the Type**:  
   Navigate to the respective types file in the `types` folder and add your new type definition. Ensure it aligns with the API specification.

---

### Add a New Form

1. **Define Fetch Dependencies**:  
   If the form requires dropdowns or fields populated by fetched data:
   - Update `FIELD_REQUIRING_FETCHED_DATA` in `config/master.ts`.

2. **Define Field Labels and Values**:  
   In `config/form.ts`, update:
   - `DependencyFieldKeys` and `FORM_FIELD_REQUIRING_FETCHED_DATA_KEYS` to define how the fields will display labels and values on the front end.

3. **Generate API Contracts**:  
   Run the following command to generate the latest contracts for your service:  
   ```bash
   bun run generate-api-contracts -s YOUR_SERVICE
   ```

4. **Add API Endpoints**:  
   Update `apis.ts` with any new endpoints required for the form.

5. **Update Form Configurations**:  
   In `forms.ts`, update the following to include the new form:
   - `FORM_NAME`
   - `FORM_SCHEMA_NAME`
   - `FORM_CONFIGS`

6. **Define Zod Schema**:  
   Add the Zod schema for validation in `zodSchemas.ts`.

7. **Create a Page for the Form**:  
   - Create a new folder and `page.tsx` file in the appropriate location for the form's URL.
   - Add the form's URL to `config/siteUrls.ts`.

8. **Add Content File**:  
   In the `content` folder at the root of the project, create a new file with the same name and location as the form. Follow the structure of existing content files.

9. **Handle Form Actions**:  
   - Define a server action to handle the form submission in the `app/_actions` folder.  
   - Ensure the action is properly registered in `processFormAction()` at the bottom of the file.

10. **Configure the Form Page**:  
    In the `page.tsx` file:
    - Set up the `zodForm` with:
      - The server action.
      - The Zod schema.
      - Any selector options needed for dropdowns (fetched data).

11. **Update Navigation**:  
    Add links or references to the new form in:
    - `content/staff/index.ts`.
    - Other relevant locations to ensure navigation is available.

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

