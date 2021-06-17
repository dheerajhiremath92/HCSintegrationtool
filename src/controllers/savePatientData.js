import { patient } from "../models/patient.js";

export const savePatient = (arr) => {
  patient.findOne({ _id: arr.MemberID },  (err, exam) => {
    if (err) {
      console.log(err);
    }
    if (exam) {
      console.log(
        `Patient data with Member ID ${arr.MemberID} has already  been saved into the database`
      );
    } else {
      let doc =  new patient({
        _id: arr.MemberID,
        ProgramIdentifier: arr.ProgramIdentifier,
        DataSource: arr.DataSource,
        CardNumber: arr.CardNumber,
        MemberID: arr.MemberID,
        FirstName: arr.FirstName,
        LastName: arr.LastName,
        DateofBirth: arr.DateofBirth,
        Address1: arr.Address1,
        Address2: arr.Address2,
        City: arr.City,
        State: arr.State,
        Zipcode: arr.Zipcode,
        Telephonenumber: arr.Telephonenumber,
        EmailAddress: arr.EmailAddress,
        CONSENT: arr.CONSENT,
        MobilePhone: arr.MobilePhone,
      });
      doc.save()
      console.log(doc);
    }
  });
};
