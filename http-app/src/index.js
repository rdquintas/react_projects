import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//  import * as Sentry from "@sentry/react";
// import { BrowserTracing } from "@sentry/tracing";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// Sentry.init({
//   dsn: "https://e400efbff800471883b98a7a53d88574@o1296427.ingest.sentry.io/6523091",
//   integrations: [new BrowserTracing()],

//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
