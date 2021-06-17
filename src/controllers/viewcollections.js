import { patient } from "../models/patient.js";
import { emailModel } from "../models/email.js";

export const viewpatients = async (req, res) => {
  try {
    const data = await patient.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const viewemails = async (req, res) => {
  try {
    const data = await emailModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
