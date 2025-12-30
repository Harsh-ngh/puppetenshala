import CredentialModel from "../Models/Credentials.model.js";
import { startPuppeteerFlow } from "../Utils/puppeteerFlow.js";

const runAutomation = async (credentialId, formData) => {
  try {
    console.log("Automation started for:", credentialId);

    await CredentialModel.findByIdAndUpdate(credentialId, { status: "RUNNING" });

    await startPuppeteerFlow(formData);

    await CredentialModel.findByIdAndUpdate(credentialId, { status: "COMPLETED" });

    console.log("Automation finished:", credentialId);

  } catch (error) {
    console.error("Automation failed:", error);

    await CredentialModel.findByIdAndUpdate(credentialId, { status: "FAILED" });
  }
};

export default runAutomation;
