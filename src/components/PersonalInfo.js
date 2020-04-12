import React from "react";
import "../styles.css";

import { useTranslation, withTranslation, Trans } from "react-i18next";

import data from "../data/sample.json";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Paper from "@material-ui/core/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class PersonalInfo extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep1();
  };
  render() {
    const { t, i18n } = this.props;
    const { handleChange, values, firstName, lastName } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar className="bar" title={t("Header.1")} />
          <Paper className="paper" variant="outlined">
            <form autoComplete="off" noValidate className="form">
              <TextField
                required
                type="text"
                name="firstName"
                className={
                  values.formErrorsMessages.firstName.length > 0
                    ? "error"
                    : null
                }
                label="Filled"
                hintText={firstName}
                defaultValue={values.firstName}
                floatingLabelText={t("MainInfo.1")}
                onChange={handleChange}
              />
              <br />
              {values.formErrorsMessages.firstName.length > 0 && (
                <span className="errorMessage">
                  {values.formErrorsMessages.firstName}
                </span>
              )}
              <br />
              <TextField
                type="text"
                name="lastName"
                className={
                  values.formErrorsMessages.lastName.length > 0 ? "error" : null
                }
                hintText={lastName}
                defaultValue={values.lastName}
                floatingLabelText={t("MainInfo.2")}
                onChange={handleChange}
              />
              <br />
              {values.formErrorsMessages.lastName.length > 0 && (
                <span className="errorMessage">
                  {values.formErrorsMessages.lastName}
                </span>
              )}
              <br />
              <RaisedButton
                label={t("Button.1")}
                primary={true}
                style={styles.button}
                className="Next"
                onClick={this.continue}
              />
            </form>
          </Paper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

const PersonalInfoTranslated = withTranslation()(PersonalInfo);
export default PersonalInfoTranslated;
