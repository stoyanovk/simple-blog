module.exports = class UserResponseBuilder {
  build(user) {
    return {
      name: user.name,
      avatar: user.avatar,
      email: user.email,
      id: user.id,
      description: user.description
    }
  }
}
