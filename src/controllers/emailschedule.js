import { patient } from "../models/patient.js";
import express, { response, Router } from "express";

import { emailModel } from "../models/email.js";
var scheduled_date = new Date();

export const ConsentY = async (req, res) => {
  try {
    var tempvalarray = [];
    const data = await patient.find({ CONSENT: "Y" });
    await data.forEach(async (element) => {
      var tempvals = await finddataemail(element);
      if (tempvals) {
        console.log(`Email already scheduled for MeMber ${tempvals._id}`);
      } else {
        console.log(`Scheduling email for Member ${element.MemberID}`);
        createemails(element);
        tempvalarray.push(element);
      }
    });
  } catch (err) {
    console.log(err);
  }
  res.status(200).send("Scheduling completed");
};

export const finddataemail = async (data) => {
  try {
    var tempdata = await emailModel.findOne({ _id: data.MemberID });
    return tempdata;
  } catch (error) {
    console.log(error);
  }
};

export const createemails = async (dt) => {
  var emailarray = [];
  for (let day = 0; day < 4; day++) {
    scheduled_date = new Date().setDate(new Date().getDate() + day);
    console.log(
      `${dt.FirstName} ${dt.LastName} : Day ${
        day + 1
      } , scheduled_date : ${new Date(scheduled_date).toLocaleDateString()}`
    );
    emailarray.push({
      _id: `Day ${day + 1}`,
      Info: `${dt.FirstName} ${dt.LastName} : Day ${
        day + 1
      } , Email scheduled_date : ${new Date(
        scheduled_date
      ).toLocaleDateString()}`,
      FirstName: dt.FirstName,
      LastName: dt.LastName,
      scheduled_date: new Date(scheduled_date).toDateString(),
    });
  }
  let emaildoc = new emailModel({
    _id: dt.MemberID,
    emails: emailarray,
  });
  await emaildoc.save();
};
