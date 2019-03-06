module.exports.function = function getUser (firstName, lastName, emailAddress, survey, demographics) {
  return {
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    survey: survey,
    demographics: demographics
  }
}
