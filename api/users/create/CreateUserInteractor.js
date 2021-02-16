const { WrongParametersError } = require('@/helpers/errors')
const Validator = require('@/helpers/Validator')

module.exports = class CreateUserInteractor {
  constructor({ responder, usersGateway, responseBuilder, authService }) {
    this._responder = responder
    this._usersGateway = usersGateway
    this._responseBuilder = responseBuilder
    this._authService = authService
  }
  execute(request) {
    
  }
}
