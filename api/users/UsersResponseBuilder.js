module.exports = class UserResponseBuilder {
  build(user) {
    return {
      name: user.name,
      email: user.email,
      id: user.id,
      description: user.description
    }
  }
}
