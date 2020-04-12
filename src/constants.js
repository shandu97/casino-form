export const PERSONAL_INFO = 1;
export const MORE_INFO = 2;
export const SUCCESS_PAGE = 3;

export const FORM_VALID = ({ formErrorsMessages, ...rest }) => {
  let valid = true;

  Object.values(formErrorsMessages).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export const FIRST_NAME_CHECK = val => val.length > 2;
export const LAST_NAME_CHECK = val => val.length > 2;
export const USER_NAME_CHECK = val => val.length > 2;

export const EMAIL_REGEX = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export const PASSWORD_CHECK = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
);
