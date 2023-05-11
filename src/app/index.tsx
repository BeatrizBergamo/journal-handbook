import * as React from "react";

import { GlobalStyles } from "@components/global";
import { Router } from "modules/router";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Router />
    </React.Fragment>
  );
};
