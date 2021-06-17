const csvtojson = require("csvtojson");
import { patient } from "./src/models/patient.js";
import { emailModel } from "./src/models/email.js";
import "regenerator-runtime/runtime";
import mongoose from "mongoose";
import { expect } from "@jest/globals";


beforeAll(async () => {
  const url =
    "mongodb+srv://Dheeraj:Dheerajch@92@cluster0.htm2w.mongodb.net/PatientDB?retryWrites=true&w=majority";
  await mongoose.connect(url, { useNewUrlParser: true });
});

describe("Unit test to comapre data between flat file and mongoDB collection", () => {
  test("Compare  data", async () => {
    let csv = [];
    await csvtojson()
      .fromFile("patientData.csv")
      .then((csvData) => {
        csv = csvData;
      });
    expect.assertions(1);
    let data = await patient.find();
    await expect(data.length).toEqual(csv.length);
  });
});

describe("Unit test to verify to test creation of emails", () => {
  test("Compare Data", async () => {
    expect.assertions(1);
    let emaildata = await emailModel.find();
    let patientdata = await patient.find({ CONSENT: "Y" });
    await expect(patientdata.length).toEqual(emaildata.length);
  });
});
describe("Unit test to verify correct creation of emails", () => {
  test("Compare Data", async () => {
    expect.assertions(1);
    let emaildata = await emailModel.find();
    await expect(emaildata[0].emails.length).toEqual(4);
  });
});

afterAll(async () => {
  mongoose.connection.close();
  console.log("Disconnected from DB");
});
