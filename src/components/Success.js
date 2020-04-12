import React from "react";
import "../styles.css";

import { useTranslation, withTranslation, Trans } from "react-i18next";

import { DotScale } from "styled-loaders-react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends React.Component {
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
  render() {
    const { t, i18n } = this.props;
    return (
      <MuiThemeProvider>
        {this.state.loading ? (
          <DotScale color="#ff4081" />
        ) : (
          <React.Fragment>
            <AppBar className="bar" title={t("Header.4")} />
            <h1 className="success-text">{t("Success.1")}</h1>
            <p className="success-text">{t("Success.2")}</p>
          </React.Fragment>
        )}
      </MuiThemeProvider>
    );
  }
}

const SuccessTranslated = withTranslation()(Success);
export default SuccessTranslated;
