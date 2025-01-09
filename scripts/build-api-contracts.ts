// command line stuff
import { execSync } from "child_process";
import { Command } from "commander";

// types
import { SERVICE } from "@/types/service";
import { TASK } from "@/types/script";

// cofig
import { SERVICES } from "@/config/services";
import { SCRIPTS_CONFIG, TASKS, OPENAPI_ENDPOINTS } from "@/config/scripts";
import { API_BASE_URLS } from "@/config/api";

// scripts
import { configureSchemas } from "./configure-schemas";

// check if the input string is a valid service
const isService = (value: string): value is SERVICE => {
  return Object.values(SERVICE).includes(value as SERVICE);
};

// check if the input string is a valid service
const isTask = (value: string): value is TASK => {
  return Object.values(TASKS).includes(value as TASK);
};

const SERVICE_NAMES = Object.keys(SERVICES) as SERVICE[];

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
let services: SERVICE[] = [];
const invalidServices: string[] = [];
if (!options.services || options.services.includes("all")) {
  services = [...SERVICE_NAMES];
} else {
  options.services.forEach((service: string) => {
    if (isService(service)) {
      services.push(service);
    } else {
      invalidServices.push(service);
    }
  });
}
if (invalidServices.length > 0) {
  console.error(`Error: Invalid service(s): ${invalidServices.join(", ")}.`);
  console.log(`Valid services are: ${SERVICE_NAMES.join(", ")}, or use "all".`);
  process.exit(1);
}

// Validate tasks
let tasks: TASK[] = [];
const invalidTasks: string[] = [];
if (!options.tasks || options.tasks.includes("all")) {
  tasks = TASKS;
} else {
  options.tasks.forEach((task: string) => {
    if (isTask(task)) {
      tasks.push(task);
    } else {
      invalidTasks.push(task);
    }
  })
}
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

  if (tasks.includes(TASK.OPEN_API)) {
    // get the open api from the endpoint
    execSync(`curl ${openAPI_Url} -o ${openApiPath}`, { stdio: "inherit" });
  }

  if (tasks.includes(TASK.TYPES)) {
    // build the types
    execSync(`bunx openapi-typescript ${openApiPath} -o ${typesPath}`, { stdio: "inherit" });
  }

  if (tasks.includes(TASK.ZOD)) {
    // build zod schemas
    execSync(`bunx openapi-zod-client ${openApiPath} --output ${originalZodPath}`, { stdio: "inherit" });
  }

  if (tasks.includes(TASK.ENHANCE_ZOD)) {
    configureSchemas(service, openApiPath, originalZodPath, cleanedZodPath);
  }

  console.log("\n");
}