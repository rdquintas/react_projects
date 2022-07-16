//import Raven from "raven-js";

function init() {
  // Raven.confi("ADD YOUR OWN API KEY HERE", {
  //   release: "1-0-0",
  //   environment: "development-test",
  // }).install();
}

function log(error) {
  console.log(error);
  // Raven.captureException(error);
}

export default {
  init,
  log,
};
