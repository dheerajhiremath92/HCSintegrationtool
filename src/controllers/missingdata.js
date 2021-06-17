import { patient } from "../models/patient.js";

export const missingEmail = async (req, res) => {
  try {
    const missingemaildata = await patient.find({
      CONSENT: "Y",
      EmailAddress: "",
    });
    res.status(200).json(missingemaildata);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const missingFname = async (req, res) => {
  try {
    const missingfnamedata = await patient.find({ FirstName: "" });
    res.status(200).json(missingfnamedata);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
