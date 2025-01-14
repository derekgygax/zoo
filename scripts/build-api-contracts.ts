// command line stuff
import { execSync } from "child_process";
import { Command } from "commander";

// master config
import { SERVICE, OPENAPI_ENDPOINTS, API_BASE_URLS } from "@/config/master";


// cofig
import { SERVICES } from "@/config/services";
import { SCRIPTS_CONFIG, SCRIPT_TASK, SCRIPT_TASKS } from "@/config/scripts";

// scripts
import { configureSchemas } from "./configure-schemas";
import { configureTypes } from "./configure-types";

// check if the input string is a valid service
const isService = (value: string): value is SERVICE => {
  return Object.values(SERVICE).includes(value as SERVICE);
};

// check if the input string is a valid service
const isTask = (value: string): value is SCRIPT_TASK => {
  return Object.values(SCRIPT_TASKS).includes(value as SCRIPT_TASK);
};

const SERVICE_NAMES = Object.keys(SERVICES) as SERVICE[];

const program = new Command();

program
  .option("-s, --services <services...>", `Specify services to work on. Available: all, ${SERVICE_NAMES.join(", ")}`)
  .option("-t, --tasks <tasks...>", `Specify tasks to perform. Available: all, ${SCRIPT_TASKS.join(", ")}`)
  .option("-v, --verbose", "Enable verbose output")
  .on("-h, --help", () => {
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
let tasks: SCRIPT_TASK[] = [];
const invalidTasks: string[] = [];
if (!options.tasks || options.tasks.includes("all")) {
  tasks = SCRIPT_TASKS;
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
  console.log(`Valid tasks are: ${SCRIPT_TASKS.join(", ")}.`);
  process.exit(1);
}

console.log("Working on the services:");
console.log(`  ${services.join(", ")}\n\n`);

console.log("Working on the tasks:");
console.log(`  ${tasks.join(", ")}\n`);


for (const service of services) {

  console.log(`Working on the service: ${service}\n`);

  const openAPI_Url = `${API_BASE_URLS[service]}/${OPENAPI_ENDPOINTS[SERVICES[service].framework]}`;

  const apiContractsBasePath = SCRIPTS_CONFIG.fileLocations.apiContracts.base;
  const apiContractsFileNames = SCRIPTS_CONFIG.fileLocations.apiContracts.fileNames;

  const openApiPath = `${apiContractsBasePath}/${service}/${apiContractsFileNames.openAPI}`;
  const originalTypesPath = `${apiContractsBasePath}/${service}/${apiContractsFileNames.types}`;
  const typesPath = `${SCRIPTS_CONFIG.fileLocations.types.base}/${service}.ts`;
  const originalZodPath = `${apiContractsBasePath}/${service}/${apiContractsFileNames.originalZod}`;
  const cleanedZodPath = `${apiContractsBasePath}/${service}/${apiContractsFileNames.cleanZod}`;
  const selectorFieldsPath = `${apiContractsBasePath}/${service}/${apiContractsFileNames.selectorFields}`;

  if (isVerbose) {
    console.log(`  openAPI_Url: ${openAPI_Url}`);
    console.log(`  openApiPath: ${openApiPath}`);
    console.log(`  originalTypesPath: ${originalTypesPath}`);
    console.log(`  typesPath: ${typesPath}`);
    console.log(`  originalZodPath: ${originalZodPath}`);
    console.log(`  cleanedZodPath: ${cleanedZodPath}\n`);
    console.log(`  selectorFieldsPath: ${selectorFieldsPath}\n`);
  }

  if (tasks.includes(SCRIPT_TASK.OPEN_API)) {
    // get the open api from the endpoint
    execSync(`curl ${openAPI_Url} -o ${openApiPath}`, { stdio: "inherit" });
  }

  if (tasks.includes(SCRIPT_TASK.TYPES)) {
    // build the types from the openAPI
    execSync(`bunx openapi-typescript ${openApiPath} -o ${originalTypesPath}`, { stdio: "inherit" });
    // configure the types so they are easier access in the app
    configureTypes(service, originalTypesPath, typesPath);
  }

  if (tasks.includes(SCRIPT_TASK.ZOD)) {
    // build zod schemas
    execSync(`bunx openapi-zod-client ${openApiPath} --output ${originalZodPath}`, { stdio: "inherit" });
  }

  if (tasks.includes(SCRIPT_TASK.CONFIGURE_SCHEMAS)) {
    configureSchemas(service, openApiPath, originalZodPath, cleanedZodPath, selectorFieldsPath);
  }

  console.log("\n");
}