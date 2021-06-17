import mongoose from "mongoose";

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  _id: Number,
  ProgramIdentifier: Number,
  DataSource: String,
  CardNumber: Number,
  MemberID: Number,
  FirstName: String,
  LastName: String,
  DateofBirth: Date,
  Address1: String,
  Address2: String,
  City: String,
  State: String,
  Zipcode: Number,
  Telephonenumber: Number,
  EmailAddress: String,
  CONSENT: String,
  MobilePhone: Number,
});

const patient = mongoose.model("patient", patientSchema);
export { patient };
// ﻿Program Identifier,Data Source,Card Number,Member ID,First Name,"Last
// Name",Date of Birth,Address 1,Address 2,City,State,Zip code,Telephone number,Email Address,CONSENT,Mobile Phone
// 50777445,WEB 3RD PARTY,342121211,43233,LOAD,TEST 0,4/29/00,"3100 S
// Ashley Drive",,Chandler,AZ,85286,,test0@humancaresystems.com,Y,1234567912
