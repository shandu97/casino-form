import React from "react";
import "../styles.css";

import PersonalInfo from "./PersonalInfo";
import MoreInfo from "./MoreInfo";
import Success from "./Success";

import * as Constants from "../constants";

class Main extends React.Component {
  state = {
    step: Constants.PERSONAL_INFO,

    firstName: null,
    lastName: null,

    email: null,
    username: null,
    password: null,
    passwordConfirm: null,

    formErrorsMessages: {
      firstName: "",
      lastName: "",

      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    },
    terms: false
  };

  nextStep1 = () => {
    const { step } = this.state;

    this.setState({
      step: step + 1
    });
  };

  nextStep = () => {
    const { step } = this.state;
    if (Constants.FORM_VALID(this.state)) {
      this.setState({
        step: step + 1
      });
    } else {
      alert("FORM INVALID! Please check all fields on step 1 and step 2.");
    }
  };

  prevStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrorsMessages = { ...this.state.formErrorsMessages };

    switch (name) {
      case "firstName":
        formErrorsMessages.firstName = Constants.FIRST_NAME_CHECK(value)
          ? ""
          : "minimum 3 characaters required";
        break;
      case "lastName":
        formErrorsMessages.lastName = Constants.LAST_NAME_CHECK(value)
          ? ""
          : "minimum 3 characaters required";
        break;
      case "email":
        formErrorsMessages.email = Constants.EMAIL_REGEX.test(value)
          ? ""
          : "invalid email address";
        break;
      case "username":
        formErrorsMessages.username = Constants.USER_NAME_CHECK(value)
          ? ""
          : "minimum 3 characters required";
        break;
      case "password":
        formErrorsMessages.password = Constants.PASSWORD_CHECK.test(value)
          ? ""
          : "minimum 9 characaters required, 1 digit, 1 uppercase and 1 lowercase";
        break;
      case "passwordConfirm":
        formErrorsMessages.passwordConfirm = Constants.PASSWORD_CHECK.test(
          value
        )
          ? ""
          : "minimum 9 characaters required, 1 digit, 1 uppercase and 1 lowercase";
        break;
      default:
        break;
    }
    this.setState({ formErrorsMessages, [name]: value });
  };

  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked });
  };

  showStep = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
      formErrorsMessages
    } = this.state;

    const values = {
      step,
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
      formErrorsMessages
    };

    if (step === Constants.PERSONAL_INFO) {
      return (
        <PersonalInfo
          handleChange={this.handleChange}
          nextStep1={this.nextStep1}
          values={values}
          firstName={firstName}
          lastName={lastName}
        />
      );
    }
    if (step === Constants.MORE_INFO) {
      return (
        <MoreInfo
          handleChange={this.handleChange}
          values={values}
          handlePrivacy={this.handlePrivacy}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          email={email}
          username={username}
          password={password}
          passwordConfirm={passwordConfirm}
        />
      );
    }
    if (step === Constants.SUCCESS_PAGE) {
      return <Success />;
    }
  };

  render() {
    const { step } = this.state;
    return (
      <div>
        {this.showStep()}
        <h3 className="clor">{step} / 3</h3>
      </div>
    );
  }
}

export default Main;
