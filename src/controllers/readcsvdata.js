import { savePatient } from "./savePatientData.js";
import * as fsdata from "fs";
import csvdata from "csv-parser";

var userdata = [];
export const datastream = async () => {
  await fsdata
    .createReadStream("./patientData.csv")
    .pipe(csvdata())
    .on("data", (row) => {
      let arr = row;
      arr = JSON.parse(JSON.stringify(arr).replace(/\s(?=\w+":)/g, ""));
      userdata.push(arr);
    })
    .on("end", () => {
      console.log("success! Completed reading data from CSV");
      userdata.map((data) => {
        savePatient(data);
      });
    });
};
