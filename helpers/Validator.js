const validator = require('validator')

module.export = class Validator {
  static isNotEmail(value) {
    return !validator.isEmail(value)
  }

  static checkPassword(value) {
    return validator.isByteLength(value, { min: 6 })
  }

  static checkName(value) {
    return validator.isAlpha(value)
  }

  static checkPasswordEqual(value, confirm) {
    return value === confirm
  }
}
