// run command line stuff
import { execSync } from "child_process";

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

// get the arguments passed in
let args = process.argv.slice(2);
if (args.length === 0) {
  args = ['all']
}


const servicesArgs: string[] = args[0].split(",");
const services: string[] = [];
const servicesNotInZoo: string[] = [];

if (!servicesArgs.includes('all')) {
  servicesArgs.forEach((service: string) => {
    if (SERVICE_NAMES.includes(service)) {
      services.push(service);
    } else {
      servicesNotInZoo.push(service);
    }
  })

  console.error(`The following services are NOT in zoo management: ${servicesNotInZoo.join(", ")}\n`);

} else {

  if (servicesArgs.length > 1) {
    console.error(`If you put 'all' then the other services are ignored\n`)
  }
  services.push(...SERVICE_NAMES);
}

if (services.length === 0) {
  console.log("There are no services to work on\n");
  process.exit(0);
} else {
  console.log(`The following services are going to be worked on: ${services.join(", ")}\n`);
}

// console.log(process.cwd());

for (const service of services) {
  const openAPI_Url = `${API_BASE_URLS[service]}/${OPENAPI_ENDPOINTS[SERVICES[service].framework]}`;

  const openApiPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.openAPI}`;
  const typesPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.types}`;
  const originalZodSchemaPath = `${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.originalZod}`;

  console.log(`${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.openAPI}`);
  console.log(`execSync(curl ${openAPI_Url} -o ${SCRIPTS_CONFIG.fileLocation.base}/${service}/${SCRIPTS_CONFIG.fileLocation.names.openAPI}, { stdio: "inherit" })`);
  // get the open api from the endpoint
  execSync(`curl ${openAPI_Url} -o ${openApiPath}`, { stdio: "inherit" });

  // build the types
  execSync(`bunx openapi-typescript ${openApiPath} -o ${typesPath}`, { stdio: "inherit" });

  // build zod schemas
  execSync(`bunx openapi-zod-client ${openApiPath} --output ${originalZodSchemaPath}`, { stdio: "inherit" });

}

// clean zod
execSync(`bun run scripts/clean-zod.ts`);







