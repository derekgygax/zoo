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

### Run Tests
```bash
bun run test
```

---

### Scripts Overview

| Command                                | Description                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------|
| `bun run dev`                          | Start the development server with linting.                                                     |
| `bun run build`                        | Build the project for production.                                                              |
| `bun run start`                        | Start the production server.                                                                   |
| `bun run lint`                         | Run ESLint for code quality checks.                                                            |
| `bun run generate-api-contracts`| Generate API contracts. Use `-s` to specify services (space-separated or `all`) and `-t` for tasks (e.g., `openapi`, `types`, `zod`, `configure-schemas`). |
| `bun run test`   | Run all Jest tests.              |
| `bun run test:watch` | Run Jest in watch mode.        |

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
   - Update `FORM_DEPENDENCY_FIELD` in `config/master.ts`.


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
   - Add it to FORM_ACTIONS in config/formActions

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

---

## GitHub Actions and Protection

### GitHub Actions CI Workflow
A GitHub Actions workflow automates testing and linting on every push and pull request to `main` or `develop`.

#### Creating the Workflow
1. Create the `.github/workflows` directory in your project root folder if not already there:
   ```sh
   mkdir -p .github/workflows
   ```
2. Create a new file:
   ```sh
   touch .github/workflows/ci.yml
   ```
3. Add the following contents to `ci.yml`:
   ```yaml
   name: CI

   on:
     push:
       branches:
         - main
         - develop
     pull_request:
       branches:
         - main
         - develop

   jobs:
     test:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout code
           uses: actions/checkout@v4

         - name: Set up Bun
           uses: oven-sh/setup-bun@v1
           with:
             bun-version: latest

         - name: Install dependencies
           run: bun install

         - name: Run linting
           run: bun run lint

         - name: Run tests
           run: bun run test
   ```

### How It Works
- Runs on `push` to `main` and `develop` and on `pull_request` to these branches.
- Checks out the latest code.
- Installs dependencies using Bun.
- Runs `bun run lint` to check for linting errors.
- Runs `bun run test` to execute all tests.
- If tests or linting fail, the workflow marks the PR as failing, preventing merging.
- If all checks pass, the PR is marked as successful and is allowed to merge.

### Handling CI Results
#### If Tests Pass
- The GitHub Actions workflow succeeds.
- The PR receives a green checkmark, and merging is allowed.

#### If Tests Fail
- The PR is marked as failing, preventing merging.
- Logs of failed tests are available in the GitHub Actions tab.
- The push still occurs, but merging is blocked until the issue is resolved.

### Local Pre-Push Hook
To prevent pushing broken code locally before GitHub checks, add a Git hook.

1. Create a `pre-push` file in `.git/hooks/`:
   ```sh
   touch .git/hooks/pre-push
   ```
2. Add the following script:
   ```sh
    #!/bin/sh

    echo "Running pre-push checks..."

    # Run linting
    bun run lint
    if [ $? -ne 0 ]; then
        echo "❌ Linting failed. Fix errors before pushing."
        exit 1
    fi

    # Run tests
    bun run test
    if [ $? -ne 0 ]; then
        echo "❌ Tests failed. Fix errors before pushing."
        exit 1
    fi

    echo "✅ All checks passed. Pushing..."
    exit 0
   ```
3. Make the script executable:
   ```sh
   chmod +x .git/hooks/pre-push
   ```

This prevents local pushes if linting or tests fail before the code reaches GitHub.

### Branch Protection Rules
GitHub branch protection ensures that changes cannot be merged into `main` or `develop` unless they pass all required checks.

1. Navigate to the repository on GitHub.
2. Click on `Settings` → `Branches`.
3. Under `Branch Protection Rules`, click `Add Rule`.
4. In `Branch name pattern`, enter `main` (repeat for `develop`).
5. Enable the following options:
   - `Require a pull request before merging`
   - `Require status checks to pass before merging`
   - In `Status checks`, add:
     - `test` (runs `bun run test`)
     - `lint` (runs `bun run lint`)
   - `Require branches to be up to date before merging`
   - `Do not allow bypassing the above settings`
6. Click `Save Changes`.

This ensures that pull requests must pass tests before merging.

---

## Pull Request Workflow

### 1. Create a New Branch
Before making changes, create a new branch from `main`:
```sh
 git checkout -b feature-branch-name
```
Make your changes and commit them:
```sh
 git add .
 git commit -m "Description of changes"
```
Push the branch to GitHub:
```sh
 git push origin feature-branch-name
```

### 2. Open a Pull Request
1. Navigate to the repository on GitHub.
2. Click on the **Pull requests** tab.
3. Click **New pull request**.
4. Select the **base branch** (`main`) and the **compare branch** (your feature branch).
5. Add a **title** and **description** summarizing your changes.
6. Click **Create pull request**.

### 3. Review and Approvals
- Tests and linting will automatically run.
- The pull request must pass all **required status checks** before merging.
- If reviews are required, reviewers must approve before merging.
- As the **CODEOWNER**, you can approve your own PR, but other developers cannot approve their own.

### 4. Merge the Pull Request
Once the pull request is approved and all checks have passed:
1. Click **Merge pull request**.
2. Confirm the merge.
3. Delete the branch (optional) if it is no longer needed:
```sh
 git branch -d feature-branch-name
 git push origin --delete feature-branch-name
```

### 5. View Past Pull Requests
- Navigate to the **Pull requests** tab in the repository.
- Click **Closed** to see past merged or closed PRs.
- Each PR keeps a record of:
  - Who created it
  - When it was merged
  - Discussions and status checks
  - Associated commits and history

This ensures that all changes to `main` go through proper review, testing, and approvals.

