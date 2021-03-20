module.exports = class CreateUserRequest {
  constructor(request) {
    this._username = request.body.username
    this._email = request.body.email
    this._password = request.body.password
    this._confirm = request.body.confirm
  }

  getUserData() {
    return {
      username: this._username,
      email: this._email,
      password: this._password,
      confirm: this._confirm
    }
  }
}
