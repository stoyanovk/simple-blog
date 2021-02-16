module.exports = class CreateUserRequest {
  constructor(request) {
    this._username = request.body.username
    this._email = request.body.email
    this._password = request.body.password
    this._confirm = request.body.confirm
  }

  get username() {
    return this._username
  }

  get email() {
    return this._email
  }

  get password() {
    return this._password
  }

  get confirm() {
    return this._confirm
  }
}
