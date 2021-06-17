import express from "express";

import mongoose from "mongoose";
import { missingdatarouter } from "./src/routes/missingdataroutes.js";
import { scheduleemailrouter } from "./src/routes/scheduleemailroute.js";
import { viewcollectionsrouter } from "./src/routes/viewcollectionsroute.js";
import { dropdbrouter } from "./src/routes/dropdbroutes.js";
const app = express();
app.use(express.json());

app.use(missingdatarouter);
app.use(scheduleemailrouter);
app.use(viewcollectionsrouter);
app.use(dropdbrouter);

import { datastream } from "./src/controllers/readcsvdata.js";
const MONGODB_URI =
  "mongodb+srv://Dheeraj:Dheerajch@92@cluster0.htm2w.mongodb.net/PatientDB?retryWrites=true&w=majority";
const start = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log("Listening on port 3000!!!!!!!!");
  });

  datastream();
};

start();
