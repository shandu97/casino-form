import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

import Main from "./components/Main";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <MuiThemeProvider>
      <div className="App">
        <nav style={{ width: "100%", padding: "2rem 0" }}>
          <RaisedButton
            label={t("Language.1")}
            secondary={true}
            style={styles.button}
            onClick={() => handleClick("en")}
          />
          <RaisedButton
            label={t("Language.2")}
            secondary={true}
            style={styles.button}
            onClick={() => handleClick("hr")}
          />
        </nav>
        <Main />
      </div>
    </MuiThemeProvider>
  );
}

const styles = {
  button: {
    margin: 15
  }
};

export default App;
