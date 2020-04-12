import React from "react";
import "../styles.css";

import { useTranslation, withTranslation, Trans } from "react-i18next";

import data from "../data/sample.json";

import { DotScale } from "styled-loaders-react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Paper from "@material-ui/core/Paper";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class MoreInfo extends React.Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { t, i18n } = this.props;
    const {
      handleChange,
      values,
      handlePrivacy,
      terms,
      email,
      username,
      password,
      passwordConfirm
    } = this.props;
    return (
      <MuiThemeProvider>
        {this.state.loading ? (
          <DotScale color="#ff4081" />
        ) : (
          <React.Fragment>
            <AppBar className="bar" title={t("Header.2")} />
            <Paper className="paper" variant="outlined">
              <form autoComplete="off">
                <TextField
                  type="text"
                  name="email"
                  className={
                    values.formErrorsMessages.email.length > 0 ? "error" : null
                  }
                  hintText={email}
                  floatingLabelText={t("MoreInfo.1")}
                  onChange={handleChange}
                  defaultValue={values.email}
                />
                <br />
                {values.formErrorsMessages.email.length > 0 && (
                  <span className="errorMessage">
                    {values.formErrorsMessages.email}
                  </span>
                )}
                <br />
                <TextField
                  type="text"
                  name="username"
                  className={
                    values.formErrorsMessages.username.length > 0
                      ? "error"
                      : null
                  }
                  hintText={username}
                  floatingLabelText={t("MoreInfo.2")}
                  onChange={handleChange}
                  defaultValue={values.username}
                />
                <br />
                {values.formErrorsMessages.username.length > 0 && (
                  <span className="errorMessage">
                    {values.formErrorsMessages.username}
                  </span>
                )}
                <br />
                <TextField
                  type="password"
                  name="password"
                  className={
                    values.formErrorsMessages.password.length > 0
                      ? "error"
                      : null
                  }
                  hintText={password}
                  floatingLabelText={t("MoreInfo.3")}
                  onChange={handleChange}
                  defaultValue={values.password}
                />
                <br />
                {values.formErrorsMessages.password.length > 0 && (
                  <span className="errorMessage">
                    {values.formErrorsMessages.password}
                  </span>
                )}
                <br />
                <TextField
                  type="password"
                  className={
                    values.formErrorsMessages.passwordConfirm.length > 0
                      ? "error"
                      : null
                  }
                  name="passwordConfirm"
                  hintText={passwordConfirm}
                  floatingLabelText={t("MoreInfo.4")}
                  onChange={handleChange}
                  defaultValue={values.passwordConfirm}
                />
                <br />
                {values.formErrorsMessages.passwordConfirm.length > 0 && (
                  <span className="errorMessage">
                    {values.formErrorsMessages.passwordConfirm}
                  </span>
                )}
                <br />
                <input
                  type="checkbox"
                  value="terms"
                  checked={terms}
                  onChange={handlePrivacy("terms")}
                />
                <label id="label-txt" htmlFor="terms">
                  I agree to <u> Terms & Conditions</u>
                </label>
                <br />
                <RaisedButton
                  label={t("Button.2")}
                  primary={false}
                  style={styles.button}
                  className="Back"
                  onClick={this.back}
                />
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
        )}
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 25
  }
};

const MoreInfoTranslated = withTranslation()(MoreInfo);
export default MoreInfoTranslated;
