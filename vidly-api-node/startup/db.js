const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  console.log("zrq db 2300", db);

  const zrqDb =
    "mongodb+srv://adminzrq:CRubQCyZQiNlni5A@cluster0.sv26h.mongodb.net/vidly?retryWrites=true&w=majority";
  // const zrqDb =
  //   "mongodb+srv://admin:CRubQCyZQiNlni5A@zrqcluster.rmomd.mongodb.net/?retryWrites=true&w=majority";
  mongoose
    .connect(zrqDb.toString(), options)
    .then(() => console.log(`Connected to ${zrqDb}...`));

    // .then(() => winston.info(`Connected to ${db}...`));
};
