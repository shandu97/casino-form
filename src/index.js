import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";

import i18n from "./i18n";
import App from "./App";

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div>Loading</div>}>
      <App />
    </Suspense>
  </I18nextProvider>,
  document.getElementById("root")
);
