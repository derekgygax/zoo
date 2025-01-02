// run command line stuff
import { execSync } from "child_process";

import { Command } from "commander";

// cofig
import { SERVICES } from "@/config/services";
import { SCRIPTS_CONFIG } from "@/config/scripts";
import { API_BASE_URLS } from "@/config/api";


const OPENAPI_ENDPOINTS: Record<string, string> = {
  fastApi: "openapi.json",
  springBoot: "v3/api-docs",
  nestJS: "api-json"
}

const SERVICE_NAMES = Object.keys(SERVICES);

// Services and tasks definitions
const TASKS = ["openapi", "types", "zod", "clean-zod"];

const program = new Command();

program
  .option("-s, --services <services...>", `Specify services to work on. Available: all, ${SERVICE_NAMES.join(", ")}`)
  .option("-t, --tasks <tasks...>", `Specify tasks to perform. Available: all, ${TASKS.join(", ")}`)
  .option("-v, --verbose", "Enable verbose output")
  .on("--help", () => {
    console.log("\nExamples:");
    console.log("  bun build-api-contracts.ts -s animals-service -t openapi types");
    console.log("  bun build-api-contracts.ts -s all -t zod clean-zod");
    console.log("\nDefault Behavior:");
    console.log("  If no services or tasks are specified, the script will run all tasks on all services.");
  });

program.parse(process.argv);

const options = program.opts();

// give everything a little space 
console.log("\n");

// is Verbose
const isVerbose: boolean = options.verbose ? true : false;

// Validate services
const services = !options.services || options.services.includes("all")
  ? SERVICE_NAMES
  : options.services;

const invalidServices = services.filter((service: string) => !SERVICE_NAMES.includes(service) && service !== "all");
if (invalidServices.length > 0) {
  console.error(`Error: Invalid service(s): ${invalidServices.join(", ")}.`);
  console.log(`Valid services are: ${SERVICE_NAMES.join(", ")}, or use "all".`);
  process.exit(1);
}

// Validate tasks
const tasks = !options.tasks || options.tasks.includes("all")
  ? TASKS
  : options.tasks;

const invalidTasks = tasks.filter((task: string) => !TASKS.includes(task));
if (invalidTasks.length > 0) {
  console.error(`Error: Invalid task(s): ${invalidTasks.join(", ")}.`);
  console.log(`Valid tasks are: ${TASKS.join(", ")}.`);
  process.exit(1);
}

console.log("Working on the services:");
console.log(`  ${services.join(", ")}\n\n`);

console.log("Working on the tasks:");
console.log(`  ${tasks.join(", ")}\n`);


for (const service of services) {

  const openAPI_Url = `${API_BASE_URLS[service]}/${OPENAPI_ENDPOINTS[SERVICES[service].framework]}`;

  const openApiPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.openAPI}`;
  const typesPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.types}`;
  const originalZodPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.originalZod}`;
  const cleanedZodPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.cleanZod}`;

  if (isVerbose) {
    console.log(`Working on the service: ${service}\n`);
    console.log(`  openAPI_Url: ${openAPI_Url}`);
    console.log(`  openApiPath: ${openApiPath}`);
    console.log(`  typesPath: ${typesPath}`);
    console.log(`  originalZodPath: ${originalZodPath}`);
    console.log(`  cleanedZodPath: ${cleanedZodPath}\n`);
  }

  if (tasks.includes("openapi")) {
    // get the open api from the endpoint
    execSync(`curl ${openAPI_Url} -o ${openApiPath}`, { stdio: "inherit" });
  }

  if (tasks.includes("types")) {
    // build the types
    execSync(`bunx openapi-typescript ${openApiPath} -o ${typesPath}`, { stdio: "inherit" });
  }

  if (tasks.includes("zod")) {
    // build zod schemas
    execSync(`bunx openapi-zod-client ${openApiPath} --output ${originalZodPath}`, { stdio: "inherit" });
  }

  console.log("\n\n");
}

if (tasks.includes("clean-zod")) {
  // clean zod
  execSync(`bun run scripts/clean-zod.ts`);
}