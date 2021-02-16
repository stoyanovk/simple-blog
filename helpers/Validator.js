const validator = require('validator')

module.export = class Validator {
  constructor(values) {
    this._values = values
  }

  checkUserData(values) {
    return this._isNotEmail() && this._checkPassword() &&  this._checkName()
  }

  _isNotEmail() {
    return !validator.isEmail(this._values.email)
  }

  _checkPassword() {
    return validator.isByteLength(this._values.password, { min: 6 })
  }

  _checkName(){
    return validator.isAlpha(this._values.name)
  }

  _checkPasswordEqual() {
    return this._values.password === this._values.confirm
  }
}
