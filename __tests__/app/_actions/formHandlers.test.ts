import { formServerAction } from "@/app/_actions/formHandlers";
import { addModel, updateModel } from "@/app/_actions/serviceHandlers";
import { FormState } from "@/types/form";

jest.mock("@/app/_actions/serviceHandlers", () => ({
  addModel: jest.fn(),
  updateModel: jest.fn()
}));

jest.mock("@/config/forms", () => ({
  FORM_CONFIGS: {
    someForm: {
      service: "mockService",
      model: "mockModel",
      type: "ADD",
      zodSchemaName: "mockSchema",
    }
  },
  FORM_TYPE: {
    ADD: "ADD",
    UPDATE: "UPDATE",
  },
}));

describe("formServerAction", () => {
  let mockFormData: FormData;
  let prevState: FormState;

  beforeEach(() => {
    jest.clearAllMocks();

    mockFormData = new FormData();
    mockFormData.append("formName", "someForm");

    prevState = { success: false, message: [] };
  });

  it("should call addModel when form type is ADD", async () => {
    (addModel as jest.Mock).mockResolvedValue(["Model added successfully"]);

    const result = await formServerAction(prevState, mockFormData);

    expect(addModel).toHaveBeenCalledWith("mockService", "mockModel", "mockSchema", mockFormData);
    expect(result).toEqual({ success: true, message: ["Model added successfully"] });
  });

  it("should call updateModel when form type is UPDATE", async () => {
    const { FORM_CONFIGS } = require("@/config/forms");
    FORM_CONFIGS.someForm.type = "UPDATE";

    (updateModel as jest.Mock).mockResolvedValue(["Model updated successfully"]);

    const result = await formServerAction(prevState, mockFormData);

    expect(updateModel).toHaveBeenCalledWith("mockService", "mockModel", "mockSchema", mockFormData);
    expect(result).toEqual({ success: true, message: ["Model updated successfully"] });
  });

  it("should handle errors correctly", async () => {
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO
    // TODO

    // BROKEN!!
    // learn the mocking!!!
    jest.spyOn(require("@/app/_actions/serviceHandlers"), "addModel")
      .mockRejectedValue(new Error("Test error"));

    const result = await formServerAction(prevState, mockFormData);

    expect(result).toEqual({ success: false, message: ["Test error"] });
  });


});
