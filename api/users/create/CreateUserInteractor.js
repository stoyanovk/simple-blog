const { WrongParametersError } = require('@/helpers/Errors')
const Validator = require('@/helpers/Validator')
const AuthService = require('@/helpers/AuthService')

module.exports = class CreateUserInteractor {
  constructor({ responder, usersGateway, responseBuilder }) {
    this._responder = responder
    this._usersGateway = usersGateway
    this._responseBuilder = responseBuilder
  }
  execute(request) {
    try {
      const userData = request.getUserData()

      this._checkUserData(userData)

      this._checkUserExisting(userData.email)

      const password = AuthService.generateHash(userData.password)
      const user = this._usersGateway.create({
        name: userData.name,
        email: userData.email,
        password
      })
      
    } catch (err) {}
  }

  _checkUserExisting(email) {
    const user = this.usersGateway.findByEmail(email)
    if (user) {
      throw new WrongParametersError({
        message: 'user with this email already exist'
      })
    }
  }

  _checkUserData(data) {
    if (!Validator.checkName(data.name)) {
      throw new WrongParametersError({ message: 'invalid name' })
    }

    if (!Validator.checkName(data.password)) {
      throw new WrongParametersError({ message: 'invalid password' })
    }

    if (!Validator.checkName(data.email)) {
      throw new WrongParametersError({ message: 'invalid email' })
    }

    if (!Validator.checkName(data.name)) {
      throw new WrongParametersError({ message: 'password must be equal' })
    }
  }
}
