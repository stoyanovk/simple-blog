module.exports = class UpdateUserInteractor {
  constructor({ responder, usersGateway, imagesGateway, responseBuilder }) {
    this._responder = responder
    this._usersGateway = usersGateway
    this._responseBuilder = responseBuilder
    this._imagesGateway = imagesGateway
  }
  execute(request) {
    try {
      const userData = request.getUserData()

      const user = this._usersGateway.update({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        description: userData.description
      })

      const avatar = this._imagesGateway.update({
        userId: userData.id,
        label: userData.name,
        link: userData.avatar
      })

      return this._responder.respondSuccess({
        data: this._responseBuilder.build({ ...user, avatar })
      })
    } catch (err) {
      return this._responder.respondFailure(err)
    }
  }
}
