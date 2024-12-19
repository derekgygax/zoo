
import { OpenAPIV3 } from "openapi-types";

// layouts
import { PageSection } from "@/app/_layouts/pageSection/PageSection";

// client components
// import { FormWithServerAction } from "@/app/client_components/formWithServerAction/FormWithServerAction";
// import { FormField } from "@/app/client_components/formField/FormField";

// server actions
import { addAnimalAction } from "@/app/_actions/animals";

interface AnimalFormProps {
  formName: string;
  formLabel: string;
  fieldsConfig: OpenAPIV3.SchemaObject
}

import { AnimalFormz } from "@/app/client_components/asdfsd";

export const AnimalForm = ({ formName, formLabel }: AnimalFormProps) => {
  return (
    <PageSection>

      <AnimalFormz
        formName={formName}
        formLabel={formLabel}
        formServerAction={addAnimalAction}
      />

      {/* <FormWithServerAction
        formServerAction={addAnimalAction}
        formName={formLabel || formName}
      >
        <>
          {
            // TODO REALLY?? should you do it like this ... 
            // I feel like to make sure order is followed you 
            // should sort by name or something ... maybe define in the python side
            // some metadata or something
            Object.entries(fieldsConfig.properties ?? []).map(
              ([key, value]) => {
                // TODO YOU DO NOT LIKE THIS!!! forcing a type ...
                const fieldConfig = value as OpenAPIV3.SchemaObject;
                return (
                  <FormField
                    key={key}
                    name={key}
                    fieldConfig={fieldConfig}
                  />
                );
              }
            )
          }
        </>
      </FormWithServerAction> */}
    </PageSection >
  );
}
