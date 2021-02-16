const { Router } = require('express')
const auth = require('@/controllers/auth.controller')

const access = require('@/middleware/access')

const routes = new Router()

routes.get('/auth/me', auth.getLoginUser)

routes.get('/auth/google/callback', auth.getLoginUser)

routes.get('/auth/logout', access, auth.logout)

routes.post('/auth/register', auth.register)

routes.get('/auth/:token/confirm-register', auth.confirm)

routes.post('/auth/login', auth.login)

module.exports = routes
