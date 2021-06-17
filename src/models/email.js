import mongoose from "mongoose";

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  _id: String,
  emails: [
    {
      _id: String,
      Info: String,
      FirstName: String,
      LastName: String,
      scheduled_date: String,
    },
  ],

});

const emailModel = mongoose.model("emails", emailSchema);
export { emailModel };
// Program Identifier,Data Source,Card Number,Member ID,First Name,"Last
// Name",Date of Birth,Address 1,Address 2,City,State,Zip code,Telephone number,Email Address,CONSENT,Mobile Phone
// 50777445,WEB 3RD PARTY,342121211,43233,LOAD,TEST 0,4/29/00,"3100 S
// Ashley Drive",,Chandler,AZ,85286,,test0@humancaresystems.com,Y,1234567912

// console.log(
//   `  ${dt.FirstName} ${dt.LastName} : Day ${
//     day + 1
//   } , scheduled_date : ${new Date(
//     scheduled_date
//   ).toLocaleDateString()} `
// );
