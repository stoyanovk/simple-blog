module.exports = class UserGateway {
  constructor({ model }) {
    this._userModel = model
  }

  create(values) {
    return this._userModel.create(values)
  }

  update(values) {
    return this._userModel.update(values, {
      where: {
        deletedAt: {
          id: values.id
        }
      }
    })
  }

  findById(id) {
    return this._usersModel.findByPk(id)
  }

  findAndCountAll({ pagination } = {}) {
    const query = {
      order: ['createdAt']
    }

    if (pagination) {
      const { page = 1, perPage } = pagination
      query.offset = page * perPage
      query.limit = perPage
    }

    return this._usersModel.findAndCountAll(query)
  }

  delete(id) {
    return this._usersModel.destroy({ where: { id } })
  }
}
